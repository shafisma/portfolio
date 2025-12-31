export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient orbs */}
      <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-glow" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[70%] bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }} />
      
      {/* Subtle accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Top fade gradient */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030712] to-transparent" />
      
      {/* Bottom fade gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
    </div>
  );
}
