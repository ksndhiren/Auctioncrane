const events = [
  {
    date: "May 13, 2026",
    time: "10:00 AM CT",
    title: "Virtual Crane & Heavy Transport Auction",
    type: "Virtual",
    location: "Various Locations",
    description:
      "Current live JMA crane event featuring transport and support equipment inventory from across the United States.",
    featured: true,
    image: "/crane-crawler.jpg",
  },
  {
    date: "May 15, 2026",
    time: "9:00 AM CT",
    title: "Late Spring Construction & Transportation Public Auction",
    type: "Live",
    location: "Brooklyn, Mississippi",
    description:
      "Bidding is open on this Mississippi public auction with commercial equipment, transportation assets, and heavy inventory.",
    featured: false,
    image: "/crane-boom.jpg",
  },
  {
    date: "May 16, 2026",
    time: "9:00 AM ET",
    title: "Inaugural Central Kentucky Consignment Auction",
    type: "Online & Live",
    location: "Upton, Kentucky",
    description:
      "A fresh regional consignment event on the JMA calendar with inventory still being added daily.",
    featured: false,
    image: "/crane-at.jpg",
  },
];

export default function UpcomingAuctions() {
  return (
    <section id="auctions" className="bg-[#f8fafc] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-bold uppercase text-[#c9a227]">
              Upcoming Crane Auctions
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f1725] sm:text-4xl">
              Upcoming Crane Auctions
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Browse featured crane auctions and equipment opportunities from
              across the marketplace.
            </p>
          </div>
          <a
            href="https://www.jeffmartinauctioneers.com/auctions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-[#0f1725] px-5 py-3 text-sm font-black uppercase text-[#0f1725] transition hover:bg-[#0f1725] hover:text-white whitespace-nowrap"
          >
            View All Auctions
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className={`flex h-full flex-col overflow-hidden rounded-lg border shadow-[0_14px_34px_rgba(15,23,37,0.08)] ${
                event.featured
                  ? "border-[#c9a227]/60 bg-[#101827]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-[#101827]/55 to-transparent" />
                {event.featured ? (
                  <div className="absolute left-4 top-4 rounded-full bg-[#4ade80] px-3 py-1 text-[11px] font-black uppercase text-[#0f1725]">
                    Next Event
                  </div>
                ) : null}
                <div className="absolute bottom-4 left-4">
                  <div className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase text-[#101827]">
                    {event.type}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 text-xs font-bold uppercase text-[#c9a227]">
                  {event.type}
                </div>
                <div
                  className={`min-h-[72px] text-xl font-black leading-snug ${
                    event.featured ? "text-white" : "text-[#0f1725]"
                  }`}
                >
                  {event.title}
                </div>
                <div
                  className={`mt-3 flex items-center gap-2 text-sm ${
                    event.featured ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">{event.date}</span>
                  <span>|</span>
                  <span>{event.time}</span>
                </div>
                <div
                  className={`mt-2 flex items-center gap-1.5 text-xs ${
                    event.featured ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {event.location}
                </div>
                <p
                  className={`mt-3 min-h-[84px] text-sm leading-6 ${
                    event.featured ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {event.description}
                </p>
                <div className="mt-5">
                  <a
                    href="https://www.jeffmartinauctioneers.com/auctions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded py-3 text-center text-xs font-black uppercase transition-colors ${
                      event.featured
                        ? "bg-[#c9a227] text-[#101827] hover:bg-[#b8911f]"
                        : "bg-[#101827] text-white hover:bg-[#172131]"
                    }`}
                  >
                    View Auction Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
