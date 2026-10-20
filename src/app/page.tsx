import Image from "next/image";
import Link from "next/link";
import { Clock, FileSearch, ShieldCheck, UserRound } from "lucide-react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { WaveLines } from "@/components/brand/WaveLines";
import { ImagingWorkflowDiagram, ProviderNetworkDiagram } from "@/components/diagrams/FlowDiagram";
import { UnderOneRoof } from "@/components/diagrams/UnderOneRoof";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceGrid } from "@/components/sections/ServiceCard";
import { ApplicationGrid, ChallengeList, ModalityGrid } from "@/components/sections/TeleradiologySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, differentiators, processSteps } from "@/content/company";
import { homeFaqs } from "@/content/faqs";
import { getSortedPosts } from "@/content/posts";
import { getService, services } from "@/content/services";
import { teleradiologyFaqs } from "@/content/teleradiology";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Mark Imaging | Radiology Outsourcing & Teleradiology Services";
const description =
  "Radiology outsourcing and teleradiology for hospitals and diagnostic centres: 24×7 CT and MRI reporting, X-ray reporting, radiologist staffing and PACS support.";

export const metadata = buildMetadata({ title, description, path: "/", absoluteTitle: true });

const trustPoints = [
  { icon: Clock, label: "24×7 on-demand CT & MR reporting" },
  { icon: ShieldCheck, label: "Strict radiologist verification" },
  { icon: UserRound, label: "Dedicated relationship manager" },
  { icon: FileSearch, label: "Radiologist documents on demand" },
];

/** Home FAQ: company questions plus general teleradiology questions (no duplicates). */
const faqs = [
  ...homeFaqs.slice(0, 3),
  ...teleradiologyFaqs.filter((f) => f.question !== "What is teleradiology?").slice(0, 3),
  ...homeFaqs.slice(3),
];

