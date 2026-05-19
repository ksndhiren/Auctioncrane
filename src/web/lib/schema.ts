import type { BlogPost } from "@/types/blog";
import { getBlogPath } from "@/lib/blog";

export const SITE_URL = "https://www.cranesauctions.com";
export const SITE_NAME = "CranesAuctions";
export const BUSINESS_NAME = "Jeff Martin Auctioneers";
export const BUSINESS_PHONE = "+16015086207";
export const BUSINESS_EMAIL = "bryan.c@jeffmartinauctioneers.com";
export const BUSINESS_STREET = "6237 US Highway 49";
export const BUSINESS_CITY = "Brooklyn";
export const BUSINESS_REGION = "MS";
export const BUSINESS_POSTAL_CODE = "39425";
export const BUSINESS_COUNTRY = "US";
export const LOGO_URL = `${SITE_URL}/Cranesauctions.png`;

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    alternateName: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "Crane marketplace for buying and selling cranes, heavy equipment inventory, dealer listings, and upcoming crane auctions.",
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    sameAs: ["https://www.jeffmartinauctioneers.com"],
    parentOrganization: {
      "@type": "Organization",
      name: "Jeff Martin Auctioneers Inc",
      url: "https://www.jeffmartinauctioneers.com",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    image: LOGO_URL,
    logo: LOGO_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_STREET,
      addressLocality: BUSINESS_CITY,
      addressRegion: BUSINESS_REGION,
      postalCode: BUSINESS_POSTAL_CODE,
      addressCountry: BUSINESS_COUNTRY,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBlogPostingSchema(post: BlogPost) {
  const heroImageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;

  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: `${SITE_URL}${getBlogPath(post)}`,
    image: [heroImageUrl],
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
  };
}
