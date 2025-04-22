const authMiddleware = defineEventHandler(async event => {
	const path = getRequestURL(event).pathname;
	// Only apply middleware to API routes
	if (!path.startsWith("/api/")) {
		return;
	}

	// Define public path patterns that should skip authentication
	const publicPathPatterns = [
		"/api/auth/*",
		"/api/_hub/*",
		"/api/payment/webhook/*",
		"/api/payment/plans",
		"/api/broadcast",
		"/api/_content/*",
		"/api/_mdc/*",
		"/api/_nuxt_icon/*",
		// Add any other public paths here
	];

	// Check if the current path matches any of the public patterns
	const isPublicPath = publicPathPatterns.some(pattern => {
		// Convert the pattern to a regex
		const regexPattern = pattern.replace("*", ".*");
		const regex = new RegExp(`^${regexPattern}$`);
		return regex.test(path);
	});

	if (isPublicPath) {
		return;
	}

	const session = await getUserSession(event);
	if (session.user) {
		event.context.user = session.user;
		return;
	}

	throw createError({
		statusCode: 401,
		message: "Unauthorized",
	});
});

export default authMiddleware;
