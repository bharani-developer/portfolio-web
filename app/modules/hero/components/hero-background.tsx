// src/modules/hero/components/hero-background.tsx

"use client";

export function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 -z-50 bg-background" />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-40 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left Glow */}
      <div className="absolute -left-32 top-20 -z-30 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute -right-40 top-40 -z-30 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[180px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -z-30 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      {/* Radial Overlay */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_100%)]" />

      {/* Noise */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}