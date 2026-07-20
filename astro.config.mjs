// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages ? 'https://betinahr.github.io' : undefined,
	base: isGitHubPages ? '/ZLAT-WEBSITE' : '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
