import { useState } from "react";

const faqs = [
  {
    q: "How do I consign a crane for auction?",
    a: "Fill in the 'Sell a Crane' form above with your crane details. Bryan Carr will personally review your submission and contact you within 24 hours to discuss valuation, the best upcoming auction event, and next steps. There's no commitment required at this stage.",
  },
  {
    q: "What types of cranes do you accept?",
    a: "We accept all types of mobile and lifting equipment: all-terrain cranes, crawler cranes, hydraulic truck cranes, rough terrain cranes, carry decks, boom trucks, telescopic crawlers, tower cranes, and ancillary lifting equipment. If it lifts, we can auction it.",
  },
  {
    q: "How does the auction process work for sellers?",
    a: "Once you consign your equipment, our team handles photography, descriptions, marketing, and bidder outreach. Your crane is featured in the appropriate auction event and sold to the highest bidder. You receive your proceeds after settlement, less our commission.",
  },
  {
    q: "Do I need to transport my crane to an auction location?",
    a: "Not necessarily. Virtual auctions allow equipment to be sold from its current location. In-person auction events may require transportation to one of our facilities, but our team can advise on the most practical approach for your specific equipment.",
  },
  {
    q: "How do I register as a buyer?",
    a: "Complete the 'Register as a Buyer' form above, or register directly on the Jeff Martin Auctioneers platform at jeffmartinauctioneers.com. Our team can also set up your buyer account and notify you when equipment matching your requirements comes available.",
  },
  {
    q: "Can I bid online from outside North America?",
    a: "Yes. Our virtual auctions are open to registered buyers worldwide. Online bidding is available for most auction events, allowing international buyers to compete for equipment without needing to attend in person.",
  },
  {
    q: "What is your commission structure?",
    a: "Commission rates are discussed during the consignment process and depend on equipment type, value, and auction format. Contact Bryan Carr directly for a no-obligation discussion about your specific situation.",
  },
];

type ContactState = "idle" | "submitting" | "success" | "error";

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [state, setState] = useState<ContactState>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, fullName: form.name, type: "contact" }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">Get in Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f2e] leading-tight">
            Contact & FAQ
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FAQ */}
          <div>
            <h3 className="text-xl font-black text-[#1a1f2e] mb-6 uppercase tracking-wide">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-3 p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-[#1a1f2e] leading-snug">{faq.q}</span>
                    <span className={`w-5 h-5 rounded-full border-2 border-[#c9a227] flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform ${open === i ? "rotate-45" : ""}`}>
                      <svg className="w-2.5 h-2.5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  {open === i && (
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact form + details */}
          <div>
            <h3 className="text-xl font-black text-[#1a1f2e] mb-6 uppercase tracking-wide">Send Us a Message</h3>

            {state === "success" ? (
              <div className="p-8 bg-[#1a1f2e] rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-bold">Message received! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Name *</label>
                    <input required value={form.name} onChange={set("name")} placeholder="Your name" className="w-full h-10 px-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className="w-full h-10 px-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone</label>
                  <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 555 000 0000" className="w-full h-10 px-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#c9a227]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Message *</label>
                  <textarea required value={form.message} onChange={set("message")} placeholder="How can we help?" rows={4} className="w-full px-3 py-2.5 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] resize-none" />
                </div>
                {state === "error" && <p className="text-red-500 text-sm">Something went wrong. Please call 601.508.6207.</p>}
                <button type="submit" disabled={state === "submitting"} className="w-full py-3.5 bg-[#1a1f2e] text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-[#262d42] transition-colors disabled:opacity-60">
                  {state === "submitting" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}

            {/* Contact details */}
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Call / WhatsApp</div>
                  <a href="tel:+16015086207" className="text-[#1a1f2e] font-bold text-sm hover:text-[#c9a227]">601.508.6207</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Email</div>
                  <a href="mailto:bryan.c@jeffmartinauctioneers.com" className="text-[#1a1f2e] font-bold text-sm hover:text-[#c9a227] whitespace-nowrap">bryan.c@jeffmartinauctioneers.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Headquarters</div>
                  <div className="text-[#1a1f2e] font-bold text-sm">Brooklyn, MS 39425</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">All Auctions</div>
                  <a href="https://www.jeffmartinauctioneers.com" target="_blank" rel="noopener noreferrer" className="text-[#1a1f2e] font-bold text-sm hover:text-[#c9a227]">jeffmartinauctioneers.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
