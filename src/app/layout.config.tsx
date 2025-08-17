import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import ez_svg from "@/assets/e-z.svg";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src={ez_svg}
          alt="E-Z Logo"
          className="h-6 w-auto inline-block mr-1"
        />
        E-Z Wiki
      </>
    ),
    transparentMode: "always",
  },
  themeSwitch: {
    enabled: false,
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "API Reference",
      url: "/docs/api",
      active: "nested-url",
    },
    {
      text: "Bio Docs",
      url: "/docs/bio",
      active: "nested-url",
    },
  ],
};
