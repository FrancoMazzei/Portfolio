/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-hero': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.78) 100%), url("/public/img/Cas6.webp")',
				'fom-mi-hero': 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 54%, rgba(0,0,0,0.9) 87%, rgba(0,0,0,0.9) 100%), url("/public/img/Fom.webp")',
				'her-hero': 'linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.95) 27%, rgba(0,0,0,0.95) 77%, rgba(0,0,0,0.95) 100%), url("/public/img/F3-4.webp")',
				'proyec-hero':'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 9%, rgba(0,0,0,0.8) 91%, rgba(0,0,0,1) 100%), url("/public/img/FP.webp")',
			},	
			keyframes: {
				borderMove: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' },
				},
			},
			colors: {
				'custom-purple': {
				'500': 'rgb(173, 115, 166)',
				}, 
				customOrange: '#ff6f00',
				
			},
			
			

			
		},
	},
	plugins: [],
}
