import Image from "next/image";
import Link from "next/link";
import { WaveLines } from "@/components/brand/WaveLines";
import type { Post } from "@/content/posts";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ post, headingLevel = "h3" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="card card-interactive group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-950">
        {post.image ? (
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="size-full object-cover"
          />
        ) : (
          <>
            <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
            <WaveLines className="absolute -top-6 right-0 h-[140%] w-1/2 opacity-70" lines={14} />
            <span className="absolute bottom-4 left-5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-ink-500">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {post.readingMinutes} min read
        </p>
        <Heading className="mt-2 text-lg leading-snug font-semibold">
          <Link href={`/resources/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">{post.excerpt}</p>
      </div>
    </article>
  );
}
