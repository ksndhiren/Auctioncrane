const locations = [
  {
    name: "Texas",
    image: "/crane-at.jpg",
    blurb: "Gulf Coast and industrial corridor inventory.",
  },
  {
    name: "Florida",
    image: "/crane-boom.jpg",
    blurb: "Dealer inventory and transportation assets.",
  },
  {
    name: "Georgia",
    image: "/crane-rt.jpg",
    blurb: "Regional crane and heavy equipment listings.",
  },
  {
    name: "Gulf South",
    image: "/crane-carry.jpg",
    blurb: "Heavy transport and project support equipment.",
  },
];

export default function InventoryByLocation() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase text-[#c9a227]">
            Browse Inventory
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f1725] sm:text-4xl">
            Crane Inventory By Location
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore crane and heavy equipment inventory across major equipment
            markets.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1725] via-[#0f1725]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-lg font-black text-white">{location.name}</div>
                <p className="mt-1 text-sm text-slate-200">{location.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#equipment"
            className="text-sm font-bold uppercase text-[#101827] transition hover:text-[#c9a227]"
          >
            View All Locations
          </a>
        </div>
      </div>
    </section>
  );
}
