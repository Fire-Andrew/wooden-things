import HeroSection from "@/sections/heroSection/HeroSection";
import HomeFireStartersSection from "@/sections/homeFireStartersSection/HomeFireStartersSection";
import HomeAboutUsSection from "@/sections/homeAboutUsSection/HomeAboutUsSection";
import HomeFurniturePanelsSection from "@/sections/homeFurniturePanelsSection/HomeFurniturePanelsSection";
import HomeOakParquetSection from "@/sections/homeOakParquetSection/HomeOakParquetSection";


export default function Home() {

  return (
    <>
      <HeroSection />
      <HomeFireStartersSection />
      <HomeAboutUsSection />
      <HomeFurniturePanelsSection />
      <HomeOakParquetSection/>
    </>
  );
}