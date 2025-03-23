export const navigationData = [
  {
    titleUa: "Дощечки",
    titleDe: "",
    titleEn: "",
    href: "/kitchen-boards",
  },
  {
    titleUa: "Розпалювачі",
    titleDe: "",
    titleEn: "",
    href: "/igniters",
  },
  {
    titleUa: "Сертифікати",
    titleDe: "",
    titleEn: "",
    href: "/certificates",
  },
  {
    titleUa: "Про нас",
    titleDe: "",
    titleEn: "",
    href: "/#about-us",
  },
  {
    titleUa: "Контакти",
    titleDe: "",
    titleEn: "",
    href: "/#contacts",
  },
];

export const footerNavData = navigationData.filter(
  (el) => el.href !== "/#contacts"
);

[footerNavData[2], footerNavData[3]] = [footerNavData[3], footerNavData[2]];
