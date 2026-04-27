export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2400&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/40 via-black/50 to-zinc-50" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-display font-semibold tracking-widest text-white/80">
            DISCOVER YOUR PERFECT MATCH
          </p>
          <h1 className="mt-3 text-balance text-4xl font-display mb-4 font-semibold tracking-tight text-white sm:text-5xl">
            Shop curated picks across our top categories
          </h1>
        </div>
      </div>
    </section>
  )
}
