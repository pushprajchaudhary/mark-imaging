import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleBody, ArticleToc } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getPost, getRelatedPosts, posts } from "@/content/posts";
import { getServices } from "@/content/services";
import { articleSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/resources/blog/${post.slug}`,
    ogType: "article",
    ogImage: post.image && { url: post.image.src, alt: post.image.alt, width: post.image.width, height: post.image.height },
    noIndex: post.draft,
    article: { publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: [post.author] },
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/resources/blog/${post.slug}`;
  const relatedServices = getServices(post.relatedServices).slice(0, 3);
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <>
      <JsonLd
        data={graph(
          articleSchema({
            path,
            headline: post.title,
            description: post.description,
            image: post.image?.src,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            authorName: post.author,
          }),
        )}
      />

      <article>
        <header className="border-b border-ink-200/70 bg-ink-50">
          <div className="container-x pt-10 pb-14 sm:pb-16">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Resources", path: "/resources" },
                { name: "Blog", path: "/resources/blog" },
                { name: post.seoTitle ?? post.title, path },
              ]}
            />
            {post.draft && (
              <p className="mt-8 inline-block rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900">
                Draft: pending review by Mark Imaging. Not indexed by search engines.
              </p>
            )}
            <div className="mt-8 max-w-3xl">
              <p className="eyebrow">{post.category}</p>
              <h1 className="mt-5 text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.1] font-semibold">{post.title}</h1>
              <p className="text-lede mt-6">{post.description}</p>
              <p className="mt-8 text-sm text-ink-500">
                By <span className="font-semibold text-ink-800">{post.author}</span> · Published{" "}
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {post.updatedAt !== post.publishedAt && (
                  <>
                    {" "}
                    · Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                  </>
                )}{" "}
                · {post.readingMinutes} min read
              </p>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="container-x -mb-6 pt-10">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={post.image.width}
              height={post.image.height}
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        )}

        <div className="container-x grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-20">
          <div className="max-w-3xl">
            <ArticleBody blocks={post.body} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <ArticleToc blocks={post.body} />
            <div className="rounded-2xl bg-ink-950 p-6 text-ink-300">
              <p className="font-display text-lg font-semibold text-white">Discuss your radiology requirements</p>
              <p className="mt-2 text-sm">Get a customised quote for reporting, staffing or software.</p>
              <ButtonLink href="/contact#enquiry" className="mt-5 w-full">
                Get a Quote
              </ButtonLink>
            </div>
          </aside>
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && <FAQ faqs={post.faqs} tone="mist" />}

      <Section labelledBy="related-services-heading">
        <h2 id="related-services-heading" className="text-h2 font-semibold">
          Related services
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedServices.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
        {relatedPosts.length > 0 && (
          <>
            <h2 className="text-h2 mt-20 font-semibold">Related articles</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <ArticleCard post={p} />
                </li>
              ))}
            </ul>
          </>
        )}
      </Section>

      <CTABand />
    </>
  );
}
