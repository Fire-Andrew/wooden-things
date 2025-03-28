import CertificatesSection from "@/sections/certificatesSection/CertificatesSection";


const page = () => {
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
              "@id": `${process.env.NEXT_PUBLIC_SEO_URL}certificates`,
              name: "Certificates page.",
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
            <CertificatesSection />
        </>
    );
};


export default page;