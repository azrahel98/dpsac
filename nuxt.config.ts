export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
	site: { url: process.env.SITE_URL || 'https://<tu-usuario>.github.io/dpsac' },
	components: [
		{ path: '~/components/catalogo', pathPrefix: false },
		'~/components',
	],
	app: {
		baseURL: process.env.BASE_URL || '/dpsac/',
		head: {
			meta: [
				{ name: 'google-site-verification', content: '6HJIZ9YN5lWpSrLdwnmExwPUQfwKxVWksphrkI0EDpk' }
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				{
					rel: 'preload',
					href: '/img/bg2.jpg',
					as: 'image',
					fetchpriority: 'high',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
				},
			],
		},
	},
});
