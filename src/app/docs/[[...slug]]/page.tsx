import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import ez_svg from "@/assets/e-z.svg";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const image = ["/docs-og", ...slug, "image.png"].join("/");
  return {
    metadataBase: new URL("https://e-z.wiki"),
    icons: {
      icon: ez_svg.src,
    },
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: image,
      title: page.data.title,
      description: page.data.description,
      url: new URL(`/docs/${slug.join("/")}`, "https://e-z.wiki").href,
      siteName: "E-Z Wiki",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      images: image,
    },
  };
}
