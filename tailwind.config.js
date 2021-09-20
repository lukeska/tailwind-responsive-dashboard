module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			padding: {
				"3/5": "60%",
			},
		},
	},
	variants: {
		extend: {
			translate: ["responsive", "group-hover", "hover", "focus"],
		},
	},
	plugins: [],
};
