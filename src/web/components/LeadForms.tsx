import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState = "idle" | "submitting" | "success" | "error";

const craneTypes = [
  "All-Terrain Crane", "Crawler Crane", "Hydraulic Truck Crane",
  "Rough Terrain Crane", "Carry Deck Crane", "Boom Truck",
  "Telescopic Crawler", "Tower Crane", "Other",
];

const timeframes = [
  "As soon as possible", "Next 30 days", "Next 60 days",
  "Next 90 days", "6+ months", "Just exploring options",
];

const budgetRanges = [
  "Under $50,000", "$50,000 – $150,000", "$150,000 – $500,000",
  "$500,000 – $1M", "$1M – $5M", "$5M+", "Flexible / TBD",
];

function SuccessMessage({ type }: { type: "seller" | "buyer" | "contact" }) {
  const msgs = {
    seller: { title: "Submission Received!", body: "Bryan Carr and our crane team will review your consignment details and be in touch within 24 hours." },
    buyer: { title: "Registration Received!", body: "We've noted your buyer interest. Our team will reach out with relevant upcoming auction events." },
    contact: { title: "Message Sent!", body: "Thank you for reaching out. Our team will respond to your enquiry shortly." },
  };
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-[#c9a227]/20 flex items-center justify-center mb-5">
        <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-black text-white mb-3">{msgs[type].title}</h3>
      <p className="text-gray-400 max-w-sm">{msgs[type].body}</p>
    </div>
  );
}

function SellerForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    fullName: "", company: "", email: "", phone: "",
    craneType: "", craneMake: "", craneModel: "", craneYear: "",
    numberOfUnits: "", preferredTimeframe: "", message: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "seller" }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") return <SuccessMessage type="seller" />;

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Full Name *</Label>
          <Input required value={form.fullName} onChange={set("fullName")} placeholder="John Smith" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227] focus:ring-[#c9a227]" />
        </div>
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Company</Label>
          <Input value={form.company} onChange={set("company")} placeholder="Smith Crane Co." className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
        </div>
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Email *</Label>
          <Input required type="email" value={form.email} onChange={set("email")} placeholder="john@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
        </div>
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Phone</Label>
          <Input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 555 000 0000" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
        </div>
      </div>

      <div className="border-t border-white/10 pt-5">
        <h4 className="text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-4">Crane Details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Crane Type *</Label>
            <select required value={form.craneType} onChange={set("craneType")} className="w-full h-10 rounded-md border border-white/20 bg-white/10 text-white px-3 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]">
              <option value="" className="bg-[#1a1f2e]">Select type...</option>
              {craneTypes.map((t) => <option key={t} value={t} className="bg-[#1a1f2e]">{t}</option>)}
            </select>
          </div>
          <div>
            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Make / Manufacturer</Label>
            <Input value={form.craneMake} onChange={set("craneMake")} placeholder="e.g. Grove, Liebherr, Manitowoc" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
          </div>
          <div>
            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Model</Label>
            <Input value={form.craneModel} onChange={set("craneModel")} placeholder="e.g. GMK5200-1" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
          </div>
          <div>
            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Year</Label>
            <Input value={form.craneYear} onChange={set("craneYear")} placeholder="e.g. 2018" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
          </div>
          <div>
            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Number of Units</Label>
            <Input value={form.numberOfUnits} onChange={set("numberOfUnits")} placeholder="e.g. 1, 3, Fleet of 12" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
          </div>
          <div>
            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Preferred Timeframe</Label>
            <select value={form.preferredTimeframe} onChange={set("preferredTimeframe")} className="w-full h-10 rounded-md border border-white/20 bg-white/10 text-white px-3 text-sm focus:outline-none focus:border-[#c9a227]">
              <option value="" className="bg-[#1a1f2e]">Select timeframe...</option>
              {timeframes.map((t) => <option key={t} value={t} className="bg-[#1a1f2e]">{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Additional Notes</Label>
        <Textarea value={form.message} onChange={set("message")} placeholder="Condition, location, hours, attachments, any other details..." className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227] min-h-[90px] resize-none" />
      </div>

      {state === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or call 601.508.6207.</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 bg-[#c9a227] text-[#1a1f2e] font-black text-sm uppercase tracking-widest rounded hover:bg-[#b8911f] transition-colors disabled:opacity-60"
      >
        {state === "submitting" ? "Submitting..." : "Get a Free Valuation →"}
      </button>
    </form>
  );
}

function BuyerForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    fullName: "", company: "", email: "", phone: "",
    equipmentInterest: [] as string[], budgetRange: "", message: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleEquipment = (val: string) => {
    setForm((f) => ({
      ...f,
      equipmentInterest: f.equipmentInterest.includes(val)
        ? f.equipmentInterest.filter((v) => v !== val)
        : [...f.equipmentInterest, val],
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, equipmentInterest: form.equipmentInterest.join(", "), type: "buyer" }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") return <SuccessMessage type="buyer" />;

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Full Name *</Label>
          <Input required value={form.fullName} onChange={set("fullName")} placeholder="Jane Williams" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
        </div>
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Company</Label>
          <Input value={form.company} onChange={set("company")} placeholder="Williams Construction LLC" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
        </div>
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Email *</Label>
          <Input required type="email" value={form.email} onChange={set("email")} placeholder="jane@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
        </div>
        <div>
          <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Phone</Label>
          <Input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 555 000 0000" className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227]" />
        </div>
      </div>

      <div className="border-t border-white/10 pt-5">
        <h4 className="text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-4">Equipment Interests</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {craneTypes.map((t) => (
            <label key={t} className={`flex items-center gap-2 p-2.5 rounded border cursor-pointer text-xs font-medium transition-all ${form.equipmentInterest.includes(t) ? "border-[#c9a227] bg-[#c9a227]/10 text-[#c9a227]" : "border-white/15 text-gray-400 hover:border-white/30"}`}>
              <input
                type="checkbox"
                className="sr-only"
                checked={form.equipmentInterest.includes(t)}
                onChange={() => toggleEquipment(t)}
              />
              <span className={`w-3 h-3 rounded-sm border flex items-center justify-center flex-shrink-0 ${form.equipmentInterest.includes(t) ? "border-[#c9a227] bg-[#c9a227]" : "border-gray-500"}`}>
                {form.equipmentInterest.includes(t) && (
                  <svg className="w-2 h-2 text-[#1a1f2e]" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                )}
              </span>
              {t}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Budget Range</Label>
        <select value={form.budgetRange} onChange={set("budgetRange")} className="w-full h-10 rounded-md border border-white/20 bg-white/10 text-white px-3 text-sm focus:outline-none focus:border-[#c9a227]">
          <option value="" className="bg-[#1a1f2e]">Select budget range...</option>
          {budgetRanges.map((b) => <option key={b} value={b} className="bg-[#1a1f2e]">{b}</option>)}
        </select>
      </div>

      <div>
        <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Additional Requirements</Label>
        <Textarea value={form.message} onChange={set("message")} placeholder="Specific capacity, reach, condition requirements, location preferences..." className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a227] min-h-[90px] resize-none" />
      </div>

      {state === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or call 601.508.6207.</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 border-2 border-[#c9a227] text-[#c9a227] font-black text-sm uppercase tracking-widest rounded hover:bg-[#c9a227] hover:text-[#1a1f2e] transition-colors disabled:opacity-60"
      >
        {state === "submitting" ? "Submitting..." : "Register My Interest →"}
      </button>
    </form>
  );
}

export default function LeadForms() {
  const [active, setActive] = useState<"seller" | "buyer">("seller");

  return (
    <section id="lead-forms" className="bg-[#1a1f2e] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">Get Started Today</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Connect With Our Team
          </h2>
          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            Submit your details below and Bryan Carr will personally follow up within 24 hours.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex rounded-lg overflow-hidden border border-white/15 mb-8 max-w-sm mx-auto">
          <button
            data-tab="seller"
            onClick={() => setActive("seller")}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${active === "seller" ? "bg-[#c9a227] text-[#1a1f2e]" : "text-gray-400 hover:text-white"}`}
          >
            Sell a Crane
          </button>
          <button
            data-tab="buyer"
            onClick={() => setActive("buyer")}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${active === "buyer" ? "bg-[#c9a227] text-[#1a1f2e]" : "text-gray-400 hover:text-white"}`}
          >
            Buy Equipment
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10">
          {active === "seller" ? <SellerForm /> : <BuyerForm />}
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          Prefer to talk? Call Bryan directly at{" "}
          <a href="tel:+16015086207" className="text-[#c9a227] font-semibold">601.508.6207</a>
          {" "}(Phone & WhatsApp)
        </p>
      </div>
    </section>
  );
}
