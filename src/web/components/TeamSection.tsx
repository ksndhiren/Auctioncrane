const teamMembers = [
  {
    name: "Bryan Carr",
    role: "National Sales Director - Crane & Heavy Transport",
    company: "Jeff Martin Auctioneers, Inc.",
    image: "/bryan-carr.webp",
    bio: `Bryan Carr has been actively involved in the heavy lift industry since 1992, working alongside some of the most respected companies in the crane, rigging, and heavy transport sectors. Throughout his career, Bryan identified a significant market opportunity to better position and market underutilized equipment within the industry.

As part of Jeff Martin Auctioneers, Inc., Bryan contributes to a team of dedicated professionals committed to delivering exceptional auction services. He specializes in evaluating equipment on-site and helping clients maximize value through strategic marketing and industry expertise. Known for his honesty, integrity, and professionalism, Bryan focuses on building lasting partnerships while consistently providing value-driven solutions for customers.`,
    phone: "+16015086207",
    email: "bryan.c@jeffmartinauctioneers.com"
  },
  {
    name: "Keith Willett",
    role: "Industry Sales & Management Specialist",
    company: "Jeff Martin Auctioneers, Inc.",
    image: "/keith-willett.webp",
    bio: `Keith Willett began his journey in the construction industry through summer jobs during his college years, developing a foundation that grew into a lifelong career spanning construction, construction equipment, and commercial trucking. Over the years, he has held a wide range of roles including inside sales, sales support, territory sales, general and regional management, and small business ownership.

Keith believes that success in any role ultimately comes down to sales - building trust, solving problems, and creating meaningful connections. His professional philosophy centers on cultivating long-term relationships with customers, vendors, and teammates alike. By helping others grow and succeed, Keith has built a reputation for leadership, collaboration, and results-driven service.`,
    phone: "+16014506200",
    email: "keith.w@jeffmartinauctioneers.com"
  },
  {
    name: "Chip Jordan",
    role: "Heavy Lift & Rigging Operations Specialist",
    company: "Jeff Martin Auctioneers, Inc.",
    image: "/chip-jordan.webp",
    bio: `Chip Jordan brings nearly three decades of experience in the crane and rigging industry, including 18 years of hands-on field experience supporting heavy lift crane operations up to 825 tons. His expertise spans complex projects across stadium construction, marine operations, heavy transport, and specialized rigging solutions.

As Assembly and Disassembly Director for crawler cranes ranging from 400 to 1,500 tons, he combines technical leadership with a team-first mindset and unwavering ethical standards. A veteran of the 223rd Combat Heavy Engineers, Chip brings disciplined problem-solving and unwavering commitment to every client relationship, ensuring projects are executed safely and efficiently.`,
    phone: "+16625495614",
    email: "chip.j@jeffmartinauctioneers.com"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">THE TEAM BEHIND THE CRANES</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f2e] leading-tight">
            Meet Our Team
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Our dedicated team of crane industry professionals brings decades of combined experience, technical expertise, and unwavering integrity to every auction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1f2e] via-[#1a1f2e]/90 to-transparent pt-16 pb-6 px-6">
                  <div className="text-white font-black text-xl">{member.name}</div>
                  <div className="text-[#c9a227] text-sm font-semibold">{member.role}</div>
                  <div className="text-gray-400 text-xs mt-1">{member.company}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-6">
                  {member.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {member.phone || member.email ? (
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-3 px-4 py-3 bg-[#1a1f2e] rounded-lg hover:bg-[#262d42] transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs">Call or WhatsApp</div>
                          <div className="text-white font-bold text-sm">{member.phone.replace('+1', '').replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3')}</div>
                        </div>
                      </a>
                    )}
                    
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 px-4 py-3 bg-[#c9a227] rounded-lg hover:bg-[#b8911f] transition-colors"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#1a1f2e]/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#1a1f2e]/70 text-xs font-medium">Email</div>
                          <div className="text-[#1a1f2e] font-bold text-sm truncate">{member.email}</div>
                        </div>
                      </a>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}