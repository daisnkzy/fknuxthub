import { userActions } from "~~/server/services/db/UserActions";

async function handleOAuthLogin(oauthUser) {
	let user = await userActions.findUserByEmail(oauthUser.email);
	if (!user) {
		user = await userActions.createUserWithOAuthAccount({
			email: oauthUser.email,
			name: oauthUser.name,
			avatarUrl: oauthUser.avatarUrl,
			emailVerified: true,
		});
	} else if (!user.avatarUrl) {
		user = await userActions.updateUser(user.id, {
			avatarUrl: oauthUser.avatarUrl,
		});
	}

	return user;
}

export default defineOAuthGoogleEventHandler({
	async onSuccess(event, { user }) {
		console.log("Google OAuth callback");
		const oauthUser = {
			email: user.email,
			name: user.name,
			avatarUrl: user.picture,
		};
		await handleOAuthLogin(oauthUser);

		await setUserSession(event, { user });
		return sendRedirect(event, "/dashboard");
	},
	onError(event, error) {
		console.error("Google OAuth error:", error);
		return sendRedirect(event, "/");
	},
});
