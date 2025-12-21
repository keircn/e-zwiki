import Link from "next/link";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import {
  Upload,
  Link2,
  FileText,
  User,
  Zap,
  Code,
  Sparkles,
} from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group p-6 rounded-lg border border-fd-border bg-fd-card hover:border-fd-primary/50 hover:bg-fd-accent/50 transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-md bg-fd-primary/10 text-fd-primary">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-fd-muted-foreground leading-relaxed">
        {description}
      </p>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col justify-center items-center text-center px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fd-border text-sm text-fd-muted-foreground bg-fd-card">
              <Sparkles className="w-4 h-4" />
              <span>Documentation for E-Z Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-fd-foreground tracking-tight">
              E-Z Wiki
            </h1>
            <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to build with E-Z. File hosting, URL
              shortening, paste sharing, and customizable bio pages.
            </p>
          </div>

          <GithubInfo
            owner="keircn"
            repo="e-zwiki"
            className="text-fd-muted-foreground text-sm border border-fd-border hover:border-fd-primary/50"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/docs"
              className="px-8 py-3 bg-fd-primary text-fd-primary-foreground font-medium rounded-md hover:bg-fd-primary/90 transition-colors"
            >
              Read the Docs
            </Link>
            <Link
              href="https://e-z.gg"
              className="px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-md hover:bg-fd-accent transition-colors"
            >
              Visit E-Z.gg
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 border-t border-fd-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fd-foreground mb-4">
              API Services
            </h2>
            <p className="text-fd-muted-foreground max-w-2xl mx-auto">
              Powerful APIs for file hosting, link shortening, and text sharing.
              Simple authentication, fast CDN delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              icon={Upload}
              title="File Upload"
              description="Upload and host files with automatic Cloudflare CDN distribution. Fast, reliable, and easy to integrate."
              href="/docs/api/upload"
            />
            <FeatureCard
              icon={Link2}
              title="URL Shortener"
              description="Create short, memorable links from long URLs. Perfect for sharing and tracking."
              href="/docs/api/shortener"
            />
            <FeatureCard
              icon={FileText}
              title="Paste Service"
              description="Share code and text with syntax highlighting. Great for snippets and logs."
              href="/docs/api/paste"
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/docs/api"
              className="inline-flex items-center gap-2 text-fd-primary hover:underline"
            >
              <Code className="w-4 h-4" />
              View full API reference
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 border-t border-fd-border bg-fd-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-fd-foreground mb-4">
                E-Z Bio
              </h2>
              <p className="text-fd-muted-foreground mb-6 leading-relaxed">
                Create stunning, customizable bio pages with rich features and
                animations. Connect your socials, show your Discord presence,
                and make your page uniquely yours.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Customizable URLs and layouts",
                  "Rich media support with backgrounds and audio",
                  "Live Discord presence integration",
                  "Advanced animations and effects",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-fd-muted-foreground"
                  >
                    <Zap className="w-4 h-4 text-fd-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/docs/bio"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-fd-primary text-fd-primary-foreground font-medium rounded-md hover:bg-fd-primary/90 transition-colors"
              >
                <User className="w-4 h-4" />
                Explore Bio Docs
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={User}
                title="Settings"
                description="Configure layout and display options"
                href="/docs/bio/settings"
              />
              <FeatureCard
                icon={Sparkles}
                title="Cosmetics"
                description="Colors, fonts, and visual effects"
                href="/docs/bio/cosmetics"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 border-t border-fd-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-fd-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-fd-muted-foreground mb-8 max-w-xl mx-auto">
            Jump into the documentation or create your account to start using
            E-Z services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="px-8 py-3 bg-fd-primary text-fd-primary-foreground font-medium rounded-md hover:bg-fd-primary/90 transition-colors"
            >
              Browse Documentation
            </Link>
            <Link
              href="https://e-z.bio"
              className="px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-md hover:bg-fd-accent transition-colors"
            >
              Create Bio Page
            </Link>
            <Link
              href="https://discord.gg/ez"
              className="px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-md hover:bg-fd-accent transition-colors"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
