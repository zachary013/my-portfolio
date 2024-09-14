export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://zakariaeazarkan.vercel.app/sitemap.xml',
    }
  }