export default function HomePage() {
  const posts = getSortedPosts().slice(0, 3);

  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: "/", name: title, description }))} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
        <div
          className="bg-grid-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
          aria-hidden="true"
        />
        <WaveLines className="absolute top-0 right-0 hidden h-full w-[34rem] opacity-40 lg:block" />
        <div className="container-x relative grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-28">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-ink-200 bg-white py-1.5 pr-4 pl-1.5 shadow-sm">
              <Image
                src={siteConfig.logo.cropped}
                alt="Mark Imaging logo"
                width={476}
                height={340}
                className="h-7 w-auto rounded-full bg-white px-1"
                sizes="40px"
                priority
              />
              <span className="text-xs font-semibold tracking-wide text-ink-700">
                <span className="hidden sm:inline">Mark Imaging · </span>
                {siteConfig.tagline}
              </span>
            </div>
            <h1 className="text-display mt-7 font-semibold">
              One partner for radiology reporting, <span className="text-brand-700">staffing and software</span>
            </h1>
            <p className="text-lede mt-6 max-w-xl">
              Mark Imaging gives hospitals and diagnostic centres 24×7 CT and MRI reporting, X-ray reporting, contract
              radiologists and PACS support, delivered through a network of radiology provider groups across India.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact#enquiry" size="lg" arrow>
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
            <ul className="mt-10 grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2">
              {trustPoints.map(({ icon: I, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-ink-700">
                  <I className="size-4 shrink-0 text-brand-700" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* About */}
      <Section labelledBy="about-heading" className="!pt-8 sm:!pt-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading id="about-heading" eyebrow="About Mark Imaging" title="Bridging the demand–supply gap in radiology" />
          <div className="reveal space-y-5 text-lg leading-relaxed text-ink-600">
            <p>{about.leadership}</p>
            <p>
              Our mission is to bridge the demand–supply gap in the radiology space by offering innovative solutions
              built on technology and new distribution models. For our clients, that means a{" "}
              <strong className="font-semibold text-ink-900">one-stop solution for all radiology requirements</strong>.
            </p>
            <ArrowLink href="/about">More about Mark Imaging</ArrowLink>
          </div>
        </div>
      </Section>

      {/* What is teleradiology + modalities */}
      <Section labelledBy="telerad-heading" tone="mist">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="telerad-heading"
            eyebrow="Teleradiology, explained"
            title="Scan on site. Report remotely."
          />
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              Teleradiology is the remote reporting of medical images. Your team performs the CT, MRI or X-ray as usual;
              the study is sent through a cloud PACS and read by a qualified radiologist working elsewhere.
            </p>
            <p>
              It lets hospitals and diagnostic centres report studies at night, at weekends and during busy periods,
              without keeping a radiologist on site for every hour.
            </p>
            <ArrowLink href="/teleradiology">How teleradiology works with Mark Imaging</ArrowLink>
          </div>
        </div>
        <h3 className="mt-16 text-2xl font-semibold">What we report</h3>
        <div className="mt-8">
          <ModalityGrid />
        </div>
      </Section>

      {/* Aggregator model */}
      <Section labelledBy="network-heading" id="provider-network">
        <SectionHeading
          id="network-heading"
          eyebrow="Our radiology provider network"
          title="One partner. Multiple radiology provider groups."
          description="Mark Imaging is an aggregator of radiology providers, not a typical teleradiology company. We partner with multiple Radiology Associates, registered firms of groups of radiologists, across India, and act as consultants who build the right solution for your department."
        />
        <ProviderNetworkDiagram className="mt-14" />
        <div className="mt-16">
          <h3 className="sr-only">How we are different</h3>
          <FeatureGrid items={differentiators} numbered />
        </div>
        <ArrowLink href="/about#why-mark-imaging" className="mt-10">
          Why the aggregator model matters for hospitals
        </ArrowLink>
      </Section>

      {/* Services */}
      <Section labelledBy="services-heading" id="services" tone="mist">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="services-heading"
            eyebrow="Our radiology services"
            title="Radiology services for every part of your department"
            description="From on-demand teleradiology reporting to contract radiologists and imaging software, all through one relationship."
          />
          <ButtonLink href="/services" variant="secondary" className="shrink-0">
            View all services
          </ButtonLink>
        </div>
        <ServiceGrid services={services} className="mt-12 lg:grid-cols-4" withCta />
      </Section>

      {/* 24×7 */}
      <Section labelledBy="always-on-heading" tone="dark" className="overflow-hidden">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="always-on-heading"
              tone="dark"
              eyebrow="24×7 reporting"
              title="CT and MRI reporting that keeps pace with your scanners"
              description="On-demand CT and MR reporting runs as a 24×7 service. Nights, weekends and holidays are covered without keeping a radiologist on site for every shift."
            />
            <CheckList
              tone="dark"
              className="mt-8"
              items={[
                "Cases pushed directly from the CT or MRI console",
                "Patient history updated in the PACS for every study",
                "Each study stored for one year for repeat patients",
                "Work spread across multiple radiologist groups",
              ]}
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/services/ct-reporting" variant="light">
                24×7 CT reporting
              </ButtonLink>
              <ButtonLink href="/services/mri-reporting" variant="outline-light">
                24×7 MRI reporting
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {(["ct-reporting", "mri-reporting"] as const).map((slug) => {
              const s = getService(slug)!;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="reveal group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <Icon name={s.icon} className="size-7 shrink-0 text-brand-300" />
                  <span>
                    <span className="block font-display text-lg font-semibold text-white">{s.name}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-ink-300">{s.summary}</span>
                  </span>
                </Link>
              );
            })}
            <div className="reveal rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-semibold tracking-wider text-ink-400 uppercase">CT &amp; MR reporting coverage</p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Weekdays", "Nights", "Weekends", "Holidays"].map((d) => (
                  <li key={d} className="rounded-xl bg-white/[0.04] px-3 py-3 text-center">
                    <span className="block font-display text-sm font-semibold text-white">{d}</span>
                    <span className="mt-1 block text-xs text-brand-300">Covered</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Where we help */}
      <Section labelledBy="help-heading">
        <SectionHeading
          id="help-heading"
          eyebrow="Where we help"
          title="The radiology problems hospitals bring to us"
          description="Each situation maps to a service you can start on its own or combine with others under one contract."
        />
        <div className="mt-12">
          <ApplicationGrid />
        </div>
      </Section>

      {/* How it works */}
      <Section labelledBy="process-heading" tone="mist">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="process-heading"
            eyebrow="How Mark Imaging works"
            title="From first conversation to first report in three steps"
          />
          <ButtonLink href="/about#how-it-works" variant="secondary" className="shrink-0">
            See the full process
          </ButtonLink>
        </div>
        <div className="mt-14">
          <ProcessSteps steps={processSteps} />
        </div>
        <div className="mt-16 rounded-[1.75rem] border border-ink-200 bg-white p-5 sm:p-8">
          <h3 className="text-center font-display text-base font-semibold">How a study travels</h3>
          <ImagingWorkflowDiagram className="mt-6" />
        </div>
      </Section>

      {/* Challenges addressed */}
      <Section labelledBy="challenges-heading" tone="dark" className="overflow-hidden">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <SectionHeading
            id="challenges-heading"
            tone="dark"
            eyebrow="Quality & ethics"
            title="Common teleradiology concerns, and how we address them"
            description="Hospitals tell us the same worries about outsourced reporting. These are our commitments on each."
          />
          <div className="mt-12">
            <ChallengeList tone="dark" />
          </div>
          <ArrowLink href="/about#quality" className="mt-10 text-brand-300 hover:text-brand-200">
            Our quality and ethics standards
          </ArrowLink>
        </div>
      </Section>

      {/* Why hospitals choose us */}
      <Section labelledBy="hospitals-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="hospitals-heading"
              eyebrow="Why hospitals choose us"
              title="All radiology services under one roof"
              description="Instead of managing separate teleradiology vendors, locum radiologists and software suppliers, hospitals work with one partner that brings them together."
            />
            <ArrowLink href="/for-hospitals" className="mt-8">
              Radiology outsourcing for hospitals
            </ArrowLink>
          </div>
          <UnderOneRoof />
        </div>
      </Section>

      {/* Resources */}
      {posts.length > 0 && (
        <Section labelledBy="resources-heading" tone="mist">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="resources-heading" eyebrow="Resources" title="Guides for radiology and hospital teams" />
            <ButtonLink href="/resources/blog" variant="secondary" className="shrink-0">
              Read the blog
            </ButtonLink>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <ArticleCard post={p} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FAQ faqs={faqs} />
      <CTABand />
    </>
  );
}
