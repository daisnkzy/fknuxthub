import { Resend } from "resend";

type EmailOptions = {
	from: string;
	to: string | string[];
	subject: string;
	html?: string;
	text?: string;
};

export class ResendEmailService {
	private resendClient: Resend;

	constructor() {
		const apiKey = process.env.RESEND_API_KEY;
		if (!apiKey) {
			throw new Error("Resend API key is missing");
		}
		this.resendClient = new Resend(apiKey);
	}

	async send(emailOptions: EmailOptions): Promise<void> {
		const { to, from, subject, text, html } = emailOptions;

		if (!to || !from) {
			throw new Error("Email 'to' and 'from' fields are required");
		}

		if (!text && !html) {
			throw new Error("Either 'text' or 'html' content must be provided");
		}

		try {
			await this.resendClient.emails.send({
				from,
				to: Array.isArray(to) ? to : [to],
				subject,
				text,
				html,
				react: null,
			});
			console.log("Email sent successfully");
		} catch (error) {
			console.error("Failed to send email with Resend:", error);
			throw error;
		}
	}
}
