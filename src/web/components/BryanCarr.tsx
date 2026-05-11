const credentials = [
  "30+ years in the Heavy Lift Industry (since 1992)",
  "National Sales Director, Crane & Heavy Transport, Jeff Martin Auctioneers",
  "Partner with The Manitowoc Company, a world-leading crane manufacturer",
  "Active member, Specialized Carriers & Rigging Association (SC&RA)",
  "Specialist in: rental, sales, bridge construction, marine, steel erection, wind energy",
  "Handles consignments from single units to full fleet liquidations",
];

export default function BryanCarr() {
  return (
    <section id="bryan-carr" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">Your Crane Auction Expert</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f2e] leading-tight">
            Meet Bryan Carr
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/bryan-carr.jpg"
                alt="Bryan Carr, National Sales Director, Crane & Heavy Transport"
                className="w-full object-cover object-top"
                style={{ maxHeight: "520px" }}
              />
              {/* Gold overlay bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#1a1f2e]/90 px-6 py-4">
                <div className="text-white font-black text-lg">Bryan Carr</div>
                <div className="text-[#c9a227] text-sm font-semibold">National Sales Director, Crane & Heavy Transport</div>
                <div className="text-gray-400 text-xs mt-0.5">Jeff Martin Auctioneers, Inc.</div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#c9a227]/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#c9a227]/20 rounded-xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <blockquote className="text-xl lg:text-2xl font-medium text-[#1a1f2e] leading-relaxed mb-8 border-l-4 border-[#c9a227] pl-6">
              "If you are considering selling any piece of equipment, we will stand beside you each step of the way, with honesty and integrity."
            </blockquote>

            <p className="text-gray-600 leading-relaxed mb-6">
              Bryan Carr has spent over three decades embedded in the heavy lift industry, from crane rental and sales to major construction disciplines across North America. As AuctionCrane's dedicated specialist, Bryan brings unmatched technical knowledge and a trusted network of crane owners, dealers, and buyers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're a construction company looking to liquidate a fleet, an equipment dealer with surplus inventory, or a buyer searching for a specific crane type, Bryan personally manages every relationship. You won't deal with a call centre; you'll work directly with one of North America's foremost crane specialists.
            </p>

            <div className="mb-8">
              <h4 className="text-[#1a1f2e] font-bold text-sm uppercase tracking-widest mb-4">Credentials & Expertise</h4>
              <ul className="space-y-2.5">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] flex-shrink-0 mt-2" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16015086207"
                className="flex items-center gap-3 px-5 py-4 bg-[#1a1f2e] rounded-lg hover:bg-[#262d42] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Call or WhatsApp</div>
                  <div className="text-white font-bold text-sm">601.508.6207</div>
                </div>
              </a>
              <a
                href="mailto:bryan.c@jeffmartinauctioneers.com"
                className="flex items-center gap-3 px-5 py-4 bg-[#c9a227] rounded-lg hover:bg-[#b8911f] transition-colors sm:flex-1"
              >
                <div className="w-10 h-10 rounded-full bg-[#1a1f2e]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[#1a1f2e]/70 text-xs font-medium">Email Bryan</div>
                  <div className="text-[#1a1f2e] font-bold text-sm whitespace-nowrap">bryan.c@jeffmartinauctioneers.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
