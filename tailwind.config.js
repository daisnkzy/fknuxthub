const defaultSans = [
	"SF Pro Display",
	"-apple-system",
	"system-ui",
	"Apple Color Emoji",
	"Segoe UI Emoji",
	"Segoe UI Symbol",
	"Noto Color Emoji",
];

const defaultSerif = [
	"ui-serif",
	"Georgia",
	"Cambria",
	"Times New Roman",
	"Times",
	"serif",
];

export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Public Sans", "Inter", ...defaultSans],
				serif: ["Georgia", ...defaultSerif],
			},

			aspectRatio: {
				auto: "auto",
				square: "1 / 1",
				video: "16 / 9",
			},

			keyframes: {
				risingstar: {
					from: {
						transform: "translateY(0px)",
					},
					to: {
						transform: "translateY(-3840px)",
					},
				},
			},
			animation: {
				risingstar: "risingstar 1000s linear infinite",
			},
		},
	},
};
