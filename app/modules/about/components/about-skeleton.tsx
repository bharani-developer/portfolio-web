"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center space-y-5 text-center">
        <Skeleton className="h-8 w-36 rounded-full" />

        <Skeleton className="h-12 w-80 max-w-full rounded-xl" />

        <Skeleton className="h-5 w-full max-w-2xl rounded-md" />
        <Skeleton className="h-5 w-5/6 max-w-xl rounded-md" />

        <Skeleton className="h-px w-24" />
      </div>

      {/* Main */}
      <div className="grid gap-8 xl:grid-cols-[380px_1fr]">
        {/* Profile */}
        <div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <div className="flex flex-col items-center">
              <Skeleton className="h-52 w-52 rounded-full" />

              <Skeleton className="mt-8 h-8 w-48 rounded-md" />

              <Skeleton className="mt-3 h-5 w-36 rounded-md" />

              <Skeleton className="mt-6 h-9 w-44 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-10">
          {/* Content */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <Skeleton className="h-8 w-28 rounded-full" />

            <Skeleton className="mt-6 h-12 w-80 rounded-md" />

            <Skeleton className="mt-4 h-6 w-52 rounded-md" />

            <div className="my-8 h-px w-full bg-white/10" />

            <div className="space-y-3">
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="h-5 w-11/12 rounded-md" />
              <Skeleton className="h-5 w-10/12 rounded-md" />
              <Skeleton className="h-5 w-8/12 rounded-md" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Skeleton className="h-16 rounded-xl" />
              <Skeleton className="h-16 rounded-xl" />
              <Skeleton className="h-16 rounded-xl sm:col-span-2" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Skeleton className="h-11 w-44 rounded-lg" />
              <Skeleton className="h-11 w-40 rounded-lg" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <div className="flex items-center justify-between">
                  <Skeleton className="h-11 w-11 rounded-xl" />

                  <Skeleton className="h-4 w-14 rounded-md" />
                </div>

                <Skeleton className="mt-8 h-10 w-20 rounded-md" />

                <Skeleton className="mt-3 h-5 w-28 rounded-md" />
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <Skeleton className="mb-6 h-8 w-56 rounded-md" />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-xl" />

                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-20 rounded-md" />

                      <Skeleton className="h-5 w-full rounded-md" />
                    </div>
                  </div>

                  <Skeleton className="mt-6 h-5 w-24 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}