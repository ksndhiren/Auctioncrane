const equipment = [
  { name: "Crawler Cranes", img: "/crane-crawler.jpg" },
  { name: "Tower Cranes", img: "/crane-tower.jpg" },
  { name: "Rough Terrain Cranes", img: "/crane-rt.jpg" },
  { name: "All Terrain Cranes", img: "/crane-at.jpg" },
  { name: "Boom Trucks", img: "/crane-boom.jpg" },
  { name: "Carry Deck Cranes", img: "/crane-carry.jpg" },
  { name: "Utility Equipment", img: "/crane-hydraulic.jpg" },
  { name: "Heavy Equipment Inventory", img: "/crane-telecrawler.jpg" },
];

export default function EquipmentGrid() {
  return (
    <section id="equipment" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase text-[#c9a227]">
            Explore Categories
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f1725] sm:text-4xl">
            Browse Crane & Equipment Categories
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Explore crane marketplace categories designed to help buyers
            discover commercial crane inventory, heavy equipment listings, and
            upcoming equipment opportunities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-lg bg-[#111827] shadow-[0_14px_32px_rgba(15,23,37,0.12)]"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-36 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 md:h-40 xl:h-36"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1725] via-[#0f1725]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-black leading-tight text-white md:text-[0.95rem]">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#fleet-solutions"
            className="text-sm font-bold uppercase text-[#101827] transition hover:text-[#c9a227]"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
}
