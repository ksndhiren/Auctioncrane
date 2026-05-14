const testimonials = [
  {
    quote:
      "Jeff Martin Auctioneers helped us connect with quality crane buyers quickly and efficiently.",
    name: "Mike R.",
    title: "Contractor",
    location: "",
    initials: "MR",
  },
  {
    quote:
      "The marketplace made it easier to explore inventory and upcoming crane auctions.",
    name: "James D.",
    title: "Fleet Manager",
    location: "Georgia",
    initials: "JD",
  },
  {
    quote:
      "Great platform for both auctions and direct sales. We buy and sell equipment here regularly.",
    name: "Robert K.",
    title: "Equipment Buyer",
    location: "Florida",
    initials: "RK",
  },
];

const stats = [
  { value: "2009", label: "Founded" },
  { value: "500+", label: "Active Buyers" },
  { value: "Nationwide", label: "Marketplace Reach" },
];

export default function Testimonials() {
  return (
    <section className="bg-[#101827] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="text-sm font-bold uppercase text-[#c9a227]">
            Trusted By Buyers & Sellers
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Trusted By Crane Buyers & Equipment Sellers
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_280px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full min-h-[320px] flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="h-4 w-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-3xl font-black leading-none text-white/8">"</div>
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-8 text-slate-300">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[11px] font-black text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.title}</div>
                  {testimonial.location ? (
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/8 bg-[#111b2d] p-4"
              >
                <div className="text-[26px] font-black leading-none text-[#c9a227]">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
