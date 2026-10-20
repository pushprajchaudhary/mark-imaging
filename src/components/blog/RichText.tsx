import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

/**
 * Renders inline [text](href) links and **bold** from content strings.
 * Internal links use next/link; external links open safely in a new tab.
 */
export function RichText({ text }: { text: string }): ReactNode {
  return text.split(TOKEN).map((part, i) => {
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      if (href!.startsWith("/")) {
        return (
          <Link key={i} href={href!}>
            {label}
          </Link>
        );
      }
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return part;
  });
}
