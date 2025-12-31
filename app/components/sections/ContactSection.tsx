import { GithubIcon, XIcon, InstagramIcon } from "../icons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shafisma",
    icon: GithubIcon,
    username: "@shafisma",
    color: "hover:border-gray-500/50 hover:bg-gray-500/10",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Shafigrate",
    icon: XIcon,
    username: "@Shafigrate",
    color: "hover:border-gray-400/50 hover:bg-gray-400/10",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sh4fi_dx/",
    icon: InstagramIcon,
    username: "@sh4fi_dx",
    color: "hover:border-pink-500/50 hover:bg-pink-500/10",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I&apos;m always excited to collaborate on interesting projects or
            discuss new opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${link.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-medium text-white mb-1">{link.name}</h3>
              <p className="text-sm text-gray-500">{link.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
