import { Resend } from "resend";
import { z } from "zod";

import { getContactEmailTemplate } from "../templates/ContactEmailTemplate";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

export type ContactData = z.infer<typeof contactSchema>;

export class ContactService {
    private resend: Resend;

    constructor() {
        this.resend = new Resend(process.env.RESEND_API_KEY);
    }

    async sendEmail(data: ContactData): Promise<{ id: string }> {
        const validation = contactSchema.safeParse(data);

        if (!validation.success) {
            throw new Error(validation.error.message);
        }

        const { name, email, subject, message } = validation.data;
        const emailTo = process.env.EMAIL_TO;

        if (!emailTo) {
            throw new Error("Email configuration error: EMAIL_TO is not set");
        }

        const timestamp = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "").replace(/-/g, ".") + "_UTC";

        const { data: resendData, error } = await this.resend.emails.send({
            from: "onboarding@resend.dev",
            to: emailTo,
            subject: `Contact Form: ${subject}`,
            replyTo: email,
            html: getContactEmailTemplate(name, email, subject, message, timestamp),
        });

        if (error) {
            console.error("Resend error:", error);
            throw new Error("Failed to send email");
        }

        return { id: resendData?.id || "unknown" };
    }
}
