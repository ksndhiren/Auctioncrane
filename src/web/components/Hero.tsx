export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e]/90 via-[#1a1f2e]/75 to-[#1a1f2e]/50" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1f2e] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[#c9a227]/40 rounded-full bg-[#c9a227]/10">
            <span className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
            <span className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase">North America's Crane Auction Specialist</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Auction Your Crane.{" "}
            <span className="text-[#c9a227]">Maximise</span>{" "}
            Your Return.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            AuctionCrane connects crane owners and buyers across North America through specialist competitive auctions — maximising asset value and sourcing quality equipment for serious buyers.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lead-forms"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a227] text-[#1a1f2e] font-bold text-base rounded hover:bg-[#b8911f] transition-all duration-200 uppercase tracking-wide shadow-lg shadow-[#c9a227]/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Submit a Crane for Auction
            </a>
            <a
              href="#lead-forms"
              id="buyer-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-base rounded hover:border-[#c9a227] hover:text-[#c9a227] transition-all duration-200 uppercase tracking-wide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Register as a Buyer
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
            {[
              { value: "30+", label: "Years Industry Experience" },
              { value: "500+", label: "Cranes Sold Annually" },
              { value: "4", label: "US Auction Locations" },
              { value: "Global", label: "Buyer Network" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-black text-[#c9a227]">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
