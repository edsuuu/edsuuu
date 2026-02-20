export const getContactEmailTemplate = (name: string, email: string, subject: string, message: string, timestamp: string) => {
    const primaryColor = "#00a4ef";

    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Inbound Message</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            font-family: 'Courier New', Courier, monospace;
        }
        table {
            border-collapse: collapse;
        }
    </style>
</head>
<body style="margin: 0; padding: 40px 0; background-color: #ffffff;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="750" style="border: 1px solid #f1f1f1; border-spacing: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <!-- Header -->
        <tr>
            <td align="center" bgcolor="#000000" style="padding: 50px 0;">
                <div style="color: ${primaryColor}; font-weight: bold; font-size: 36px; letter-spacing: -2px; margin-bottom: 15px;">&lt;E/&gt;</div>
                <div style="color: #ffffff; font-size: 12px; font-weight: bold; letter-spacing: 6px; text-transform: uppercase;">Inbound_Message</div>
            </td>
        </tr>

        <!-- Main Content -->
        <tr>
            <td bgcolor="#ffffff" style="padding: 50px 60px; background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px); background-size: 20px 20px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="padding-bottom: 25px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="120" style="font-size: 11px; font-weight: bold; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 2px;">Sender:</td>
                                    <td style="font-size: 16px; font-weight: 500; color: #111827;">${name}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 25px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="120" style="font-size: 11px; font-weight: bold; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 2px;">Email:</td>
                                    <td style="font-size: 16px; font-weight: 500; color: #111827;">${email}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 35px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="120" style="font-size: 11px; font-weight: bold; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 2px;">Subject:</td>
                                    <td style="font-size: 16px; font-weight: 500; color: #111827;">${subject}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="font-size: 11px; font-weight: bold; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;">Message:</div>
                            <div style="background-color: rgba(255,255,255,0.8); border: 1px solid #f1f1f1; padding: 25px; font-size: 16px; color: #374151; line-height: 1.7; min-height: 150px;">
                                ${message.replace(/\n/g, "<br/>")}
                            </div>
                        </td>
                    </tr>

                    <!-- Digital Signature -->
                    <tr>
                        <td style="padding-top: 50px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="font-size: 11px; font-weight: bold; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 2px; width: 150px;">Digital Signature</td>
                                    <td><hr style="border: 0; border-top: 1px solid #f1f1f1;" /></td>
                                </tr>
                            </table>
                            <div style="font-size: 16px; font-weight: bold; color: #111827; margin-top: 15px;">Edson // Fullstack</div>
                            <div style="font-size: 11px; color: #9ca3af; margin-top: 5px; text-transform: uppercase;">Hash_Verified: OK</div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td bgcolor="#f9fafb" style="padding: 40px; border-top: 1px solid #f1f1f1; text-align: center;">
                <table align="center" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="padding-bottom: 15px;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="8" height="8" bgcolor="#22c55e" style="border-radius: 50%;"></td>
                                    <td style="padding-left: 12px; font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 3px;">Secure Transmission Node: 77.102.XX.4</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 9px; color: #d1d5db; text-transform: uppercase;">Timestamp: ${timestamp}</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};
