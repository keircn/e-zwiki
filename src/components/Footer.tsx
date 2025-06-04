import Link from "next/link"

export function Footer() {
    return (
        <>
            <footer className="border-t border-fd-border py-12 px-4 mt-auto relative backdrop-blur-sm bg-fd-background/50">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-fd-foreground">E-Z Wiki</h3>
                            <p className="text-fd-muted-foreground text-sm">
                                Building the future of documentation, one page at a time.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-fd-foreground">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Documentation</Link></li>
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Features</Link></li>
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Pricing</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-fd-foreground">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Blog</Link></li>
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Guides</Link></li>
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Support</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-fd-foreground">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">About</Link></li>
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Contact</Link></li>
                                <li><Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">Privacy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-fd-border pt-8 text-center">
                        <p className="text-fd-muted-foreground text-sm">
                            Built with ❤️ for the E-Z community
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}