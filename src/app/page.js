import HeroSection from "@/sections/heroSection/HeroSection";
import HomeFireStartersSection from "@/sections/homeFireStartersSection/HomeFireStartersSection";
import HomeAboutUsSection from "@/sections/homeAboutUsSection/HomeAboutUsSection";
import HomeFurniturePanelsSection from "@/sections/homeFurniturePanelsSection/HomeFurniturePanelsSection";
import HomeOakParquetSection from "@/sections/homeOakParquetSection/HomeOakParquetSection";


export default function Home() {
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': process.env.NEXT_PUBLIC_SEO_URL,
        name: 'Galen 1 main page.',
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <HomeFireStartersSection />
      <HomeAboutUsSection />
      <HomeFurniturePanelsSection />
      <HomeOakParquetSection />
    </>
  );
}