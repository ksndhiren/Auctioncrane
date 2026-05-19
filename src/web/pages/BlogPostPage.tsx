import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import { getBlogPath, getBlogPostBySlug } from "@/lib/blog";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/schema";

type BlogPostPageProps = {
  slug: string;
};

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f7f8fb] text-[#101827]">
        <Header />
        <main className="mx-auto max-w-3xl px-4 pb-24 pt-40 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
            Article not found
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight">
            We couldn&apos;t find that blog post
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The article may have moved or the URL may be incorrect.
          </p>
          <a
            href="/blog"
            className="mt-8 inline-flex rounded bg-[#c9a227] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#101827]"
          >
            Back to blog
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: getBlogPath(post) },
      ]),
      getBlogPostingSchema(post),
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#101827]">
      <StructuredData data={articleSchema} />
      <Header />
      <main className="pb-24 pt-28">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <a
            href="/blog"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6e10]"
          >
            Back to blog
          </a>

          <header className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={post.heroImage}
                alt={post.heroImageAlt || post.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <span className="rounded-full bg-[#f6efd4] px-3 py-1 text-[#8f6e10]">
                  {post.category}
                </span>
                <span>{post.publishedAt}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {post.description}
              </p>
            </div>
          </header>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="blog-prose">
              {post.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {post.sections.map((section) => (
                <section key={section.heading} className="mt-10">
                  <h2>{section.heading}</h2>
                  {section.image ? (
                    <figure className="my-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {section.image.creditName ? (
                        <figcaption className="px-4 py-3 text-sm text-slate-500">
                          Image:{" "}
                          {section.image.creditUrl ? (
                            <a
                              href={section.image.creditUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium text-slate-600 underline-offset-2 hover:underline"
                            >
                              {section.image.creditName}
                            </a>
                          ) : (
                            section.image.creditName
                          )}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.callout ? (
                    <div className="rounded-2xl border border-[#d9bf5f] bg-[#fff8de] px-5 py-4 text-base font-medium leading-7 text-[#5b4709]">
                      {section.callout}
                    </div>
                  ) : null}
                </section>
              ))}

              {post.faq?.length ? (
                <section className="mt-12">
                  <h2>Frequently asked questions</h2>
                  <div className="mt-6 space-y-4">
                    {post.faq.map((item) => (
                      <div
                        key={item.question}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>

          <section className="mt-10 rounded-[2rem] bg-[#101827] p-8 text-white shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a227]">
              Next step
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight">
              {post.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {post.cta.body}
            </p>
            <a
              href={post.cta.buttonHref}
              className="mt-6 inline-flex rounded bg-[#c9a227] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#101827]"
            >
              {post.cta.buttonLabel}
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
