const events = [
  {
    date: "May 13, 2026",
    time: "10:00 AM CT",
    title: "Virtual Crane & Heavy Transport Auction",
    type: "Virtual",
    location: "Various Locations",
    description: "Currently listed by Jeff Martin Auctioneers with bidding open for crane and heavy transport inventory across multiple locations.",
    featured: true,
  },
  {
    date: "May 15, 2026",
    time: "9:00 AM CT",
    title: "Late Spring Construction & Transportation Public Auction",
    type: "Live",
    location: "Brooklyn, Mississippi",
    description: "A current JMA public auction with construction and transportation inventory that is relevant for crane owners, fleet managers, and heavy equipment buyers.",
    featured: false,
  },
  {
    date: "May 28, 2026",
    time: "10:00 AM CT",
    title: "Americrane Strategic Fleet Update",
    type: "Virtual",
    location: "Various Locations",
    description: "A crane-specific fleet update event currently on the live JMA calendar, with inventory still being added daily.",
    featured: false,
  },
];

export default function UpcomingAuctions() {
  return (
    <section id="auctions" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">Auction Calendar</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f2e] leading-tight">
              Upcoming Crane Auctions
            </h2>
          </div>
          <a
            href="https://www.jeffmartinauctioneers.com/auctions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#1a1f2e] text-[#1a1f2e] font-bold text-sm rounded hover:bg-[#1a1f2e] hover:text-white transition-colors uppercase tracking-wide whitespace-nowrap"
          >
            View All Auctions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden ${ev.featured ? "bg-[#1a1f2e] ring-2 ring-[#c9a227]" : "bg-white border border-gray-200"}`}
            >
              {ev.featured && (
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#c9a227] text-[#1a1f2e] text-xs font-black uppercase tracking-wider rounded">
                  Next Event
                </div>
              )}
              <div className="p-6 lg:p-7">
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${ev.featured ? "text-[#c9a227]" : "text-[#c9a227]"}`}>
                  {ev.type}
                </div>
                <div className={`text-lg font-black leading-snug mb-1 ${ev.featured ? "text-white" : "text-[#1a1f2e]"}`}>
                  {ev.title}
                </div>
                <div className={`flex items-center gap-2 text-sm mb-3 ${ev.featured ? "text-gray-400" : "text-gray-500"}`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">{ev.date}</span>
                  <span>·</span>
                  <span>{ev.time}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs mb-4 ${ev.featured ? "text-gray-400" : "text-gray-500"}`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {ev.location}
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${ev.featured ? "text-gray-400" : "text-gray-500"}`}>
                  {ev.description}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.jeffmartinauctioneers.com/auctions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-center py-2.5 text-xs font-bold uppercase tracking-wide rounded transition-colors ${ev.featured ? "bg-[#c9a227] text-[#1a1f2e] hover:bg-[#b8911f]" : "bg-[#1a1f2e] text-white hover:bg-[#262d42]"}`}
                  >
                    View & Register to Bid
                  </a>
                  <a
                    href="#lead-forms"
                    className={`text-center py-2.5 text-xs font-bold uppercase tracking-wide rounded border transition-colors ${ev.featured ? "border-white/20 text-gray-300 hover:border-[#c9a227] hover:text-[#c9a227]" : "border-gray-300 text-gray-500 hover:border-[#c9a227] hover:text-[#c9a227]"}`}
                  >
                    Register Interest
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 bg-[#1a1f2e]/5 border border-[#1a1f2e]/10 rounded-lg text-center">
          <p className="text-gray-600 text-sm">
            <strong className="text-[#1a1f2e]">Want to consign in an upcoming auction?</strong>{" "}
            Submit your crane details now and Bryan will recommend the best event for your equipment.{" "}
            <a href="#lead-forms" className="text-[#c9a227] font-bold hover:underline">Submit a crane →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
