import "./globals.scss";
import { SiteProvider } from "@/context/SiteContext";
import TranslatorProvider from "@/translator/TranslatorProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Galen 1 Wooden boards & Fire starters",
  description:
    "GALEN-1: Excellence in Woodcraft. We export 100% of our products to the U.S., U.K., Germany and other markets.",
  keywords: [
    "Kitchen Chopping Boards",
    "Boards",
    "Igniters",
    "Galen 1",
  ],
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="uk-UA">
      <body>
        <SiteProvider>
          <TranslatorProvider>
            <Header />
            <main>{children}</main>
            <Footer />         
          </TranslatorProvider>
        </SiteProvider>
      </body>
    </html>
  );
}