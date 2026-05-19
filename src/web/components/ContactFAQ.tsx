import { useState } from "react";

export const faqs = [
  {
    question: "How does the crane marketplace work?",
    answer:
      "Jeff Martin Auctioneers connects buyers and sellers through direct inventory listings and crane auctions.",
  },
  {
    question: "Can I buy cranes directly from sellers?",
    answer:
      "Yes. Buyers can explore both direct inventory and upcoming auction opportunities.",
  },
  {
    question: "Can I sell used cranes through the platform?",
    answer:
      "Yes. Sellers can list used cranes and heavy equipment through the marketplace.",
  },
  {
    question: "Do you support dealer inventory listings?",
    answer:
      "Yes. We support dealer inventory, fleet equipment, and contractor listings.",
  },
  {
    question: "How do crane auctions work?",
    answer:
      "Buyers can review upcoming events, explore inventory, and participate in auction opportunities alongside direct listings.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <div>
            <p className="text-sm font-bold uppercase text-[#c9a227]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0f1725] sm:mt-4 sm:text-4xl">
              Crane Marketplace FAQ
            </h2>
            <div className="mt-6 space-y-3 sm:mt-8">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                >
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="flex w-full items-start justify-between gap-3 p-4 text-left transition-colors hover:bg-slate-50 sm:p-5"
                  >
                    <span className="text-[15px] font-bold leading-snug text-[#0f1725] sm:text-sm">
                      {faq.question}
                    </span>
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#c9a227] transition-transform ${
                        open === index ? "rotate-45" : ""
                      }`}
                    >
                      <svg className="h-2.5 w-2.5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  {open === index ? (
                    <div className="border-t border-slate-100 px-4 pb-4 text-sm leading-relaxed text-slate-600 sm:px-5 sm:pb-5">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-[#101827] text-white shadow-[0_22px_60px_rgba(15,23,37,0.18)]">
            <div className="relative">
              <img
                src="/hero.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width={1400}
                height={594}
                className="min-h-[360px] w-full object-cover sm:min-h-[520px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,27,.92)_0%,rgba(10,15,27,.82)_52%,rgba(10,15,27,.42)_100%)]" />
              <div className="absolute inset-0 flex items-end p-5 sm:p-8 lg:p-10">
                <div className="max-w-lg">
                  <p className="text-sm font-bold uppercase text-[#c9a227]">
                    Ready To Get Started?
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-tight sm:mt-4 sm:text-4xl">
                    Explore Crane Inventory Across The USA
                  </h2>
                  <p className="mt-3 text-[15px] leading-6 text-slate-300 sm:mt-4 sm:text-base sm:leading-7">
                    Browse crane inventory, upcoming auctions, dealer listings,
                    and equipment marketplace opportunities.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#equipment"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded bg-[#c9a227] px-5 text-sm font-black uppercase text-[#101827] transition hover:bg-[#b8911f] sm:w-auto"
                    >
                      Browse Crane Marketplace
                    </a>
                    <a
                      href="#connect"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded border border-white/25 px-5 text-sm font-black uppercase text-white transition hover:border-[#c9a227] hover:text-[#c9a227] sm:w-auto"
                    >
                      Sell Your Equipment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
