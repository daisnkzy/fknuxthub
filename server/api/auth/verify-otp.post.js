import { authActions } from "~~/server/services/db/AuthActions";
import { userActions } from "~~/server/services/db/UserActions";
import { isWithinExpiryDate } from "~~/server/utils/otp";
import { otpVerificationSchema } from "~~/server/validations/users";

export default defineEventHandler(async event => {
	try {
		const { email, code } = await readValidatedBody(event, body =>
			otpVerificationSchema.parse(body),
		);

		const otp = await authActions.findOneTimePassword(code, email);
		if (!otp) {
			throw createError({ statusCode: 400, statusMessage: "Invalid OTP" });
		}
		if (!isWithinExpiryDate(otp.expiresAt)) {
			throw createError({ statusCode: 400, statusMessage: "OTP has expired" });
		}

		const user = await userActions.findUserByUserId(otp.userId);
		if (!user) {
			throw createError({ statusCode: 404, statusMessage: "User not found" });
		}
		if (!user.emailVerified) {
			await userActions.verifyUser(otp.userId);
		}

		await authActions.deleteOneTimePassword(otp.id);

		const emailVerificationCode =
			await authActions.findEmailVerificationCodeByUserId(user.id);
		if (emailVerificationCode) {
			await authActions.deleteEmailVerificationCode(emailVerificationCode.id);
		}

		await userActions.updateLastActive(user.id);

		await setUserSession(event, { user });
		return sendRedirect(event, "/dashboard");
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
