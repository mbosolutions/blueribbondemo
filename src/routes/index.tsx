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
  Phone,
  Clock,
  ArrowRight,
  User,
  MessageSquareMore,
  Menu,
  X,
} from "lucide-react";
import lakeImg from "@/assets/lake.jpg";
import logoImg from "@/assets/blue-ribbon-logo.png";
import logoMobileImg from "@/assets/blue-ribbon-logo-mobile.png";
import { Reveal, useParallax } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAVY = "#0a1730";
const NAVY_LIGHT = "#11264a";
const NAVY_LIGHTER = "#163057";
const BLUE = "#4a7bff";
const BLUE_BRIGHT = "#6b95ff";
const BLUE_HOVER = "#3a6bef";
const BORDER = "rgba(120,160,255,0.18)";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  scrollToId("contact");
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
  const [form, setForm] = useState({ name: "", phone: "", email: "", pest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const parallaxRef = useParallax(0.18) as React.RefObject<HTMLImageElement>;

  const navItems = [
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

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
        fontFamily: '"Helvetica Neue", Helvetica, Arial, "Liberation Sans", sans-serif',
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ backgroundColor: "rgba(10,23,48,0.85)", borderColor: BORDER }}
      >
        {/* Mobile header */}
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:hidden">
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Contact form"
              onClick={() => scrollToId("contact")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/10"
            >
              <User className="h-6 w-6" strokeWidth={1.75} />
            </button>
            <a
              href="tel:+13153572847"
              aria-label="Call us"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/10"
            >
              <Phone className="h-6 w-6" strokeWidth={1.75} />
            </a>
          </div>
          <a
            href="#"
            aria-label="Blue Ribbon Pest Control"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img src={logoMobileImg} alt="Blue Ribbon Pest Control" className="h-9 w-auto" />

          </a>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Message us"
              onClick={() => scrollToId("contact")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/10"
            >
              <MessageSquareMore className="h-6 w-6" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/10"
            >
              {menuOpen ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        {/* Desktop header */}
        <div className="mx-auto hidden max-w-6xl items-center justify-between px-5 py-3 md:flex">
          <a href="#" className="flex items-center gap-3">
            <img src={logoImg} alt="Blue Ribbon Pest Control" className="h-12 w-auto" />
            <span className="text-base font-bold tracking-tight">Blue Ribbon Pest Control</span>
          </a>
          <nav className="flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => scrollToId(n.id)}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {n.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="ml-2 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03]"
              style={{
                background: `linear-gradient(135deg, ${BLUE_BRIGHT}, ${BLUE_HOVER})`,
                boxShadow: `0 8px 24px -8px ${BLUE}`,
              }}
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div
            className="border-t md:hidden"
            style={{ borderColor: BORDER, backgroundColor: "rgba(10,23,48,0.98)" }}
          >
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => scrollToId(n.id), 50);
                  }}
                  className="flex items-center justify-between rounded-md px-3 py-4 text-base font-medium text-white/90 transition-colors hover:bg-white/10"
                >
                  {n.label}
                  <ArrowRight className="h-4 w-4 opacity-60" />
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>



      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img ref={parallaxRef} src={lakeImg} alt="Adirondack lake at Eagle Bay, NY" className="h-[115%] w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(10,23,48,0.65) 0%, rgba(10,23,48,0.78) 55%, ${NAVY} 100%)`,
            }}
          />
          {/* Glow accents */}
          <div
            className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: BLUE }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: BLUE_BRIGHT }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-5 sm:py-32 md:py-40">
          <div
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-sm"
            style={{ borderColor: BORDER, backgroundColor: "rgba(74,123,255,0.12)" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: BLUE_BRIGHT }} />
            Serving the Adirondacks Since Day One
          </div>
          <div className="relative">
            <div
              className="pointer-events-none absolute -left-10 -top-6 h-40 w-40 rounded-full opacity-40 blur-3xl sm:-left-16 sm:-top-10 sm:h-72 sm:w-72"
              style={{ backgroundColor: BLUE }}
            />
            <div
              className="pointer-events-none absolute -bottom-8 -right-6 h-40 w-40 rounded-full opacity-30 blur-3xl sm:-bottom-12 sm:-right-10 sm:h-72 sm:w-72"
              style={{ backgroundColor: BLUE_BRIGHT }}
            />
            <h1
              className="relative bg-clip-text text-[2.25rem] font-bold leading-[1.05] tracking-tight text-transparent [-webkit-text-fill-color:transparent] [filter:drop-shadow(0_4px_6px_rgba(0,0,0,0.55))_drop-shadow(0_2px_20px_rgba(74,123,255,0.35))] sm:text-6xl md:text-7xl"
              style={{
                backgroundImage: `linear-gradient(180deg, #ffffff 0%, #e8efff 45%, ${BLUE_BRIGHT} 100%)`,
              }}
            >
              Eagle Bay's Trusted{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${BLUE_BRIGHT} 0%, #a8c0ff 50%, #ffffff 100%)`,
                }}
              >
                Pest Control
              </span>{" "}
              Experts.
            </h1>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:text-xl">
            Fast, courteous, and dedicated to keeping your home pest-free. Proudly protecting families across the Adirondack region.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-white shadow-2xl transition-all hover:scale-[1.03] sm:px-8 sm:py-4 sm:text-base"
              style={{
                background: `linear-gradient(135deg, ${BLUE_BRIGHT}, ${BLUE_HOVER})`,
                boxShadow: `0 12px 40px -10px ${BLUE}`,
              }}
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+13153572847"
              className="inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              <Phone className="h-4 w-4" /> (315) 357-2847
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3">
            {[
              { label: "5.0 Star Rating", icon: Star },
              { label: "Same-Day Service", icon: Clock },
              { label: "Locally Owned", icon: MapPin },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" style={{ color: BLUE_BRIGHT }} fill={Icon === Star ? BLUE_BRIGHT : "none"} />
                {label}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* Services */}
      <section id="services" className="relative border-t scroll-mt-20" style={{ borderColor: BORDER }}>
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: BLUE }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-5 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_BRIGHT }}>
                What We Do
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Our Services</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
                From buzzing nests to creeping rodents — we handle it all with care and precision.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div
                  className="group relative h-full overflow-hidden rounded-xl border p-7 transition-all hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(160deg, ${NAVY_LIGHT}, ${NAVY})`,
                    borderColor: BORDER,
                  }}
                >
                  <div
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-30"
                    style={{ backgroundColor: BLUE }}
                  />
                  <div
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_HOVER})`,
                      boxShadow: `0 8px 20px -8px ${BLUE}`,
                    }}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold">{title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-t scroll-mt-20" style={{ borderColor: BORDER }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:gap-14 sm:px-5 sm:py-24 md:grid-cols-2 md:items-center">
          <Reveal direction="right">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_BRIGHT }}>
                About Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Why Blue Ribbon?</h2>
              <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                Locally owned and operated in Eagle Bay, NY. We pride ourselves on fast response times, fair prices, and treating every home like our own. Our customers trust us because we show up on time, get the job done right, and never cut corners.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={logoImg} alt="Blue Ribbon Pest Control logo" className="h-20 w-auto" />
                <div className="text-sm text-white/70">
                  <p className="font-semibold text-white">A name homeowners trust.</p>
                  <p>Built on craftsmanship and care.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {[
              { icon: Award, label: "Licensed & Insured", desc: "Fully certified for your peace of mind." },
              { icon: MapPin, label: "Locally Owned", desc: "Your neighbors in the Adirondacks." },
              { icon: Leaf, label: "Eco-Friendly Options", desc: "Safe treatments for kids and pets." },
            ].map(({ icon: Icon, label, desc }, i) => (
              <Reveal key={label} direction="left" delay={i * 100}>
                <div
                  className="flex items-start gap-5 rounded-xl border p-5"
                  style={{ backgroundColor: NAVY_LIGHT, borderColor: BORDER }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_HOVER})`,
                      boxShadow: `0 8px 20px -8px ${BLUE}`,
                    }}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="mt-1 text-sm text-white/70">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative border-t scroll-mt-20" style={{ borderColor: BORDER }}>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-5 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_BRIGHT }}>
                Testimonials
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">What Our Customers Say</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} direction={i % 2 === 0 ? "right" : "left"}>
                <div
                  className="relative h-full overflow-hidden rounded-xl border p-8"
                  style={{
                    background: `linear-gradient(160deg, ${NAVY_LIGHT}, ${NAVY})`,
                    borderColor: BORDER,
                  }}
                >
                  <Quote className="h-10 w-10" style={{ color: BLUE_BRIGHT }} strokeWidth={1.5} />
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-5 w-5" fill={BLUE_BRIGHT} stroke={BLUE_BRIGHT} />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">"{t.text}"</p>
                  <p className="mt-6 text-sm font-semibold" style={{ color: BLUE_BRIGHT }}>— {t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t scroll-mt-20"
        style={{ borderColor: BORDER }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: BLUE }}
          />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 py-16 sm:px-5 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_BRIGHT }}>
                Get in Touch
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Let's Get You Taken Care Of.</h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/75">
                Tell us about your pest problem and we'll get back to you fast.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="mt-12 space-y-5 rounded-2xl border p-7 backdrop-blur-sm sm:p-9"
            style={{ borderColor: BORDER, backgroundColor: "rgba(17,38,74,0.6)" }}
          >
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
                  className="w-full rounded-md border px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-[color:var(--blue)]"
                  style={{ borderColor: BORDER, backgroundColor: NAVY_LIGHTER, ["--blue" as any]: BLUE_BRIGHT }}
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
                className="w-full rounded-md border px-4 py-3 text-white outline-none"
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
                  <option key={v} value={v} style={{ color: "#000" }}>{l}</option>
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
                className="w-full rounded-md border px-4 py-3 text-white outline-none placeholder:text-white/40"
                style={{ borderColor: BORDER, backgroundColor: NAVY_LIGHTER }}
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-[1.01]"
              style={{
                background: `linear-gradient(135deg, ${BLUE_BRIGHT}, ${BLUE_HOVER})`,
                boxShadow: `0 12px 30px -10px ${BLUE}`,
              }}
            >
              Send My Request <ArrowRight className="h-4 w-4" />
            </button>
            {submitted && (
              <p className="text-center text-sm" style={{ color: BLUE_BRIGHT }}>
                Thanks — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: BORDER, backgroundColor: NAVY }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-5 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <img src={logoImg} alt="Blue Ribbon Pest Control" className="h-14 w-auto" />
            <div className="space-y-1.5 text-sm text-white/75">
              <p className="text-base font-bold text-white">Blue Ribbon Pest Control Inc</p>
              <p>123 Forest Ln, Eagle Bay, NY 13331</p>
              <p>(315) 357-2847</p>
              <p>Open daily until 6 PM</p>
              <p className="pt-3 text-xs text-white/50">© 2026 Blue Ribbon Pest Control Inc</p>
            </div>
          </div>
          <div className="text-sm text-white/70 md:text-right">
            Proudly serving the Adirondack region.
          </div>
        </div>
      </footer>
    </div>
  );
}
