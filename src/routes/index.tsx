import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CATEGORIES, CURRICULUM, SIGNALS, TONIGHT_ROUTE, type Category } from "@/data/signals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Velvet Ledger — Austin High-Society Signal Feed" },
      {
        name: "description",
        content:
          "A daily feed of Austin high-society movement: private clubs, speakeasies, founder dinners, brand activations and the access habits that get women into the room.",
      },
      { property: "og:title", content: "The Velvet Ledger — Austin High-Society Signal Feed" },
      {
        property: "og:description",
        content:
          "Track Austin's private clubs, speakeasies, founder dinners and brand activations — and learn the movement hacks behind them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ACCESS_TONE: Record<string, string> = {
  Open: "text-primary",
  "Soft door": "text-foreground",
  "Hard door": "text-muted-foreground",
  "List only": "text-muted-foreground",
};

function Index() {
  const [active, setActive] = useState<Category | "All">("All");

  const signals = useMemo(
    () => (active === "All" ? SIGNALS : SIGNALS.filter((s) => s.category === active)),
    [active],
  );

  const avgConfidence = Math.round(
    SIGNALS.reduce((sum, s) => sum + s.confidence, 0) / SIGNALS.length,
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8">
      {/* Masthead */}
      <header className="pt-14 pb-10 sm:pt-20">
        <p className="eyebrow">Austin, Texas · Friday edition</p>
        <h1 className="mt-4 text-5xl leading-[0.95] sm:text-7xl">
          The Velvet Ledger
        </h1>
        <div className="hairline mt-7" />
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A quiet daily record of where Austin&rsquo;s rooms are forming tonight — assembled
          entirely from public digital exhaust. Read it long enough and you stop needing it:
          the habits of access become your own.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border sm:grid-cols-4">
          {[
            ["Live signals", String(SIGNALS.length)],
            ["Avg. confidence", `${avgConfidence}%`],
            ["Districts watched", "9"],
            ["Refreshed", "4 min ago"],
          ].map(([label, value]) => (
            <div key={label} className="surface px-5 py-6">
              <dt className="eyebrow">{label}</dt>
              <dd className="mt-2 font-display text-3xl text-primary">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Filters */}
      <nav aria-label="Intel categories" className="flex flex-wrap gap-2 pb-8">
        {(["All", ...CATEGORIES] as const).map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-xs tracking-wide transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      {/* Tonight's route */}
      <section aria-label="Tonight's route" className="mb-20">
        <p className="eyebrow">If you only do one thing tonight</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">The route</h2>
        <ol className="mt-8 border border-border">
          {TONIGHT_ROUTE.map((stop) => (
            <li
              key={stop.time}
              className="surface grid gap-2 border-b border-border p-5 last:border-b-0 sm:grid-cols-[7rem_1fr]"
            >
              <p className="font-display text-2xl text-primary">{stop.time}</p>
              <div>
                <p className="text-lg">{stop.place}</p>
                <p className="text-sm text-muted-foreground">{stop.address}</p>
                <p className="mt-1 text-sm">{stop.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Feed */}
      <section aria-label="Daily feed">

        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl sm:text-4xl">Tonight&rsquo;s movement</h2>
          <span className="eyebrow">{signals.length} signals</span>
        </div>
        <div className="mt-6 flex flex-col">
          {signals.map((s) => (
            <article
              key={s.id}
              className="group grid gap-5 border-t border-border py-8 sm:grid-cols-[7rem_1fr]"
            >
              <div>
                <p className="font-display text-2xl text-primary">{s.time}</p>
                <p className="eyebrow mt-1">{s.district}</p>
              </div>

              <div>
                <p className="eyebrow">{s.category}</p>
                <h3 className="mt-2 text-2xl leading-snug">{s.title}</h3>
                <p className="mt-1 text-sm text-foreground">{s.venue}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.address}</p>

                <div className="mt-4 grid gap-px border border-border sm:grid-cols-2">
                  <div className="surface px-4 py-3">
                    <p className="eyebrow">Be there</p>
                    <p className="mt-1 text-sm text-primary">{s.window}</p>
                  </div>
                  <div className="surface px-4 py-3">
                    <p className="eyebrow">Leave</p>
                    <p className="mt-1 text-sm">{s.exitBy}</p>
                  </div>
                  <div className="surface px-4 py-3">
                    <p className="eyebrow">Where to stand</p>
                    <p className="mt-1 text-sm">{s.position}</p>
                  </div>
                  <div className="surface px-4 py-3">
                    <p className="eyebrow">Getting in &amp; what it costs</p>
                    <p className="mt-1 text-sm">
                      {s.arrival} · {s.spend}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="surface p-4">
                    <p className="eyebrow">The play</p>
                    <p className="mt-2 text-sm leading-relaxed">{s.play}</p>
                  </div>
                  <div className="surface p-4">
                    <p className="eyebrow">What it teaches you</p>
                    <p className="mt-2 font-display text-lg leading-snug text-primary">
                      {s.lesson}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-xs text-muted-foreground">
                  <li>
                    Door:{" "}
                    <span className={ACCESS_TONE[s.access]}>{s.access}</span>
                  </li>
                  <li>Dress: {s.dress}</li>
                  <li>Source: {s.source}</li>
                  <li>
                    Confidence: <span className="text-foreground">{s.confidence}%</span>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
        {signals.length === 0 && (
          <p className="border-t border-border py-12 text-sm text-muted-foreground">
            Nothing surfaced in this category tonight. Quiet rooms are still rooms.
          </p>
        )}
      </section>

      {/* Passive curriculum */}
      <section aria-label="Movement curriculum" className="mt-24">
        <p className="eyebrow">Absorbed, not studied</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">The six habits underneath every signal</h2>
        <div className="mt-8 grid gap-px border border-border sm:grid-cols-2 lg:grid-cols-3">
          {CURRICULUM.map((l, i) => (
            <div key={l.title} className="surface p-6">
              <p className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Method */}
      <section aria-label="Method" className="mt-24">
        <div className="hairline" />
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {[
            [
              "Monitor",
              "Public digital exhaust only: open stories, venue tag pages, public call sheets, reservation blocks, valet volume, newsletter excerpts people forwarded themselves.",
            ],
            [
              "Detect",
              "Unlisted hotel gatherings, lobby drift, investor dinners, brand activation teardowns, speakeasy password rotations, private club guest-of-guest windows.",
            ],
            [
              "Teach",
              "Every entry ships with the etiquette beneath it — so the feed makes itself unnecessary. Public rooms, honest introductions, no impersonation, no crashing hard doors.",
            ],
          ].map(([h, b]) => (
            <div key={h}>
              <p className="eyebrow">{h}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-border pt-8">
        <p className="text-xs text-muted-foreground">
          The Velvet Ledger · Austin · Aggregated from public sources. Charm is a
          discipline, not a trick.
        </p>
      </footer>
    </main>
  );
}
