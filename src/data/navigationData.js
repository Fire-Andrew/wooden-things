export const navigationData = [
  {
    titleUa: "Дощечки",
    titleDe: "Дощечки",
    titleEn: "Boards",
    href: "/kitchen-boards",
  },
  {
    titleUa: "Розпалювачі",
    titleDe: "Розпалювачі",
    titleEn: "Fire Starters",
    href: "/fire-starters",
  },
  {
    titleUa: "Сертифікати",
    titleDe: "Сертифікати",
    titleEn: "Certificates",
    href: "/certificates",
  },
  {
    titleUa: "Про нас",
    titleDe: "Про нас",
    titleEn: "About us",
    href: "/#about-us",
  },
  {
    titleUa: "Контакти",
    titleDe: "Kontaktdaten",
    titleEn: "Contacts",
    href: "/#contacts",
  },
];

export const footerNavData = navigationData.filter(
  (el) => el.href !== "/#contacts"
);

[footerNavData[2], footerNavData[3]] = [footerNavData[3], footerNavData[2]];
