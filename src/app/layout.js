import "./globals.scss";
import { SiteProvider } from "@/context/SiteContext";
import TranslatorProvider from "@/translator/TranslatorProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


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