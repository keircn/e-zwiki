import Link from "next/link";
import { GithubInfo } from "fumadocs-ui/components/github-info";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-1 flex-col justify-center items-center text-center px-4 py-20 md:py-32 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-fd-foreground tracking-tight">
              E-Z Wiki
            </h1>
            <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed">
              High-quality web services that are easy to use and understand.
              Documentation and resources for the E-Z platform.
            </p>
          </div>

          <GithubInfo
            owner="keircn"
            repo="e-zwiki"
            className="text-fd-muted-foreground text-sm border border-border hover:border-fd-accent"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="https://e-z.gg"
              className="px-8 py-3 bg-fd-primary text-fd-primary-foreground font-medium rounded-md hover:bg-fd-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/docs"
              className="px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-md hover:bg-fd-accent transition-colors"
            >
              Browse Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
