import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "submitting" | "success" | "error";

const craneTypes = [
  "All-Terrain Crane",
  "Crawler Crane",
  "Hydraulic Truck Crane",
  "Rough Terrain Crane",
  "Carry Deck Crane",
  "Boom Truck",
  "Telescopic Crawler",
  "Tower Crane",
  "Other",
];

const timeframes = [
  "As soon as possible",
  "Next 30 days",
  "Next 60 days",
  "Next 90 days",
  "6+ months",
  "Just exploring options",
];

const budgetRanges = [
  "Texas",
  "South Carolina",
  "Florida",
  "Gulf South",
  "Minnesota",
  "Georgia",
  "Nationwide",
];

function SuccessMessage({ type }: { type: "seller" | "buyer" }) {
  const content = {
    seller: {
      title: "Submission Received!",
      body: "Our team will review your equipment details and follow up shortly.",
    },
    buyer: {
      title: "Inquiry Received!",
      body: "We have your buyer request and will reach out with matching opportunities.",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a227]/20">
        <svg className="h-8 w-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-black text-white">{content[type].title}</h3>
      <p className="mt-3 max-w-sm text-slate-300">{content[type].body}</p>
    </div>
  );
}

function SellerForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    craneType: "",
    craneMake: "",
    craneModel: "",
    craneYear: "",
    numberOfUnits: "",
    preferredTimeframe: "",
    message: "",
  });

  const set =
    (key: string) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>,
    ) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setState("submitting");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "seller" }),
      });
      setState(response.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return <SuccessMessage type="seller" />;
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            First Name *
          </Label>
          <Input
            required
            value={form.fullName}
            onChange={set("fullName")}
            placeholder="John"
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227] focus:ring-[#c9a227]"
          />
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Last Name / Company
          </Label>
          <Input
            value={form.company}
            onChange={set("company")}
            placeholder="Smith Crane Co."
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
          />
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Email *
          </Label>
          <Input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
          />
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Phone
          </Label>
          <Input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="Your phone"
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
          />
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Equipment Type *
          </Label>
          <select
            required
            value={form.craneType}
            onChange={set("craneType")}
            className="h-9 w-full rounded-md border border-white/20 bg-white/10 px-3 text-sm text-white focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          >
            <option value="" className="bg-[#101827]">
              Select Equipment Type
            </option>
            {craneTypes.map((type) => (
              <option key={type} value={type} className="bg-[#101827]">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Preferred Contact Method
          </Label>
          <select
            value={form.preferredTimeframe}
            onChange={set("preferredTimeframe")}
            className="h-9 w-full rounded-md border border-white/20 bg-white/10 px-3 text-sm text-white focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          >
            <option value="" className="bg-[#101827]">
              Select Preferred Method
            </option>
            {timeframes.map((timeframe) => (
              <option key={timeframe} value={timeframe} className="bg-[#101827]">
                {timeframe}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
          Message
        </Label>
        <Textarea
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us about your equipment, timing, and goals..."
          className="min-h-[72px] resize-none border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
        />
      </div>

      {state === "error" ? (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or call 601.508.6207.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded bg-[#c9a227] py-3 text-sm font-black uppercase text-[#101827] transition hover:bg-[#b8911f] disabled:opacity-60"
      >
        {state === "submitting" ? "Submitting..." : "Get In Touch"}
      </button>
    </form>
  );
}

function BuyerForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    budgetRange: "",
    message: "",
    equipmentInterest: [] as string[],
  });

  const set =
    (key: string) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>,
    ) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setState("submitting");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          equipmentInterest: form.equipmentInterest.join(", "),
          type: "buyer",
        }),
      });
      setState(response.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return <SuccessMessage type="buyer" />;
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            First Name *
          </Label>
          <Input
            required
            value={form.fullName}
            onChange={set("fullName")}
            placeholder="Jane"
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
          />
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Last Name / Company
          </Label>
          <Input
            value={form.company}
            onChange={set("company")}
            placeholder="Your company"
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
          />
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Email *
          </Label>
          <Input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
          />
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Your Role
          </Label>
          <Input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="Fleet buyer, contractor, dealer..."
            className="h-9 border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Preferred Location
          </Label>
          <select
            value={form.budgetRange}
            onChange={set("budgetRange")}
            className="h-9 w-full rounded-md border border-white/20 bg-white/10 px-3 text-sm text-white focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          >
            <option value="" className="bg-[#101827]">
              Select Location
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-[#101827]">
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
            Equipment Interest
          </Label>
          <select
            value={form.equipmentInterest[0] ?? ""}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                equipmentInterest: event.target.value ? [event.target.value] : [],
              }))
            }
            className="h-9 w-full rounded-md border border-white/20 bg-white/10 px-3 text-sm text-white focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          >
            <option value="" className="bg-[#101827]">
              Select Equipment
            </option>
            {craneTypes.map((type) => (
              <option key={type} value={type} className="bg-[#101827]">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label className="mb-1 block text-xs font-semibold uppercase text-gray-300">
          Message
        </Label>
        <Textarea
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us what equipment you need and how we can help..."
          className="min-h-[72px] resize-none border-white/20 bg-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
        />
      </div>

      {state === "error" ? (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or call 601.508.6207.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded bg-[#c9a227] py-3 text-sm font-black uppercase text-[#101827] transition hover:bg-[#b8911f] disabled:opacity-60"
      >
        {state === "submitting" ? "Submitting..." : "Get In Touch"}
      </button>
    </form>
  );
}

export default function LeadForms() {
  const [active, setActive] = useState<"seller" | "buyer">("buyer");

  return (
    <section id="connect" className="bg-[#101827] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-sm font-bold uppercase text-[#c9a227]">
              Connect With Us
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Speak With Marketplace Specialists
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Connect with our team to discuss crane inventory, equipment
              listings, auctions, or marketplace opportunities.
            </p>

            <div className="mt-8 space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101827] text-[#c9a227]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">
                    Call us
                  </div>
                  <a
                    href="tel:+16015086207"
                    className="mt-1 block text-lg font-black text-white hover:text-[#c9a227]"
                  >
                    601.508.6207
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101827] text-[#c9a227]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase text-slate-400">
                    Email
                  </div>
                  <a
                    href="mailto:bryan.c@jeffmartinauctioneers.com"
                    className="mt-1 block truncate text-lg font-black text-white hover:text-[#c9a227]"
                  >
                    bryan.c@jeffmartinauctioneers.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101827] text-[#c9a227]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">
                    Coverage
                  </div>
                  <div className="mt-1 text-base font-bold text-white">
                    Nationwide crane, dealer, and commercial inventory support
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[linear-gradient(180deg,#101827_0%,#172234_100%)] p-5 text-white shadow-[0_22px_60px_rgba(15,23,37,0.2)] lg:p-6">
            <div className="mx-auto mb-5 flex max-w-sm rounded-md border border-white/15 p-1">
              <button
                data-tab="buyer"
                onClick={() => setActive("buyer")}
                className={`flex-1 rounded py-2.5 text-sm font-black uppercase transition-colors ${
                  active === "buyer"
                    ? "bg-white text-[#101827]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                I&apos;m a Buyer
              </button>
              <button
                data-tab="seller"
                onClick={() => setActive("seller")}
                className={`flex-1 rounded py-2.5 text-sm font-black uppercase transition-colors ${
                  active === "seller"
                    ? "bg-[#c9a227] text-[#101827]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                I&apos;m a Seller
              </button>
            </div>

            {active === "seller" ? <SellerForm /> : <BuyerForm />}
          </div>
        </div>
      </div>
    </section>
  );
}
