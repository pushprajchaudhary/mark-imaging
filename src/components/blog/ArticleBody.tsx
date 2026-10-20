import { Info } from "lucide-react";
import type { ArticleBlock } from "@/content/posts";
import { RichText } from "./RichText";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-mi">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <RichText text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={block.id}>
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List key={i}>
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "callout":
            return (
              <aside key={i} className="!mt-8 flex gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-5 sm:p-6">
                <Info className="mt-1 size-5 shrink-0 text-brand-700" aria-hidden="true" />
                <div>
                  <p className="font-display font-semibold text-ink-900">{block.title}</p>
                  <p className="mt-1 text-[0.975rem] leading-relaxed">
                    <RichText text={block.text} />
                  </p>
                </div>
              </aside>
            );
        }
      })}
    </div>
  );
}

/** Table of contents from the article's H2 blocks. */
export function ArticleToc({ blocks }: { blocks: ArticleBlock[] }) {
  const headings = blocks.filter((b): b is Extract<ArticleBlock, { type: "h2" }> => b.type === "h2");
  if (headings.length < 2) return null;
  return (
    <nav aria-label="In this article" className="rounded-2xl border border-ink-200 p-5">
      <p className="text-xs font-semibold tracking-wider text-ink-500 uppercase">In this article</p>
      <ol className="mt-3 space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="text-ink-700 hover:text-brand-700">
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
