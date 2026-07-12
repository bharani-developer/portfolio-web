// src/modules/hero/components/hero-skeleton.tsx

export function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-8 animate-pulse">
            <div className="h-10 w-40 rounded-full bg-muted" />

            <div className="space-y-4">
              <div className="h-16 w-full rounded-xl bg-muted" />
              <div className="h-16 w-4/5 rounded-xl bg-muted" />
            </div>

            <div className="h-10 w-72 rounded-xl bg-muted" />

            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-5/6 rounded bg-muted" />
            </div>

            <div className="flex gap-4">
              <div className="h-14 w-44 rounded-xl bg-muted" />
              <div className="h-14 w-44 rounded-xl bg-muted" />
            </div>

            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-10 w-28 rounded-full bg-muted"
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative animate-pulse">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

              <div className="h-[520px] w-[420px] rounded-[40px] bg-muted" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-3xl border border-border p-8"
            >
              <div className="animate-pulse space-y-4">
                <div className="h-12 w-12 rounded-xl bg-muted" />

                <div className="h-8 w-20 rounded bg-muted" />

                <div className="h-4 w-32 rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}