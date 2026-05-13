import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Cranes For Sale", href: "#equipment" },
    { label: "Marketplace", href: "#fleet-solutions" },
    { label: "Crane Auctions", href: "#auctions" },
    { label: "Sell", href: "#connect" },
    { label: "Resources", href: "#faq" },
    { label: "About", href: "#team" },
    { label: "Contact", href: "#connect" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#101827] shadow-lg" : "bg-[#101827]/92 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <a href="#" className="flex min-w-0 flex-shrink-0 items-center gap-2.5 lg:gap-3">
            <img src="/logo.png" alt="AuctionCrane" className="h-10 w-auto lg:h-12" />
            <span className="flex min-w-0 items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 lg:gap-2 lg:text-[10px]">
              <span className="whitespace-nowrap">Powered by</span>
              <img
                src="/jma-logo-new.png"
                alt="Jeff Martin Auctioneers Inc"
                className="h-4 w-auto brightness-0 invert lg:h-5"
                loading="lazy"
                decoding="async"
              />
            </span>
          </a>

          <nav className="hidden items-center gap-4 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase text-gray-300 transition-colors duration-200 hover:text-[#c9a227]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#connect"
              className="rounded border border-white/20 px-3 py-2 text-xs font-bold uppercase text-white transition-all duration-200 hover:border-[#c9a227] hover:text-[#c9a227]"
            >
              Login
            </a>
            <a
              href="#connect"
              className="rounded bg-[#c9a227] px-3 py-2 text-xs font-bold uppercase text-[#101827] transition-all duration-200 hover:bg-[#b8911f]"
            >
              Sell Equipment
            </a>
          </div>

          <button
            className="p-2 text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`mb-1.5 h-0.5 w-6 bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <div className={`mb-1.5 h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 py-4 pb-6 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium uppercase tracking-wide text-gray-300 hover:text-[#c9a227]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="#connect"
                className="w-full rounded text-center py-2.5 text-sm font-semibold uppercase text-[#c9a227] border border-[#c9a227]"
              >
                Login
              </a>
              <a
                href="#connect"
                className="w-full rounded bg-[#c9a227] py-2.5 text-center text-sm font-semibold uppercase text-[#101827]"
              >
                Sell Equipment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
