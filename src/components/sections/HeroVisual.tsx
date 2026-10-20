const rows = [
  { modality: "CT", study: "Head", source: "Pushed from console", status: "Reported", tone: "done" },
  { modality: "MRI", study: "Lumbar spine", source: "History updated", status: "In reporting", tone: "active" },
  { modality: "X-ray", study: "Chest PA", source: "Pushed from console", status: "Received", tone: "queued" },
] as const;

const statusClass = {
  done: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  active: "bg-brand-50 text-brand-800 ring-brand-200",
  queued: "bg-ink-100 text-ink-700 ring-ink-200",
};

/**
 * Illustrative product-style visual for the home hero, built in HTML/SVG so it
 * is crisp, accessible and costs no image bytes. It depicts the workflow, not
 * real patients, facilities or equipment.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">

      {/* Viewer panel */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-950 p-4 shadow-[0_40px_80px_-30px_rgb(7_17_31/0.55)] sm:p-5">
        <div className="flex items-center justify-between text-[0.6875rem] font-medium text-ink-400">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand-500" />
            Cloud PACS · Study viewer
          </span>
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-ink-300">24×7 CT / MR</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_5.5rem]">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-black">
            <svg viewBox="0 0 200 200" className="absolute inset-0 size-full">
              <defs>
                <radialGradient id="hv-slice" cx="50%" cy="48%" r="50%">
                  <stop offset="0" stopColor="#d9dee6" stopOpacity="0.55" />
                  <stop offset="0.55" stopColor="#8794a8" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#000" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="100" cy="100" rx="70" ry="82" fill="url(#hv-slice)" />
              <ellipse cx="100" cy="100" rx="70" ry="82" fill="none" stroke="#e6e9ee" strokeOpacity="0.65" strokeWidth="5" />
              <ellipse cx="100" cy="100" rx="58" ry="70" fill="none" stroke="#b9c2cf" strokeOpacity="0.25" strokeWidth="1.5" />
              <path d="M100 32 C 92 70, 108 130, 100 168" stroke="#b9c2cf" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
              <ellipse cx="80" cy="96" rx="12" ry="20" fill="#05080d" fillOpacity="0.55" />
              <ellipse cx="120" cy="96" rx="12" ry="20" fill="#05080d" fillOpacity="0.55" />
              <line x1="0" y1="100" x2="200" y2="100" stroke="#fe3231" strokeOpacity="0.45" strokeDasharray="3 4" />
              <line x1="100" y1="0" x2="100" y2="200" stroke="#fe3231" strokeOpacity="0.45" strokeDasharray="3 4" />
            </svg>
            <span className="absolute bottom-2 left-2 font-mono text-[0.625rem] text-ink-400">AXIAL · W:80 L:40</span>
          </div>
          <div className="hidden grid-rows-4 gap-2 sm:grid">
            {[0.85, 0.7, 0.6, 0.5].map((o, i) => (
              <div key={i} className="grid place-items-center rounded-lg bg-black ring-1 ring-white/10">
                <div className="aspect-square w-[56%] rounded-full border border-white/40" style={{ opacity: o }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Worklist card */}
      <div className="relative -mt-16 ml-auto w-[92%] rounded-2xl border border-ink-200 bg-white p-4 shadow-[var(--shadow-lift)] sm:-mt-20 sm:w-[84%] sm:p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-ink-900">Reporting worklist</p>
          <p className="text-[0.6875rem] font-medium text-ink-400">Illustrative</p>
        </div>
        <ul className="mt-3 divide-y divide-ink-100">
          {rows.map((r) => (
            <li key={r.study} className="flex items-center gap-3 py-2.5">
              <span className="grid h-7 w-12 shrink-0 place-items-center rounded-md bg-ink-900 text-[0.6875rem] font-bold text-white">
                {r.modality}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink-800">{r.study}</span>
                <span className="block truncate text-[0.6875rem] text-ink-500">{r.source}</span>
              </span>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold ring-1 ${statusClass[r.tone]}`}>
                {r.status}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t border-ink-100 pt-3 text-[0.6875rem] text-ink-500">
          Routed through partner Radiology Associates · RA 1 · RA 2 · RA 3
        </p>
      </div>
    </div>
  );
}
