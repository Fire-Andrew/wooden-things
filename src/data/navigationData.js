export const navigationData = [
  {
    titleUa: "Дошки",
    titleDe: "Bretter",
    titleEn: "Boards",
    href: "/kitchen-boards",
  },
  {
    titleUa: "Розпалювачі",
    titleDe: "Feuerstarter",
    titleEn: "Fire Starters",
    href: "/fire-starters",
  },
  {
    titleUa: "Сертифікати",
    titleDe: "Bescheinigungen",
    titleEn: "Certificates",
    href: "/certificates",
  },
  {
    titleUa: "Про нас",
    titleDe: "Über uns",
    titleEn: "About us",
    href: "/#about-us",
  },
  {
    titleUa: "Зв’яжіться з нами",
    titleDe: "Kontakt",
    titleEn: "Contact us",
    href: "/#contacts",
  },
];

export const footerNavData = navigationData.filter(
  (el) => el.href !== "/#contacts"
);

[footerNavData[2], footerNavData[3]] = [footerNavData[3], footerNavData[2]];
