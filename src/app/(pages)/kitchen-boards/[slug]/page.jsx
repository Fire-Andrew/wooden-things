import React from 'react';
import KitchenBoardIdSection from '@/sections/kitchenBoardIdSection/KitchenBoardIdSection';


const page = ({params}) => {
  const slugId =  params?.slug;
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": process.env.NEXT_PUBLIC_SEO_URL,
          name: "Galen 1 main page.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_SEO_URL}kitchen-boards`,
          name: "Kitchen Chopping Boards page.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_SEO_URL}kitchen-boards/${slugId}`,
          name: "Kitchen Chopping Boards page.",
        },
      },
    ],
  };
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KitchenBoardIdSection />
</>
  )
}


export default page;