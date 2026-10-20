"use client";

/** Last-resort boundary when the root layout itself fails. Must render <html>. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en-IN">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", color: "#0c1a2e" }}>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>Something went wrong</h1>
        <p style={{ marginTop: "1rem", color: "#5b6b83" }}>
          Please try again, or contact Mark Imaging on +91-81269-63692 or markimaging9@gmail.com.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            borderRadius: 999,
            border: 0,
            background: "#d0201e",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
