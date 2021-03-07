module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			translate: ["responsive", "group-hover", "hover", "focus"],
		},
	},
	plugins: [],
};
