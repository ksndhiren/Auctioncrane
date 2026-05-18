const teamMembers = [
  {
    name: "Bryan Carr",
    role: "National Sales Director - Crane & Heavy Transport",
    image: "/bryan-carr-team.webp",
    width: 1000,
    height: 1000,
    bio: "Bryan Carr has been active in the heavy lift industry since 1992, helping sellers position underutilized equipment and guiding buyers toward trusted inventory opportunities.",
    phone: "+16015086207",
    email: "bryan.c@jeffmartinauctioneers.com",
  },
  {
    name: "Keith Willett",
    role: "Industry Sales & Management Specialist",
    image: "/keith-willett.webp",
    width: 1000,
    height: 1000,
    bio: "Keith Willett brings decades of experience across construction equipment, trucking, sales leadership, and commercial account support.",
    phone: "+16014506200",
    email: "keith.w@jeffmartinauctioneers.com",
  },
  {
    name: "Chip Jordan",
    role: "Heavy Lift & Rigging Operations Specialist",
    image: "/chip-jordan.webp",
    width: 1000,
    height: 1000,
    bio: "Chip Jordan adds deep crane, rigging, and field operations expertise for heavy lift projects, fleet opportunities, and technical equipment needs.",
    phone: "+16625495614",
    email: "chip.j@jeffmartinauctioneers.com",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-white pt-12 lg:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-12">
          <div>
            <span className="text-sm font-bold uppercase text-[#c9a227]">
              Meet Our Team
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0f1725] sm:text-4xl">
              Marketplace & Auction Specialists
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Our experienced team is here to help you buy equipment, sell
              inventory, and succeed in today&apos;s equipment market.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_14px_34px_rgba(15,23,37,0.08)]"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      width={member.width}
                      height={member.height}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div>
                      <div className="text-lg font-black text-[#0f1725]">
                        {member.name}
                      </div>
                      <div className="mt-1 min-h-9 text-sm font-semibold leading-5 text-[#9f7c18]">
                        {member.role}
                      </div>
                    </div>
                    <div className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                      <p>{member.bio}</p>
                    </div>
                    <div className="mt-3 space-y-2 border-t border-slate-100 pt-3">
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-3 rounded bg-[#101827] px-3 py-2.5 transition hover:bg-[#172131]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a227] text-[#101827]">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                            <div className="text-xs uppercase text-slate-400">
                            Call
                          </div>
                          <div className="text-sm font-bold text-white">
                            {member.phone
                              .replace("+1", "")
                              .replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3")}
                          </div>
                        </div>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 rounded bg-[#f7f4e7] px-3 py-2.5 transition hover:bg-[#f0e6bd]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#101827] text-[#c9a227]">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs uppercase text-slate-500">
                            Email
                          </div>
                          <div className="truncate text-sm font-bold text-[#101827]">
                            {member.email}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
