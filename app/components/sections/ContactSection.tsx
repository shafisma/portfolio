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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-accent/20 bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6 rounded-full">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            I&apos;m always excited to collaborate on interesting projects or
            discuss new opportunities.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`modern-card p-8 text-center bg-white/5 hover:bg-white/10 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent mb-2 uppercase transition-colors">{link.name}</h3>
              <p className="text-sm font-bold text-gray-500 group-hover:text-gray-300 transition-colors">{link.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
