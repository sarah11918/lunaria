import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/en/'
	},
	integrations: [
		starlight({
			title: 'Lunaria',
			defaultLocale: 'en', // optional
			locales: {
				'en': {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
				'fr': {
					label: 'Français',
					lang: 'fr',
				},
				ar: {
					label: 'العربية',
					dir: 'rtl',
				},
			},
				social: {
					github: 'https://github.com/withastro/starlight',
				},
			
				sidebar: [
					{
						label: 'Guides',
						items: [
							// Each item here is one entry in the navigation menu.
							{ label: 'Example Guide', link: '/en/guides/example/' },
						],
					},
					{
						label: 'Reference',
						autogenerate: { directory: '/en/reference' },
					},
				],
			}
		),
	],
});
