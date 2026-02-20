import { Resend } from "resend";
import { z } from "zod";

import { getContactEmailTemplate } from "../templates/ContactEmailTemplate";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required").max(50, "Subject must be at most 50 characters"),
    message: z.string().min(1, "Message is required").max(3000, "Message must be at most 3000 characters"),
});

export type ContactData = z.infer<typeof contactSchema>;

export class ContactService {
    private resend: Resend | null = null;

    constructor() { }

    async sendEmail(data: ContactData): Promise<{ id?: string; error?: string }> {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return { error: "Resend configuration error: RESEND_API_KEY is not set" };
        }

        if (!this.resend) {
            this.resend = new Resend(apiKey);
        }

        const validation = contactSchema.safeParse(data);

        if (!validation.success) {
            return { error: validation.error.message };
        }

        const { name, email, subject, message } = validation.data;
        const emailTo = process.env.EMAIL_TO;

        if (!emailTo) {
            return { error: "Email configuration error: EMAIL_TO is not set" };
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
            return { error: "Failed to send email" };
        }

        return { id: resendData?.id || "unknown" };
    }
}
