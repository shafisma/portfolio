export function Footer() {
  return (
    <footer className="relative py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl px-4 py-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-white">
                shafi<span className="text-indigo-400">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Shafi. Built with Next.js & Tailwind CSS
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
