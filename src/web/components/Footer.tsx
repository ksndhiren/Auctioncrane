export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1420] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="AuctionCrane" className="h-14 w-auto mb-4" loading="lazy" decoding="async" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              North America's specialist crane auction marketplace. Connecting crane owners and buyers through competitive, transparent auction events, powered by Jeff Martin Auctioneers Inc.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              MS · TX · FL · SC | Serving North America
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Why AuctionCrane", href: "#why-us" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Crane Types", href: "#equipment" },
                { label: "Meet Bryan Carr", href: "#bryan-carr" },
                { label: "Upcoming Auctions", href: "#auctions" },
                { label: "Contact Us", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+16015086207" className="hover:text-[#c9a227] transition-colors font-medium">
                  📞 601.508.6207
                </a>
                <div className="text-xs text-gray-500">Phone & WhatsApp</div>
              </li>
              <li>
                <a href="mailto:bryan.c@jeffmartinauctioneers.com" className="hover:text-[#c9a227] transition-colors break-all text-xs">
                  ✉ bryan.c@jeffmartinauctioneers.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.jeffmartinauctioneers.com/auctions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#c9a227]/30 rounded text-[#c9a227] text-xs font-semibold hover:bg-[#c9a227]/10 transition-colors"
                >
                  View All Auctions →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {year} AuctionCrane. All rights reserved. · <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </p>

          {/* Powered by JMA */}
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-xs">Powered by</span>
            <a
              href="https://www.jeffmartinauctioneers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src="/jma-logo-new.png"
                alt="Jeff Martin Auctioneers Inc"
                className="h-10 w-auto brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
              <span className="text-gray-400 text-xs font-semibold hidden sm:block">JeffMartinAuctioneers Inc</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
