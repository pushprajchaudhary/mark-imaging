import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceGrid } from "@/components/sections/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPostsForService } from "@/content/posts";
import { getService, getServices, serviceSlugs } from "@/content/services";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const quoteHref = `/contact?service=${service.slug}#enquiry`;
  const related = getServices(service.related);
  const articles = getPostsForService(service.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: service.h1, description: service.metaDescription }),
          serviceSchema({
            path,
            name: service.name,
            description: service.metaDescription,
            serviceType: service.serviceType,
            audience: ["Hospitals", "Diagnostic centres", "Imaging centres", "Healthcare organisations"],
          }),
        )}
      />

      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]}
        eyebrow="Radiology services"
        badge={service.badge}
        title={service.h1}
        lede={service.lede}
        actions={
          <>
            <ButtonLink href={quoteHref} size="lg" arrow>
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Talk to Our Team
            </ButtonLink>
          </>
        }
        aside={
          <div className="card p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-wider text-ink-500 uppercase">At a glance</p>
            <CheckList className="mt-5" items={service.benefits.slice(0, 4).map((b) => b.title)} />
            <div className="mt-6 border-t border-ink-100 pt-5 text-sm text-ink-500">
              Questions? Call{" "}
              <a href={siteConfig.contact.phoneHref} className="font-semibold text-ink-900 hover:text-brand-700">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        }
      />

      {/* Introduction + what it is */}
      <Section labelledBy="what-heading">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <h2 id="what-heading" className="text-2xl font-semibold sm:text-3xl">
              {service.whatItIs.heading}
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-600">
              {service.whatItIs.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {service.whatItIs.list && (
              <ul className="mt-6 grid gap-3">
                {service.whatItIs.list.map((item) => (
                  <li key={item.title} className="rounded-xl border border-ink-200 bg-ink-50 px-5 py-4">
                    <h3 className="font-sans text-base font-semibold tracking-normal">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{item.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Section>

      {/* Who it is for */}
      <Section labelledBy="audience-heading" tone="mist">
        <SectionHeading id="audience-heading" eyebrow="Who it is for" title={`Who uses our ${service.nameInSentence} service`} />
        <FeatureGrid items={service.audience} className="mt-12" />
      </Section>

      {/* Benefits */}
      <Section labelledBy="benefits-heading">
        <SectionHeading id="benefits-heading" eyebrow="Key benefits" title="What you gain" />
        <FeatureGrid
          items={service.benefits}
          numbered
          columns={service.benefits.length === 4 ? 4 : 3}
          className="mt-12"
        />
      </Section>

      {/* How it works */}
      <Section labelledBy="steps-heading" tone="mist">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="steps-heading" eyebrow="How it works" title={`Getting started with ${service.nameInSentence}`} />
          <ArrowLink href="/about#how-it-works" className="shrink-0">
            Our onboarding process
          </ArrowLink>
        </div>
        <div className="mt-14">
          <ProcessSteps steps={service.steps} />
        </div>
      </Section>

      {/* Why Mark Imaging */}
      <Section labelledBy="why-heading" tone="dark" className="overflow-hidden">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <SectionHeading
            id="why-heading"
            tone="dark"
            eyebrow="Why Mark Imaging"
            title="An aggregator of radiology providers, not a typical teleradiology company"
          />
          <FeatureGrid items={service.why} tone="dark" className="mt-12" />
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="/about#why-mark-imaging" className="text-brand-300 hover:text-brand-200">
              How our provider network works
            </ArrowLink>
            <ArrowLink href="/about#quality" className="text-brand-300 hover:text-brand-200">
              Our quality and ethics standards
            </ArrowLink>
          </div>
        </div>
      </Section>

      <FAQ faqs={service.faqs} title={`${service.name}: frequently asked questions`} />

      {/* Related services and reading */}
      <Section labelledBy="related-heading" tone="mist">
        <SectionHeading id="related-heading" eyebrow="Related services" title="Often combined with" />
        <ServiceGrid services={related} className="mt-12 lg:grid-cols-4" />
        {articles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold">Further reading</h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {articles.map((post) => (
                <li key={post.slug}>
                  <ArticleCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <CTABand
        title={`Get a quote for ${service.nameInSentence}`}
        description="Share your modalities, approximate volumes and the hours you need covered, and we will prepare a customised quote."
        quoteHref={quoteHref}
      />
    </>
  );
}
