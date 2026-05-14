const solutions = [
  {
    title: "Fleet Cranes For Sale",
    copy: "Support fleet rotations, right-sizing, and project closeout dispositions.",
  },
  {
    title: "Dealer Inventory Listings",
    copy: "Keep dealer equipment visible through a steady marketplace channel.",
  },
  {
    title: "Construction Equipment",
    copy: "Position cranes alongside complementary heavy equipment opportunities.",
  },
  {
    title: "Utility Equipment Sales",
    copy: "Market service trucks, boom equipment, and utility support assets.",
  },
  {
    title: "Heavy Equipment Marketplace",
    copy: "Reach contractors, fleets, and commercial buyers across the country.",
  },
];

const icons = [
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M3 13h15l3 4v2H2v-2l1-4zm3 0V7a2 2 0 012-2h5a2 2 0 012 2v6m-8 4h.01M17 17h.01" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M7 7h10M7 11h10M7 15h6M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M4 19l4-7 4 3 4-8 4 12H4z" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M4 17h16M6 17V9h5v8m2 0V6h5v11" />
  </svg>,
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M12 3l7 4v10l-7 4-7-4V7l7-4zm0 0v18" />
  </svg>,
];

export default function FleetSolutions() {
  return (
    <section id="fleet-solutions" className="bg-[#101827] py-14 text-white lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#c9a227]">
              Commercial & Fleet Solutions
            </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Equipment Marketplace Solutions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            Supporting dealers, contractors, and fleet operators with scalable
            equipment visibility.
          </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#c9a227]">
                  {icons[index]}
                </div>
                <h3 className="mt-4 text-lg font-black">{solution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {solution.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
