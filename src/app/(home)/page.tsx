import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-purple-950/50 animate-gradient"></div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse-glow animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-rose-600/15 rounded-full blur-3xl animate-pulse-glow animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-2xl animate-pulse-glow"></div>

        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-violet-500/8 to-purple-500/8 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/12 to-cyan-400/12 rounded-full blur-lg animate-float-slow"></div>

        <div className="absolute top-1/6 left-1/6 w-24 h-24 bg-gradient-to-r from-indigo-500/6 to-blue-500/6 rounded-full blur-md animate-float-reverse"></div>
        <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-gradient-to-r from-pink-500/8 to-rose-500/8 rounded-full blur-lg animate-float"></div>
        <div className="absolute top-2/3 left-1/5 w-20 h-20 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-sm animate-pulse-glow"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgcmVzdWx0PSJub2lzZSIvPjxmZUNvbG9yTWF0cml4IGluPSJub2lzZSIgdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4=')]"></div>
      </div>

      <section className="flex flex-1 flex-col justify-center items-center text-center px-4 py-20 md:py-32 min-h-screen relative">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-fd-foreground tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">E-Z</span> Wiki
            </h1>
            <p className="text-xl md:text-2xl text-fd-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              The team at e-z has a burning passion for creating high-quality web services that are easy to use and understand. We strive to offer the best experience possible for our users.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/docs"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 backdrop-blur-sm border border-blue-500/20"
            >
              Get Started
            </Link>
            <Link
              href="/docs"
              className="px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-fd-foreground font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/30"
            >
              Browse Documentation
            </Link>
          </div>
        </div>
      </section>
      <div className="border-t border-fd-border py-8 text-center">
        <p className="text-fd-muted-foreground text-sm">
          Built with ❤️ by {<Link href="https://github.com/keircn">Keiran</Link>}
        </p>
      </div>
    </main>
  );
}
