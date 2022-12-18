const routes = require('./src/router/sitemap-routes');
const moment = require('moment');

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
