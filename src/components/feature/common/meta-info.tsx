"use client";

import Script from "next/script";

function MetaInfo() {
  return (
    <>
      <meta
        name="naver-site-verification"
        content={`${process.env.NEXT_PUBLIC_NAVER_SITE_ID}`}
      />
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://novelpanda.farm",
            "@type": "Organization",
            name: "노벨판다 | 웹소설 번역은 노벨판다",
            url: "https://novelpanda.farm",
            provider: {
              "@type": "Organization",
              name: "노벨판다",
            },
          }),
        }}
      />
    </>
  );
}

export default MetaInfo;
