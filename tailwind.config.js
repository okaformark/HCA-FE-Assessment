/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			colors: {
				primary: '#031733',
				secondary: '#FFFF',
				text: '#00558C',
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
		},
	},
	plugins: [],
};
