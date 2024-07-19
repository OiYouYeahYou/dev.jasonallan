const daisyThemes = require("daisyui/src/theming/themes")

const globalOverrrides = {
	"--rounded-btn": "0em",
	".btn": {
		paddingLeft: "2em",
		paddingRight: "2em",
	},
}

function customTheme(theme, extra) {
	if (!Object.hasOwn(daisyThemes, theme)) {
		throw new TypeError(`Daisy UI doesn't have this theme: ${theme}`)
	}

	return {
		...daisyThemes[theme],
		...globalOverrrides,
		...extra,
	}
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				fira: "Yeseva One, Times New Roman, serif",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: customTheme("light"),
				dark: customTheme("dark", {
					primary: "white",
					"base-100": "black",
				}),
			},
		],
	},
}
