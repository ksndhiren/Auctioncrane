import ContactFAQ from "@/components/ContactFAQ";
import { faqs } from "@/components/ContactFAQ";
import EquipmentGrid from "@/components/EquipmentGrid";
import FleetSolutions from "@/components/FleetSolutions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InventoryByLocation from "@/components/InventoryByLocation";
import LeadForms from "@/components/LeadForms";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import UpcomingAuctions from "@/components/UpcomingAuctions";
import WhyUs from "@/components/WhyUs";
import StructuredData from "@/components/StructuredData";
import { getFeaturedBlogPosts } from "@/lib/blog";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/schema";

export default function HomePage() {
  const featuredPosts = getFeaturedBlogPosts().slice(0, 2);
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebsiteSchema(),
      getLocalBusinessSchema(),
      getFaqSchema(faqs),
      getBreadcrumbSchema([{ name: "Home", path: "/" }]),
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={homepageSchema} />
      <Header />
      <main>
        <Hero />
        <EquipmentGrid />
        <WhyUs />
        <HowItWorks />
        <InventoryByLocation />
        <FleetSolutions />
        <TeamSection />
        <LeadForms />
        <UpcomingAuctions />
        {featuredPosts.length > 0 ? (
          <section className="bg-[#0f1725] py-20 text-white" id="resources">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
                    Resources
                  </p>
                  <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-4xl">
                    Seller and buyer insights from the auction floor
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    Articles built for crane owners, fleet managers, contractors,
                    and dealers navigating equipment sales, sourcing, and
                    auction strategy.
                  </p>
                </div>
                <a
                  href="/blog"
                  className="inline-flex items-center rounded bg-[#c9a227] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#101827] transition-colors hover:bg-[#b8911f]"
                >
                  View all articles
                </a>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {featuredPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform hover:-translate-y-1"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a227]">
                        {post.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {post.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        <Testimonials />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
}
