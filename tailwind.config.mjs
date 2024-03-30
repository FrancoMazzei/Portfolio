/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-hero': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.78) 100%), url("/public/img/Cas6.webp")',
			},
			

		},
	},
	plugins: [],
}
