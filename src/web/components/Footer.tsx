export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <img
              src="/Cranesauctions.png"
              alt="Jeff Martin Auctioneers"
              width={1920}
              height={680}
              className="h-auto w-[150px] max-w-full"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              The trusted crane marketplace and auction specialists connecting
              buyers, sellers, dealers, and contractors across the USA.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-white">
              Marketplace
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Cranes For Sale", href: "/#equipment" },
                { label: "Equipment Marketplace", href: "/#fleet-solutions" },
                { label: "Inventory By Location", href: "/#equipment" },
                { label: "All Categories", href: "/#equipment" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-[#c9a227]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-white">
              Auctions
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Upcoming Auctions", href: "#auctions" },
                { label: "Auction Calendar", href: "https://www.jeffmartinauctioneers.com/auctions" },
                { label: "Auction Terms", href: "https://www.jeffmartinauctioneers.com/auctions" },
                { label: "Buyer Registration", href: "https://www.jeffmartinauctioneers.com/auctions" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-400 transition-colors hover:text-[#c9a227]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-white">
              Sellers
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Sell Your Crane", href: "/#connect" },
                { label: "Consignment Support", href: "/#connect" },
                { label: "Fleet Solutions", href: "/#fleet-solutions" },
                { label: "Equipment Marketing", href: "/#connect" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-[#c9a227]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-white">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Seller Guides", href: "/blog" },
                { label: "Auction Insights", href: "/blog" },
                { label: "Buyer Resources", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#c9a227]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="tel:+16015086207" className="font-medium transition-colors hover:text-[#c9a227]">
                  601.508.6207
                </a>
              </li>
              <li>
                <a href="mailto:bryan.c@jeffmartinauctioneers.com" className="text-sm transition-colors hover:text-[#c9a227] lg:whitespace-nowrap">
                  bryan.c@jeffmartinauctioneers.com
                </a>
              </li>
              <li>Brooklyn, Mississippi</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            &copy; {year} Jeff Martin Auctioneers. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">Powered by</span>
            <a
              href="https://www.jeffmartinauctioneers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src="/jma-logo-new.png"
                alt="Jeff Martin Auctioneers Inc"
                width={1216}
                height={730}
                className="h-10 w-auto brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
