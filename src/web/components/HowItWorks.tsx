const sellerSteps = [
  {
    num: "01",
    title: "Submit Your Crane",
    body: "Fill in our seller form with your crane details — make, model, year, condition, and quantity. Our team reviews it within 24 hours.",
    accent: "#c9a227",        // gold
    hoverBg: "hover:bg-[#c9a227]/10",
    hoverBorder: "hover:border-[#c9a227]",
    numColor: "text-[#c9a227]/40",
    hoverNum: "group-hover:text-[#c9a227]/70",
  },
  {
    num: "02",
    title: "Get Your Valuation",
    body: "Bryan Carr and our specialist team assess your equipment and recommend the best upcoming auction event to maximise your return.",
    accent: "#e07b39",        // orange
    hoverBg: "hover:bg-[#e07b39]/10",
    hoverBorder: "hover:border-[#e07b39]",
    numColor: "text-[#e07b39]/40",
    hoverNum: "group-hover:text-[#e07b39]/70",
  },
  {
    num: "03",
    title: "We Handle Everything",
    body: "From inspection and photography to marketing and bidder outreach — we manage the entire process. You simply collect your proceeds after the sale.",
    accent: "#4caf82",        // green
    hoverBg: "hover:bg-[#4caf82]/10",
    hoverBorder: "hover:border-[#4caf82]",
    numColor: "text-[#4caf82]/40",
    hoverNum: "group-hover:text-[#4caf82]/70",
  },
];

const buyerSteps = [
  {
    num: "01",
    title: "Register Your Interest",
    body: "Tell us what types of cranes you're looking for, your capacity requirements, and budget. We'll match you to the right upcoming auction events.",
    accent: "#5b9bd5",        // blue
    hoverBg: "hover:bg-[#5b9bd5]/10",
    hoverBorder: "hover:border-[#5b9bd5]",
    numColor: "text-[#5b9bd5]/40",
    hoverNum: "group-hover:text-[#5b9bd5]/70",
  },
  {
    num: "02",
    title: "Review & Inspect Equipment",
    body: "Browse our inventory online or attend in-person inspection days. All equipment is clearly described and photographed.",
    accent: "#a78bfa",        // violet
    hoverBg: "hover:bg-[#a78bfa]/10",
    hoverBorder: "hover:border-[#a78bfa]",
    numColor: "text-[#a78bfa]/40",
    hoverNum: "group-hover:text-[#a78bfa]/70",
  },
  {
    num: "03",
    title: "Bid & Win",
    body: "Bid live at one of our four US locations or compete online from anywhere. Our platform makes it easy to secure quality crane equipment competitively.",
    accent: "#f472b6",        // pink/rose
    hoverBg: "hover:bg-[#f472b6]/10",
    hoverBorder: "hover:border-[#f472b6]",
    numColor: "text-[#f472b6]/40",
    hoverNum: "group-hover:text-[#f472b6]/70",
  },
];

type Step = typeof sellerSteps[0];

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className={`group relative flex gap-5 p-5 rounded-xl border border-white/10 transition-all duration-300 cursor-default ${step.hoverBg} ${step.hoverBorder}`}
    >
      {/* Coloured left bar */}
      <div
        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: step.accent }}
      />
      <div className={`text-3xl font-black leading-none w-10 flex-shrink-0 mt-0.5 transition-colors duration-300 ${step.numColor} ${step.hoverNum}`}
        style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
        {step.num}
      </div>
      <div>
        <h4
          className="text-white font-bold mb-1.5 transition-colors duration-300"
          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
        >
          {step.title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Manrope', sans-serif" }}>
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#1a1f2e] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Manrope', sans-serif" }}>Simple Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
            How It Works
          </h2>
          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Whether you're selling one crane or an entire fleet, or looking to buy at the best price — here's how to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Seller */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-wide" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>For Sellers</h3>
            </div>
            <div className="space-y-3">
              {sellerSteps.map((step) => (
                <StepCard key={step.num} step={step} />
              ))}
            </div>
            <a
              href="#lead-forms"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1a1f2e] font-bold text-sm rounded hover:bg-[#b8911f] transition-colors uppercase tracking-wide"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              Submit Your Crane →
            </a>
          </div>

          {/* Buyer */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-wide" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>For Buyers</h3>
            </div>
            <div className="space-y-3">
              {buyerSteps.map((step) => (
                <StepCard key={step.num} step={step} />
              ))}
            </div>
            <a
              href="#lead-forms"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-[#c9a227] text-[#c9a227] font-bold text-sm rounded hover:bg-[#c9a227] hover:text-[#1a1f2e] transition-colors uppercase tracking-wide"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              Register as Buyer →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
