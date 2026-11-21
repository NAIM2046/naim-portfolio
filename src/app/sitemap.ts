import type { MetadataRoute } from 'next';
import { PRODUCTION_APPS } from '@/data/portfolioData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://naim.nexovatelabs.com';

  const projectRoutes: MetadataRoute.Sitemap = PRODUCTION_APPS.map((app) => ({
    url: `${baseUrl}/projects/${app.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
