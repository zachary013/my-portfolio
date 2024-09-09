/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
		colors: {
			primary: "#0d1321", 
			accent: {
				DEFAULT: "#E31B6D",
				hover: "#680747",
			},
			secondary: "#48e0e4",
		},

  		keyframes: {
            "accordion-down": {
                from: { height: '0' },
				to: { height: 'var(--accordion-content-height)' },
            },
            "accordion-up": {
                from: { height: 'var(--accordion-content-height)' },
				to: { height: '0' },
            },
        },
        animation: {
            "accordion-down": 'accordion-down 0.2s ease-out',
            "accordion-up": 'accordion-up 0.2s ease-out',
        },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
