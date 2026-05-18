import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import { getAllBlogPosts } from "@/lib/blog";
import { getBreadcrumbSchema } from "@/lib/schema";

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    ...getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  };

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#101827]">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main className="pb-20 pt-32">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
              CranesAuctions blog
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-[#101827] md:text-5xl">
              Market insights for crane buyers, sellers, and fleet teams
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Practical guidance on crane auctions, fleet disposition, equipment
              marketing, and buyer readiness from a team focused on heavy
              equipment transactions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <a href={`/blog/${post.slug}`} className="block aspect-[16/9]">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </a>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    <span className="rounded-full bg-[#f6efd4] px-3 py-1 text-[#8f6e10]">
                      {post.category}
                    </span>
                    <span>{post.publishedAt}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black uppercase leading-tight text-[#101827]">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {post.description}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center text-sm font-bold uppercase tracking-[0.14em] text-[#c9a227]"
                  >
                    Read article
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
