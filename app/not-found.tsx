import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f0e7] px-6 text-[#1d1917]">
      <div className="w-full max-w-xl rounded-[32px] border border-[#3c342f]/15 bg-white/80 p-10 text-center shadow-[0_25px_60px_rgba(29,25,23,0.12)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
          Page Not Found
        </p>
        <h1 className="mt-4 font-[var(--font-display)] text-3xl text-[#1d1917] sm:text-4xl">
          This scene is missing.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#4c433c] sm:text-base">
          The page you are looking for is not available. Please return to the
          homepage to continue.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#4c433c] sm:text-base">
          तपाईंले खोज्नुभएको पेज भेटिएन। कृपया गृहपृष्ठमा फर्कनुहोस्।
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-[#1d1917] px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f6f0e7] transition hover:-translate-y-0.5 hover:bg-black"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
