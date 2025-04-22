export default defineAppConfig({
	ui: {
		primary: "blue",
		gray: "slate",
		button: {
			default: { loadingIcon: "i-ph-spinner" },
			font: "font-normal",
			rounded: "rounded-lg",
			variant: {
				solid: "shadow-none",
			},
		},
		slideover: {
			width: "max-w-xs",
		},
	},

	seo: {
		title: "Easen - Get and convert Customers with Ease",
		description:
			"Modern web templates, starter kits help you convert more customers.",
		blogTitle: "Blogs - Easen",
		ogTitle: "Get and convert Customers with Ease",
		ogBlogTitle: "Easen Blogs 👋",
		ogBlogDescription: "A collection of blogs from Easen",
		ogSiteName: "easen.dev",
	},
});
