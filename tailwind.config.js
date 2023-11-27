/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		screens: {
			xs: { max: '640px' },
		},
		extend: {
			backgroundImage: {
				'todo-pattern': "url('/public/IMG_6012.jpg')",
			},
		},
	},
	plugins: [],
}
