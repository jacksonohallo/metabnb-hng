/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xxs: "320px",
			xs: "375px",
			sm: "425px",
			md: "768px",
			lg: "976px",
			xl: "1024px",
			xxl: "1440px",
			sl: "2560px",
		},
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
