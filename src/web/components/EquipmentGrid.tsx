const equipment = [
  {
    name: "All-Terrain Cranes",
    desc: "Versatile multi-axle cranes for on and off-road use. Brands include Grove, Liebherr, Tadano, Manitowoc.",
    img: "/crane-at.jpg",
  },
  {
    name: "Crawler Cranes",
    desc: "Heavy-lift lattice boom crawlers for large construction and industrial projects.",
    img: "/crane-crawler.jpg",
  },
  {
    name: "Hydraulic Truck Cranes",
    desc: "Mobile hydraulic cranes mounted on truck carriers, ideal for fast deployment.",
    img: "/crane-hydraulic.jpg",
  },
  {
    name: "Rough Terrain Cranes",
    desc: "Designed for off-road and construction site conditions with single-engine operation.",
    img: "/crane-rt.jpg",
  },
  {
    name: "Carry Deck Cranes",
    desc: "Compact 360° rotating cranes ideal for tight industrial spaces and indoor use.",
    img: "/crane-carry.jpg",
  },
  {
    name: "Boom Trucks",
    desc: "Truck-mounted hydraulic boom cranes, versatile workhorses for utilities and construction.",
    img: "/crane-boom.jpg",
  },
  {
    name: "Telescopic Crawlers",
    desc: "Tele-crawlers combining crawler stability with telescopic boom reach for complex lifts.",
    img: "/crane-telecrawler.jpg",
  },
  {
    name: "Tower Cranes",
    desc: "Fixed and luffing tower cranes for high-rise construction and major building projects.",
    img: "/crane-tower.jpg",
  },
];

export default function EquipmentGrid() {
  return (
    <section id="equipment" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">What We Auction</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f2e] leading-tight">
            Crane Types We Specialise In
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            From single carry decks to entire fleet liquidations, if it lifts, we auction it. Our specialist knowledge spans every category of crane equipment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {equipment.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-default"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 bg-slate-800"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e]/95 via-[#1a1f2e]/30 to-transparent" />
              {/* Gold top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-black text-sm lg:text-base leading-tight mb-1.5">{item.name}</h3>
                <p className="text-gray-300 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Have something not listed?{" "}
            <a href="#lead-forms" className="text-[#c9a227] font-semibold hover:underline">
              Contact us. We handle all heavy lifting equipment.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
