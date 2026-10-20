import { ArticleCard } from "@/components/blog/ArticleCard";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { getSortedPosts } from "@/content/posts";
import { absoluteUrl } from "@/lib/site";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/resources/blog";
const title = "Teleradiology & Radiology Outsourcing Blog";
const description =
  "Articles from Mark Imaging on teleradiology, CT and MRI reporting, radiologist staffing, second opinions and radiology outsourcing for hospitals.";

export const metadata = buildMetadata({ title, description, path });

export default function BlogIndexPage() {
  const posts = getSortedPosts();
  const published = posts.filter((p) => !p.draft);
  return (
    <>
      <JsonLd
        data={graph(webPageSchema({ path, name: title, description, type: "CollectionPage" }), {
          "@type": "Blog",
          name: `${title}`,
          url: absoluteUrl(path),
          blogPost: published.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/resources/blog/${p.slug}`),
            datePublished: p.publishedAt,
          })),
        })}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path },
        ]}
        eyebrow="Blog"
        title="Teleradiology and radiology outsourcing blog"
        lede="Insights for hospital administrators, radiology heads and diagnostic centre owners."
      />
      <Section labelledBy="posts-heading">
        <h2 id="posts-heading" className="sr-only">
          All articles
        </h2>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <ArticleCard post={p} />
            </li>
          ))}
        </ul>
      </Section>
      <CTABand />
    </>
  );
}
