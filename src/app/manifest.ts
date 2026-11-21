import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Naim Hossain | Full-Stack Web Developer',
    short_name: 'Naim Hossain',
    description:
      'Portfolio of Naim Hossain — Full-Stack Web Developer & Co-Founder at Nexovate Labs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
