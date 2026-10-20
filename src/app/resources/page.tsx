import { ArticleCard } from "@/components/blog/ArticleCard";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSortedPosts } from "@/content/posts";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/resources";
const title = "Radiology Resources & Guides";
const description =
  "Guides on teleradiology, radiology outsourcing, radiologist staffing, second opinions and PACS for hospital and diagnostic centre teams.";

export const metadata = buildMetadata({ title, description, path });

const guides = [
  { label: "What is teleradiology and how does it work?", href: "/teleradiology" },
  { label: "Radiology outsourcing models compared", href: "/radiology-outsourcing" },
  { label: "PACS, RIS and HIS explained", href: "/services/pacs-ris-his-solutions" },
  { label: "Our teleradiology onboarding process", href: "/about#how-it-works" },
  { label: "Questions to ask a radiology outsourcing partner", href: "/radiology-outsourcing#checklist-heading" },
  { label: "What a radiology second opinion is, and is not", href: "/services/second-opinion-reporting" },
];

export default function ResourcesPage() {
  const posts = getSortedPosts();
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path, name: title, description, type: "CollectionPage" }))} />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path },
        ]}
        eyebrow="Resources"
        title="Radiology resources for hospitals and diagnostic centres"
        lede="Practical guides on teleradiology, radiology outsourcing and imaging software, written for the people who plan and run radiology services."
        actions={
          <ButtonLink href="/resources/blog" size="lg" arrow>
            Read the blog
          </ButtonLink>
        }
      />

      <Section labelledBy="guides-heading">
        <SectionHeading id="guides-heading" eyebrow="Guides" title="Start here" />
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.href} className="rounded-xl border border-ink-200 px-5 py-4 transition-colors hover:border-ink-300">
              <ArrowLink href={g.href} className="text-ink-900 hover:text-brand-700">
                {g.label}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="latest-heading" tone="mist">
        <SectionHeading id="latest-heading" eyebrow="Blog" title="Latest articles" />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
