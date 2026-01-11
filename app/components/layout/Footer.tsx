export function Footer() {
  return (
    <footer className="relative py-8 px-4 sm:px-6 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="px-4 py-6 sm:px-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0 justify-center">
              <a href="https://github.com/shafisma" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/shafigrate" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile" className="text-gray-500 hover:text-white transition-colors">
                 <span className="sr-only">X (Twitter)</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                 </svg>
              </a>
            </div>
            <p className="text-sm font-medium text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} <a href="#" className="hover:text-white transition-colors">Shafi</a>. Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Next.js</a> & <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tailwind CSS</a>
            </p>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
