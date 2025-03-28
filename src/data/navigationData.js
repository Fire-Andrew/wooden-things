export const navigationData = [
  {
    titleDe: "Bretter",
    titleEn: "Boards",
    titleEs: "Tablas",
    titleFr: "Planches",
    titleIt: "Taglieri",
    titleUa: "Дошки",
    href: "/kitchen-boards",
  },
  {
    titleDe: "Anzünder",
    titleEn: "Fire Starters",
    titleEs: "Iniciadores de fuego",
    titleFr: "Allume-feu",
    titleIt: "Accendifuoco",
    titleUa: "Розпалювачі",
    href: "/fire-starters",
  },
  {
    titleDe: "Zertifikate",
    titleEn: "Certificates",
    titleEs: "Certificados",
    titleFr: "Certificats",
    titleIt: "Certificati",
    titleUa: "Сертифікати",
    href: "/certificates",
  },
  {
    titleDe: "Über uns",
    titleEn: "About us",
    titleEs: "Sobre nosotros",
    titleFr: "À propos de nous",
    titleIt: "Chi siamo",
    titleUa: "Про нас",
    href: "/#about-us",
  },
  {
    titleDe: "Kontakt",
    titleEn: "Contact us",
    titleEs: "Contáctanos",
    titleFr: "Contactez-nous",
    titleIt: "Contattaci",
    titleUa: "Зв’яжіться з нами",
    href: "/#contacts",
  },
];

export const footerNavData = navigationData.filter(
  (el) => el.href !== "/#contacts"
);

[footerNavData[2], footerNavData[3]] = [footerNavData[3], footerNavData[2]];
