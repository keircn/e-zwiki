import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import ez_svg from "@/assets/e-z.svg";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://e-z.wiki"),
  title: "E-Z Wiki",
  description: "Documentation for E-Z Services",
  icons: {
    icon: ez_svg.src,
  },
  openGraph: {
    title: "E-Z Wiki",
    description: "Official Documentation for E-Z Services",
    url: "https://e-z.wiki",
    siteName: "E-Z Services",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            forcedTheme: "dark",
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
