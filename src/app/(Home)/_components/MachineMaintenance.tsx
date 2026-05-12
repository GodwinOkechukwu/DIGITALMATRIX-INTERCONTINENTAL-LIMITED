import Link from "next/link";

const MachineMaintenance = () => {
  return (
    <section
      className="w-full flex items-center justify-center px-6 py-12 sm:py-20"
      style={{ background: "#0a0a0a" }}
    >
      {/* ── Main Blue Card ── */}
      <div
        className="relative w-full max-w-7xl rounded-[2rem] overflow-hidden px-8 py-20 sm:py-28 md:py-32 flex flex-col items-center text-center shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        }}
      >
        {/* ── Dotted Pattern Overlay ── */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* ── Content Container (Z-index ensures it sits above pattern) ── */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          {/* ── Headline: High-contrast Serif ── */}
          <h2
            className="text-white font-medium leading-tight tracking-tight
              text-4xl sm:text-6xl md:text-7xl"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
            }}
          >
            Ready for the Upgrade?
          </h2>

          {/* ── Body copy ── */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-light">
            Join the elite ecosystem of professionals who demand more from their
            hardware. Precision engineering for the next generation of creators.
          </p>

          {/* ── CTA button: White Pill ── */}
          <div className="pt-4">
            <Link
              href="/user/register"
              className="
                inline-block
                bg-white text-[#1d4ed8]
                text-sm sm:text-base font-bold
                px-10 py-4 rounded-full
                transition-all duration-300 hover:scale-105 hover:bg-white/90
                shadow-lg
              "
            >
              Upgrade Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineMaintenance;
