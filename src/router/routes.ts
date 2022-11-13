export const routes = [
	{
		path: '/',
		component: () => import("@/views/Landing.vue"),
		meta: {
			sitemap: {
				lastmod: '2022-01-01',
			}
		}
	},
	{
		path: '/business-impact',
		component: () => import("@/views/BusinessImpact.vue"),
		meta: {
			sitemap: {
				lastmod: '2022-01-01',
			}
		}
	},
	{
		path: '/decision/:settings?',
		component: () => import("@/views/Decision.vue"),
		meta: {
			sitemap: {
				lastmod: '2022-01-01',
				slugs: [{settings: ""}]
			}
		}
	},
	{
		path: '/meeting-guide',
		component: () => import("@/views/MeetingGuide.vue"),
		meta: {
			sitemap: {
				lastmod: '2022-05-01',
			}
		}
	},
	{
		path: '/against-asap',
		component: () => import("@/views/AgainstASAP.vue"),
		meta: {
			sitemap: {
				lastmod: '2022-08-01',
			}
		}
	}
];