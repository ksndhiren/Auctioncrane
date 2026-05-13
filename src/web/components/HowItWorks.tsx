const sellerSteps = [
  {
    num: "01",
    title: "Submit Your Equipment",
    body: "List your cranes, boom trucks, and heavy equipment with full details and photos.",
  },
  {
    num: "02",
    title: "Reach Serious Buyers",
    body: "Get connected with contractors, dealers, fleet owners, and equipment buyers.",
  },
  {
    num: "03",
    title: "Maximise Visibility",
    body: "Your equipment gets exposure across our marketplace and auction channels.",
  },
];

const buyerSteps = [
  {
    num: "01",
    title: "Browse Inventory",
    body: "Explore cranes, equipment categories, dealer inventory, and upcoming auctions.",
  },
  {
    num: "02",
    title: "Compare Equipment",
    body: "Compare equipment, pricing, condition, and sellers with ease.",
  },
  {
    num: "03",
    title: "Connect & Buy",
    body: "Connect with sellers, bid in auctions, or buy direct through the marketplace.",
  },
];

type Step = (typeof sellerSteps)[0];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex gap-5 border-b border-white/10 py-5 last:border-b-0">
      <div
        className="w-10 flex-shrink-0 text-3xl font-black leading-none text-[#c9a227]"
        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
      >
        {step.num}
      </div>
      <div>
        <h4
          className="font-bold text-white"
          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
        >
          {step.title}
        </h4>
        <p
          className="mt-1 text-sm leading-relaxed text-gray-400"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#101827] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span
            className="text-sm font-bold uppercase text-[#c9a227]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            How It Works
          </span>
          <h2
            className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
          >
            How The Crane Marketplace Works
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            A simple and transparent process for both buyers and sellers.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-7 shadow-[0_22px_60px_rgba(0,0,0,0.18)] lg:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#c9a227]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3
                className="text-xl font-black uppercase tracking-wide text-white"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                For Sellers
              </h3>
            </div>
            <div>
              {sellerSteps.map((step) => (
                <StepCard key={step.num} step={step} />
              ))}
            </div>
            <a
              href="#connect"
              className="mt-8 inline-flex items-center gap-2 rounded bg-[#c9a227] px-6 py-3 text-sm font-black uppercase text-[#101827] transition-colors hover:bg-[#b8911f]"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              Sell Your Equipment
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-7 shadow-[0_22px_60px_rgba(0,0,0,0.18)] lg:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#c9a227]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3
                className="text-xl font-black uppercase tracking-wide text-white"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                For Buyers
              </h3>
            </div>
            <div>
              {buyerSteps.map((step) => (
                <StepCard key={step.num} step={step} />
              ))}
            </div>
            <a
              href="#connect"
              className="mt-8 inline-flex items-center gap-2 rounded bg-[#c9a227] px-6 py-3 text-sm font-black uppercase text-[#101827] transition-colors hover:bg-[#b8911f]"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              Browse Inventory
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
