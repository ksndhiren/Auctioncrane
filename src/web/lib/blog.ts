import type { BlogPost } from "@/types/blog";

type BlogModule = { default: BlogPost };

const modules = import.meta.glob<BlogModule>("../content/blog/*.ts", {
  eager: true,
});

const posts = Object.values(modules)
  .map((module) => module.default)
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export function getAllBlogPosts() {
  return posts;
}

export function getFeaturedBlogPosts() {
  return posts.filter((post) => post.featured);
}

export function getBlogPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
