import { productsData } from '@/data/productsData';
const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;

export default async function sitemap() {

    const oneProduct = productsData?.map((el) => ({
        url: `${baseUrl}kitchen-boards/${el.slug}`,
        lastModified: "2025-03-28",
        changeFrequency: "monthly",
        priority: 0.5,
      }));

    const routes = [
      { href: "", priority: 1.0 },
      { href: "kitchen-boards", priority: 0.8 },
      { href: "fire-starters", priority: 0.8 },
      { href: "certificates", priority: 0.6 },
    ]?.map((route) => ({
      url: `${baseUrl}${route.href}`,
      lastModified: "2025-03-28",
      changeFrequency: "monthly",
      priority: route.priority,
    }));

    return [...routes, ...oneProduct];

}