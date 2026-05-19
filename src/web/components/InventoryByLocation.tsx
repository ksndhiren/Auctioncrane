const locations = [
  {
    name: "Texas",
    image: "/crane-at.webp",
    width: 1024,
    height: 768,
    blurb: "Gulf Coast and industrial corridor inventory.",
  },
  {
    name: "Florida",
    image: "/crane-boom.webp",
    width: 1000,
    height: 750,
    blurb: "Dealer inventory and transportation assets.",
  },
  {
    name: "Georgia",
    image: "/crane-rt.webp",
    width: 1024,
    height: 768,
    blurb: "Regional crane and heavy equipment listings.",
  },
  {
    name: "Gulf South",
    image: "/crane-carry.webp",
    width: 1280,
    height: 960,
    blurb: "Heavy transport and project support equipment.",
  },
];

export default function InventoryByLocation() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase text-[#c9a227]">
            Browse Inventory
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0f1725] sm:mt-4 sm:text-4xl">
            Crane Inventory By Location
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Explore crane and heavy equipment inventory across major equipment
            markets.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="group relative overflow-hidden rounded-lg bg-[#111827] shadow-[0_14px_34px_rgba(15,23,37,0.14)]"
            >
              <img
                src={location.image}
                alt={location.name}
                loading="lazy"
                decoding="async"
                width={location.width}
                height={location.height}
                className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-36"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1725] via-[#0f1725]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <div className="text-base font-black text-white sm:text-lg">{location.name}</div>
                <p className="mt-1 text-[13px] text-slate-200 sm:text-sm">{location.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
