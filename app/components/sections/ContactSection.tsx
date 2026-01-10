import { GithubIcon, XIcon, InstagramIcon } from "../icons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shafisma",
    icon: GithubIcon,
    username: "@shafisma",
    bg: "hover:bg-[#333333] hover:text-white",
    baseColor: "bg-white",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Shafigrate",
    icon: XIcon,
    username: "@Shafigrate",
    bg: "hover:bg-black hover:text-white", 
    baseColor: "bg-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sh4fi_dx/",
    icon: InstagramIcon,
    username: "@sh4fi_dx",
    bg: "hover:bg-[#E1306C] hover:text-white",
    baseColor: "bg-white",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 border border-accent/20 bg-accent/10 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 rounded-full">
            Contact
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base sm:text-xl leading-relaxed">
            I&apos;m always excited to collaborate on interesting projects or
            discuss new opportunities.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`modern-card p-6 sm:p-8 text-center bg-white/5 hover:bg-white/10 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent mb-1 sm:mb-2 uppercase transition-colors">{link.name}</h3>
              <p className="text-xs sm:text-sm font-bold text-gray-500 group-hover:text-gray-300 transition-colors">{link.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
