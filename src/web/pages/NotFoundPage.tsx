import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#101827]">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page may have moved, the link may be outdated, or the URL may be
          incorrect.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded bg-[#c9a227] px-5 text-sm font-bold uppercase tracking-[0.14em] text-[#101827]"
          >
            Back to homepage
          </a>
          <a
            href="/#connect"
            className="inline-flex min-h-12 items-center justify-center rounded border border-[#101827]/20 px-5 text-sm font-bold uppercase tracking-[0.14em] text-[#101827]"
          >
            Contact our team
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
