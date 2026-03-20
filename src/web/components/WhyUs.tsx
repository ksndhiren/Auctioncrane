const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "North America-Wide Reach",
    body: "Permanent auction facilities in Mississippi, Texas, Florida, and South Carolina — with live and virtual bidding drawing buyers from across the continent and beyond.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Specialist Expertise",
    body: "Our crane division is led by Bryan Carr — 30+ years in the heavy lift industry. We understand crane values, specifications, and what buyers are looking for. This isn't general equipment — this is specialist knowledge.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Maximum Asset Value",
    body: "Competitive bidding drives prices up. Our global buyer network, targeted marketing, and professional presentation ensure your crane achieves its true market value — often exceeding private sale expectations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Transparent Process",
    body: "From consignment to settlement, you're kept informed at every stage. No hidden fees, no surprises. Our sellers and buyers receive honest guidance backed by decades of auction integrity.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Global Buyer Network",
    body: "Thousands of registered bidders across construction, energy, marine, and industrial sectors attend each crane auction — live and online. Your equipment is seen by the right people.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fast Capital Recovery",
    body: "Auctions compress timelines dramatically versus private sales. Turn idle or underutilised cranes into capital quickly — critical for fleet managers, project wind-downs, and estate liquidations.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">Why Choose AuctionCrane</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f2e] leading-tight">
            The Trusted Specialist for<br className="hidden sm:block" /> Crane Auctions
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            We're not a general equipment auction house. We're a dedicated crane marketplace — built on deep industry knowledge and a track record of results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group relative p-8 border border-gray-100 rounded-lg hover:border-[#c9a227]/40 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 rounded-lg bg-[#1a1f2e] text-[#c9a227] flex items-center justify-center mb-5 group-hover:bg-[#c9a227] group-hover:text-[#1a1f2e] transition-colors duration-300">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a1f2e] mb-3">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
