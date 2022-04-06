module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 1.5s linear infinite',
			},
		},
		colors: {
			fontPurple: '#5D5F7D',
			white: 'white',
			orange: '#F9A826',
			red: '#E02424',
			yellow: 'rgb(253 224 71)',
		},
	},
	plugins: [],
};
