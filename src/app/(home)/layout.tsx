import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  const links = [
    {
      text: "Overview",
      url: "/docs",
    },
  ];

  return (
    <HomeLayout links={links} {...baseOptions}>
      {children}
    </HomeLayout>
  );
}
