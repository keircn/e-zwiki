import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  const links = [
    {
      text: "Overview",
      url: "/docs",
    },
    {
      text: "API Reference",
      url: "/docs/api",
    },
    {
      text: "Bio Reference",
      url: "/docs/bio",
    },
  ];

  return (
    <HomeLayout links={links} {...baseOptions}>
      {children}
    </HomeLayout>
  );
}
