const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;

export default async function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/woodworking", "/shop", "/tag/renovation", "/type/quote", "/service-plus", "/type/video", "/layouts/header-main-simple"],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
