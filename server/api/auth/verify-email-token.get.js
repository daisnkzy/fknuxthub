import { authActions } from "~~/server/services/db/AuthActions";
import { userActions } from "~~/server/services/db/UserActions";
import { isWithinExpiryDate } from "~~/server/utils/otp";

export default defineEventHandler(async event => {
	try {
		const { token } = getQuery(event);
		if (!token) {
			throw createError({ statusCode: 400, statusMessage: "Missing token" });
		}

		const storedToken = await authActions.findEmailVerificationCode(token);
		if (!storedToken) {
			throw createError({
				statusCode: 400,
				statusMessage: "Invalid verification code",
			});
		}
		if (!isWithinExpiryDate(storedToken.expiresAt)) {
			throw createError({
				statusCode: 400,
				statusMessage: "Verification code has expired",
			});
		}
		const user = await userActions.findUserByUserId(storedToken.userId);
		if (!user) {
			throw createError({ statusCode: 400, statusMessage: "User not found" });
		}
		if (!user.emailVerified) {
			await userActions.verifyUser(user.id);
		}

		await userActions.updateLastActive(user.id);

		await setUserSession(event, { user });
		await authActions.deleteEmailVerificationCode(storedToken.id);
		const otp = await authActions.findOneTimePasswordByUserId(user.id);
		if (otp) {
			await authActions.deleteOneTimePassword(otp.id);
		}
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
