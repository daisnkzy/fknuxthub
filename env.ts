import { createEnv } from "@t3-oss/env-nuxt";
import { z } from "zod";

export const env = createEnv({
	server: {
		BASE_URL: z.string().url(),
		RPID: z.string(),
		RESEND_API_KEY: z.string().min(1),
		RESEND_AUDIENCE_ID: z.string().min(1),
		NUXT_UMAMI_HOST: z.string().url(),
		NUXT_UMAMI_ID: z.string(),
		NUXT_OAUTH_GITHUB_CLIENT_ID: z.string().min(1),
		NUXT_OAUTH_GITHUB_CLIENT_SECRET: z.string().min(1),
		NUXT_OAUTH_GOOGLE_CLIENT_ID: z.string().min(1),
		NUXT_OAUTH_GOOGLE_CLIENT_SECRET: z.string().min(1),
		NUXT_SESSION_PASSWORD: z.string().min(1),
		STRIPE_SECRET_KEY: z.string().min(1),
		STRIPE_PUBLIC_KEY: z.string().min(1),
		STRIPE_WEBHOOK_SECRET: z.string().min(1),
		PAYMENT_PROVIDER: z.enum(["stripe", "lemonsqueezy"]),
	},
});
