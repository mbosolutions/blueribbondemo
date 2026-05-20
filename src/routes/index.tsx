import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bug,
  MousePointer,
  Shield,
  SprayCan,
  Trees,
  Award,
  Leaf,
  MapPin,
  Star,
  Quote,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAVY = "#0b1a33";
const NAVY_LIGHT = "#11264a";
const NAVY_LIGHTER = "#163057";
const BLUE = "#2f80ed";
const BLUE_HOVER = "#1f6fdc";
const BORDER = "rgba(255,255,255,0.12)";

const grainBg = {
  backgroundColor: NAVY,
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
};

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

const services = [
  { icon: SprayCan, title: "Hornet & Wasp Removal", desc: "Safe, fast removal of nests and colonies." },
  { icon: Bug, title: "Ant Control", desc: "Eliminate infestations at the source." },
  { icon: MousePointer, title: "Rodent Control", desc: "Humane and effective rodent solutions." },
  { icon: Trees, title: "Tick & Mosquito Treatment", desc: "Protect your yard and family." },
  { icon: Shield, title: "Spider Control", desc: "Keep your home spider-free year round." },
  { icon: CheckCircle2, title: "General Pest Prevention", desc: "Seasonal treatments to keep pests out for good." },
];

const testimonials = [
  {
    text: "Came quickly the same day to remove a huge hornet nest outside our house. Fast, courteous, informative, and fair prices!",
    name: "Andrew R.",
  },
  {
    text: "Excellent customer service. Dedicated to their profession.",
    name: "Jason M.",
  },
];

function Index() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", pest: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: NAVY,
        fontFamily:
          '"Helvetica Neue", Helvetica, Arial, "Liberation Sans", sans-serif',
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: NAVY, borderColor: BORDER }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-base font-bold tracking-tight sm:text-lg">
            Blue Ribbon Pest Control Inc
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white transition-colors sm:px-5"
            style={{ backgroundColor: BLUE }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE_HOVER)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BLUE)}
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={grainBg}>
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Eagle Bay's Trusted Pest Control Experts.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Fast, courteous, and dedicated to keeping your home pest-free. Serving
            the Adirondack region with reliable, professional pest control services.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-block rounded-md px-7 py-3.5 text-base font-semibold text-white transition-colors"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BLUE)}
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["5.0 Star Rating", "Same-Day Service", "Locally Owned"].map((s) => (
              <span
                key={s}
                className="rounded-full border px-4 py-1.5 text-xs font-medium text-white/85 sm:text-sm"
                style={{ borderColor: BORDER }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t" style={{ borderColor: BORDER }}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border p-6"
                style={{ backgroundColor: NAVY_LIGHT, borderColor: "rgba(47,128,237,0.35)" }}
              >
                <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t" style={{ borderColor: BORDER }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Blue Ribbon?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Locally owned and operated in Eagle Bay, NY. We pride ourselves on
              fast response times, fair prices, and treating every home like our
              own. Our customers trust us because we show up on time, get the job
              done right, and never cut corners.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:items-center">
            {[
              { icon: Award, label: "Licensed & Insured" },
              { icon: MapPin, label: "Locally Owned" },
              { icon: Leaf, label: "Eco-Friendly Options" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 md:flex-col md:gap-3 md:text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border"
                  style={{ borderColor: BLUE, backgroundColor: NAVY_LIGHT }}
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-base font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t" style={{ borderColor: BORDER }}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border p-8"
                style={{ backgroundColor: NAVY_LIGHT, borderColor: BORDER }}
              >
                <Quote className="h-8 w-8 text-white" strokeWidth={1.5} />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5" fill={BLUE} stroke={BLUE} />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-white/85">
                  "{t.text}"
                </p>
                <p className="mt-6 text-sm font-semibold text-white/70">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t"
        style={{ backgroundColor: NAVY_LIGHT, borderColor: BORDER }}
      >
        <div className="mx-auto max-w-2xl px-5 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Get You Taken Care Of.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-white/75">
            Tell us about your pest problem and we will get back to you fast.
          </p>
          <form onSubmit={onSubmit} className="mt-10 space-y-5">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "phone", label: "Phone Number", type: "tel" },
              { id: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="mb-2 block text-sm font-medium text-white/85">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  value={(form as any)[f.id]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  className="w-full rounded-md border bg-transparent px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-[color:var(--blue)]"
                  style={{
                    borderColor: BORDER,
                    backgroundColor: NAVY_LIGHTER,
                    ["--blue" as any]: BLUE,
                  }}
                />
              </div>
            ))}
            <div>
              <label htmlFor="pest" className="mb-2 block text-sm font-medium text-white/85">
                Pest Type
              </label>
              <select
                id="pest"
                required
                value={form.pest}
                onChange={(e) => setForm({ ...form, pest: e.target.value })}
                className="w-full rounded-md border bg-transparent px-4 py-3 text-white outline-none"
                style={{ borderColor: BORDER, backgroundColor: NAVY_LIGHTER }}
              >
                <option value="" style={{ color: "#000" }}>Select a pest type</option>
                {[
                  ["hornets-wasps", "Hornets / Wasps"],
                  ["ants", "Ants"],
                  ["rodents", "Rodents"],
                  ["ticks-mosquitoes", "Ticks / Mosquitoes"],
                  ["spiders", "Spiders"],
                  ["other", "Other"],
                ].map(([v, l]) => (
                  <option key={v} value={v} style={{ color: "#000" }}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="msg" className="mb-2 block text-sm font-medium text-white/85">
                Describe your issue
              </label>
              <textarea
                id="msg"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40"
                style={{ borderColor: BORDER, backgroundColor: NAVY_LIGHTER }}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md px-6 py-3.5 text-base font-semibold text-white transition-colors"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BLUE)}
            >
              Send My Request
            </button>
            {submitted && (
              <p className="text-center text-sm text-white/80">
                Thanks — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: BORDER, backgroundColor: NAVY }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1.5 text-sm text-white/75">
            <p className="text-base font-bold text-white">Blue Ribbon Pest Control Inc</p>
            <p>123 Forest Ln, Eagle Bay, NY 13331</p>
            <p>(315) 357-2847</p>
            <p>Open daily until 6 PM</p>
            <p className="pt-3 text-xs text-white/50">
              © 2026 Blue Ribbon Pest Control Inc
            </p>
          </div>
          <div className="text-sm text-white/70 md:text-right">
            Proudly serving the Adirondack region.
          </div>
        </div>
      </footer>
    </div>
  );
}
