const reasons = [
  {
    title: "Nationwide Buyer Network",
    body: "Connect with crane buyers, contractors, and equipment companies across the USA.",
  },
  {
    title: "Dealer & Fleet Inventory",
    body: "Browse dealer inventory and fleet equipment through one scalable marketplace.",
  },
  {
    title: "Upcoming Auctions",
    body: "Access upcoming crane auctions and equipment opportunities in one place.",
  },
];

const icons = [
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 7h10M7 11h10M7 15h6M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 17h16M6 17V9h5v8m2 0V6h5v11" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17 20h5V4H2v16h5m10 0v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6m10 0H7" />
  </svg>,
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#fcfcfd] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase text-[#c9a227]">
            Why Choose Jeff Martin Auctioneers
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0f1725] sm:mt-4 sm:text-4xl">
            Trusted Crane Marketplace & Auction Specialists
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[15px] leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            We help buyers and sellers connect through direct inventory
            listings, upcoming auctions, dealer equipment, and commercial heavy
            equipment opportunities.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,37,0.06)] transition hover:-translate-y-1 hover:border-[#c9a227]/40 sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#101827] text-[#c9a227]">
                {icons[index]}
              </div>
              <h3 className="mt-5 text-lg font-black text-[#0f1725]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
