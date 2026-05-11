import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Why AuctionCrane", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Equipment", href: "#equipment" },
    { label: "Our Expert", href: "#bryan-carr" },
    { label: "Auctions", href: "#auctions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1f2e] shadow-lg" : "bg-[#1a1f2e]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src="/logo.svg" alt="AuctionCrane" className="h-14 lg:h-16 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#c9a227] text-sm font-medium transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#lead-forms"
              className="px-4 py-2 text-sm font-semibold text-[#c9a227] border border-[#c9a227] rounded hover:bg-[#c9a227] hover:text-[#1a1f2e] transition-all duration-200 tracking-wide uppercase"
            >
              Sell a Crane
            </a>
            <a
              href="#lead-forms"
              onClick={() => {
                setTimeout(() => {
                  const buyerTab = document.querySelector('[data-tab="buyer"]') as HTMLElement;
                  buyerTab?.click();
                }, 100);
              }}
              className="px-4 py-2 text-sm font-semibold bg-[#c9a227] text-[#1a1f2e] rounded hover:bg-[#b8911f] transition-all duration-200 tracking-wide uppercase"
            >
              Buy Equipment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-gray-300 hover:text-[#c9a227] text-sm font-medium uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <a href="#lead-forms" className="w-full text-center py-2.5 text-sm font-semibold text-[#c9a227] border border-[#c9a227] rounded uppercase">
                Sell a Crane
              </a>
              <a href="#lead-forms" className="w-full text-center py-2.5 text-sm font-semibold bg-[#c9a227] text-[#1a1f2e] rounded uppercase">
                Buy Equipment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
