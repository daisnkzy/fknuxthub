import { userActions } from "~~/server/services/db/UserActions";
import { useEmail } from "~~/server/services/email";
import {
	generateEmailVerificationCode,
	generateOneTimePassword,
} from "~~/server/utils/auth";
import { renderOtpTemplate } from "~~/server/utils/email-templates";
import { emailVerificationSchema } from "~~/server/validations/users";

const { fromEmail } = useRuntimeConfig();
const { baseUrl } = useRuntimeConfig().public;

async function sendOtpEmail(email, oneTimePassword, emailVerificationCode) {
	if (import.meta.dev) {
		// dev only
		console.table({ email, oneTimePassword, emailVerificationCode });
	} else {
		const html = renderOtpTemplate({
			logoUrl: "https://demo.startease.dev/logo.png",
			code: oneTimePassword,
			link: `${baseUrl}/api/auth/verify-email-token?token=${emailVerificationCode}`,
			domain: baseUrl,
		});
		const emailOptions = {
			to: email,
			from: fromEmail,
			subject: "Ease - Login with OTP",
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

		let user = await userActions.findUserByEmail(email);
		if (!user) {
			user = await userActions.createUserWithEmail(email);
		}

		const emailVerificationCode = await generateEmailVerificationCode(user.id);
		const oneTimePassword = await generateOneTimePassword(user.id, email);
		await sendOtpEmail(email, oneTimePassword, emailVerificationCode);
		setResponseStatus(event, 201);
		return {
			status: "success",
			message: "One Time Password sent to your email",
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
