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

export function getBlogPath(post: BlogPost) {
  const categorySlug = post.categorySlug || slugify(post.category);
  return categorySlug ? `/blog/${categorySlug}/${post.slug}` : `/blog/${post.slug}`;
}

function slugify(value: string) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
