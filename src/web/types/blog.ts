export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  heroImage: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  sections: BlogSection[];
  faq?: BlogFaq[];
  cta: {
    title: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
  };
};
