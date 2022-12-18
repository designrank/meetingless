const localRequire = require('esm')(module)
const {routes} = localRequire('./src/router/routes.ts');
const moment = localRequire('moment');

module.exports = {
	pluginOptions: {
		sitemap: {
			outputDir: 'dist',
			// urls: routes,
			routes,
			baseURL: 'https://meetingless.io',
			// Default meta tags for every URL
			// These will be overridden by URL-specific tags
			defaults: {
				lastmod:    moment().format('YYYY-MM-DD'),
				changefreq: 'monthly',
				priority:   1.0,
			},
		}
	}
}
