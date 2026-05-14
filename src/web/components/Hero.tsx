export default function Hero() {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden bg-[#101827] pt-20 lg:min-h-[760px]">
      <img
        src="/hero.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,27,.92)_0%,rgba(10,15,27,.82)_38%,rgba(10,15,27,.45)_70%,rgba(10,15,27,.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101827] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-[820px]">
          <p className="text-sm font-bold uppercase text-[#c9a227]">
            The Crane Marketplace & Auction Specialists
          </p>

          <h1 className="mt-4 max-w-[840px] text-[42px] font-black leading-[1.02] text-white sm:text-5xl lg:text-[64px]">
            Buy & Sell Cranes Through a Trusted Heavy Equipment{" "}
            <span className="text-[#c9a227]">Marketplace</span>
          </h1>

          <div className="mt-5 max-w-[720px] space-y-3 text-base leading-7 text-slate-200">
            <p>
              Jeff Martin Auctioneers connects buyers, dealers, contractors, fleet owners,
              and equipment sellers through a nationwide crane marketplace
              featuring direct inventory, dealer equipment, and upcoming crane
              auctions.
            </p>
            <p>
              Browse crawler cranes, tower cranes, boom trucks, rough terrain
              cranes, all terrain cranes, and heavy equipment inventory across
              the USA.
            </p>
            <p>
              Whether you are searching for commercial crane inventory, upcoming
              auctions, or looking to sell heavy equipment, our marketplace is
              built to connect serious buyers and sellers in one place.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#equipment"
              className="inline-flex min-h-12 items-center justify-center rounded bg-[#c9a227] px-6 text-sm font-black uppercase text-[#101827] shadow-[0_16px_40px_rgba(201,162,39,0.24)] transition hover:bg-[#b8911f]"
            >
              Browse Cranes For Sale
            </a>
            <a
              href="#connect"
              className="inline-flex min-h-12 items-center justify-center rounded border border-white/35 px-6 text-sm font-black uppercase text-white transition hover:border-[#c9a227] hover:text-[#c9a227]"
            >
              Sell Your Crane
            </a>
          </div>

          <div className="mt-10 grid max-w-4xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "30+", label: "Years Industry Experience" },
              { value: "500+", label: "Buyer Network" },
              { value: "4", label: "Auction Specialists" },
              { value: "Global", label: "Equipment Reach" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a227]/35 bg-[#c9a227]/10 text-[#c9a227]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4l2.2 4.46 4.92.72-3.56 3.47.84 4.91L12 15.96 7.6 17.56l.84-4.91-3.56-3.47 4.92-.72L12 4z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#c9a227]">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-slate-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
