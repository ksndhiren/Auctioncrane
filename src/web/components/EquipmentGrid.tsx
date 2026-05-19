const equipment = [
  { name: "Crawler Cranes", img: "/crane-crawler.webp", width: 800, height: 550 },
  { name: "Tower Cranes", img: "/crane-tower.webp", width: 1000, height: 667 },
  { name: "Rough Terrain Cranes", img: "/crane-rt.webp", width: 1024, height: 768 },
  { name: "All Terrain Cranes", img: "/crane-at.webp", width: 1024, height: 768 },
  { name: "Boom Trucks", img: "/crane-boom.webp", width: 1000, height: 750 },
  { name: "Carry Deck Cranes", img: "/crane-carry.webp", width: 1280, height: 960 },
  { name: "Utility Equipment", img: "/crane-hydraulic.webp", width: 800, height: 506 },
  { name: "Heavy Equipment Inventory", img: "/crane-telecrawler.webp", width: 1100, height: 745 },
];

export default function EquipmentGrid() {
  return (
    <section id="equipment" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase text-[#c9a227]">
            Explore Categories
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0f1725] sm:mt-4 sm:text-4xl">
            Browse Crane & Equipment Categories
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[15px] leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Explore crane inventory, dealer equipment, and heavy machinery
            across multiple equipment categories.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4 xl:grid-cols-8">
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
                width={item.width}
                height={item.height}
                className="h-32 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 md:h-40 xl:h-36"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1725] via-[#0f1725]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <h3 className="text-[13px] font-black leading-tight text-white md:text-[0.95rem]">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
