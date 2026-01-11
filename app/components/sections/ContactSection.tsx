import { GithubIcon, XIcon, InstagramIcon } from "../icons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shafisma",
    icon: GithubIcon,
    username: "@shafisma",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Shafigrate",
    icon: XIcon,
    username: "@Shafigrate",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sh4fi_dx/",
    icon: InstagramIcon,
    username: "@sh4fi_dx",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Text & Intent */}
        <div>
          <span className="inline-block px-4 py-2 border border-accent/20 bg-accent/10 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 rounded-full">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Let&apos;s build something <span className="text-gray-500">meaningful.</span>
          </h2>
          
          <div className="space-y-8 mb-12">
            <p className="text-gray-400 font-medium text-lg leading-relaxed">
              I’m currently available for freelance work and open source collaborations.
            </p>
            
            <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-accent text-sm mt-0.5">1</span>
                 <span className="text-gray-300"><strong>Hire me</strong> to build your MVP or ship a critical feature.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-accent text-sm mt-0.5">2</span>
                 <span className="text-gray-300"><strong>Collaborate</strong> on open source tools or developer infrastructure.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-accent text-sm mt-0.5">3</span>
                 <span className="text-gray-300"><strong>Discuss</strong> technical implementation or architecture.</span>
               </li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-flex items-center gap-4">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-black"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Response Time</p>
                <p className="text-white font-bold">Within 24-48 Hours</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
             {socialLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.href} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label={link.name}
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all text-white"
               >
                 <link.icon className="w-5 h-5" />
               </a>
             ))}
          </div>
        </div>

        {/* Right Column: Short Form */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10">
          <h3 className="text-2xl font-bold text-white mb-6">Start a project</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Project Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-accent/50 transition-colors">
                <option>Web Application Development</option>
                <option>Landing Page / Marketing Site</option>
                <option>MVP Development</option>
                <option>API / Backend System</option>
                <option>Consultation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Timeline</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-accent/50 transition-colors">
                <option>Less than 1 month</option>
                <option>1 - 3 months</option>
                <option>3 - 6 months</option>
                <option>Flexible</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Tell me about the project</label>
              <textarea rows={4} placeholder="What are we building?" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
              Send Message
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">I'll get back to you within 48 hours.</p>
          </form>
        </div>

      </div>
    </section>
  );
}
