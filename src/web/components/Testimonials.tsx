const testimonials = [
  {
    quote: "Bryan and his team handled the sale of our entire 14-crane fleet flawlessly. The auction exceeded our reserve prices across the board — we recovered significantly more capital than we anticipated from a private sale. The process was transparent, professional, and quick.",
    name: "Marcus D.",
    title: "VP of Fleet Operations",
    company: "Mid-Continent Construction Group",
    location: "Texas, USA",
    initials: "MD",
  },
  {
    quote: "As a buyer, AuctionCrane is exactly what I needed. Bryan took the time to understand what we were looking for — a 200-ton all-terrain — and pointed us to the right auction. We won the unit at well below new replacement cost. Easy process, honest people.",
    name: "Steve R.",
    title: "Equipment Director",
    company: "Riverside Industrial Services",
    location: "Ohio, USA",
    initials: "SR",
  },
  {
    quote: "We'd been trying to sell three idle hydraulic truck cranes for six months through dealers with no success. One virtual auction event later and all three were sold to qualified buyers. I wish we'd contacted Bryan sooner. The turnaround was remarkable.",
    name: "Patricia M.",
    title: "Asset Manager",
    company: "Shoreline Energy Partners",
    location: "Louisiana, USA",
    initials: "PM",
  },
];

const stats = [
  { value: "2009", label: "Founded" },
  { value: "4", label: "US Locations" },
  { value: "500+", label: "Cranes Sold/Year" },
  { value: "Global", label: "Buyer Network" },
];

export default function Testimonials() {
  return (
    <section className="bg-[#1a1f2e] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">What Our Clients Say</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Trusted by Crane Owners &<br className="hidden sm:block" /> Equipment Buyers
          </h2>
          <p className="mt-4 text-gray-400 text-sm italic">
            * Placeholder testimonials — real client quotes coming soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-7 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </blockquote>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center text-[#1a1f2e] font-black text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.title}, {t.company}</div>
                  <div className="text-gray-500 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/10 pt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#c9a227] mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
