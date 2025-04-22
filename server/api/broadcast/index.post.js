import { Resend } from "resend";
import { useEmail } from "~~/server/services/email";
import { renderWelcomeTemplate } from "~~/server/utils/email-templates";
import { emailVerificationSchema } from "~~/server/validations/users";

const { fromEmail } = useRuntimeConfig();

let resendClient;
try {
	resendClient = new Resend(process.env.RESEND_API_KEY);
} catch (error) {
	console.error("Resend API key is missing");
}

const audienceId = process.env.RESEND_AUDIENCE_ID;

async function sendWelcomeEmail(email) {
	if (import.meta.dev) {
		// dev only
		console.table({ email });
	} else {
		const html = renderWelcomeTemplate({
			email,
		});
		const emailOptions = {
			to: email,
			from: fromEmail,
			subject: "Ease - Welcome to the crew!",
			html,
		};
		await useEmail().send(emailOptions);
	}
}

export default defineEventHandler(async event => {
	try {
		const { email } = await readValidatedBody(event, body =>
			emailVerificationSchema.parse(body),
		);

		await resendClient.contacts.create({
			email: email,
			unsubscribed: false,
			audienceId: audienceId,
		});

		await sendWelcomeEmail(email);
		setResponseStatus(event, 200);
		return {
			status: "success",
			message: "Welcome! Stay tuned for something awesome!",
		};
	} catch (error) {
		console.log(error);
		throw error.statusCode
			? error
			: createError({
					statusCode: 500,
					statusMessage: "Internal Server Error",
				});
	}
});
