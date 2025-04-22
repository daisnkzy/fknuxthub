// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-07-30",
	// https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
	future: { compatibilityVersion: 4 },
	// https://nuxt.com/modules
	modules: [
		"@nuxthub/core",
		"@nuxt/ui",
		"@nuxt/fonts",
		"@vueuse/nuxt",
		"radix-vue/nuxt",
		"nuxt-auth-utils",
		"nuxthub-ratelimit",
		"nuxt-umami",
		"@nuxt/content",
		"@nuxtjs/seo",
	],

	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
		},
	},

	fonts: {
		defaults: {
			weights: [300, 400, 500],
		},
	},

	nuxtHubRateLimit: {
		routes: {
			"/api/auth/*": {
				maxRequests: 5,
				intervalSeconds: 60,
			},
		},
	},

	content: {
		highlight: {
			theme: {
				default: "github-dark",
			},
		},
	},

	ogImage: {
		enabled: false,
	},

	icon: {
		clientBundle: {
			scan: true,
		},
	},

	// Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
	runtimeConfig: {
		session: {
			maxAge: 60 * 60 * 24 * 30 * 7, // Session expires after 7 months - change it accordingly
			password: process.env.NUXT_SESSION_PASSWORD || "",
		},
		expectedOrigin: process.env.BASE_URL ?? "http://localhost:3000",
		expectedRPID: process.env.RPID ?? "localhost",
		fromEmail: process.env.FROM_EMAIL,
		paymentProvider: process.env.PAYMENT_PROVIDER ?? "stripe",
		public: {
			baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
		},
	},

	// https://hub.nuxt.com/docs/getting-started/installation#options
	hub: {
		database: true,
		kv: true,
	},
	// https://devtools.nuxt.com
	devtools: { enabled: true },
});
