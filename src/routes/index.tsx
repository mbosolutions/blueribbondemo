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
import heroImg from "@/assets/hero-cabin.jpg";
import technicianImg from "@/assets/technician.jpg";
import leavesImg from "@/assets/leaves-bg.jpg";
import contactLakeImg from "@/assets/contact-lake.jpg";
import logoImg from "@/assets/blue-ribbon-logo.png";
import logoMobileImg from "@/assets/blue-ribbon-logo-mobile.png";
import { Reveal, useParallax } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAVY = "#0a1730";
const NAVY_INK = "#16243f";
const BLUE = "#2f5fd6";
const BLUE_BRIGHT = "#4a7bff";
const BLUE_HOVER = "#1e4ec0";
const CREAM = "#faf7f1";

const SAND = "#efe8d8";
const BORDER_DARK = "rgba(120,160,255,0.18)";
const BORDER_LIGHT = "rgba(22,36,63,0.10)";

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
      className="min-h-screen"
      style={{
        backgroundColor: CREAM,
        color: NAVY_INK,
        fontFamily: '"Helvetica Neue", Helvetica, Arial, "Liberation Sans", sans-serif',
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md text-white"
        style={{ backgroundColor: "rgba(10,23,48,0.92)", borderColor: BORDER_DARK }}
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
            style={{ borderColor: BORDER_DARK, backgroundColor: "rgba(10,23,48,0.98)" }}
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
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            ref={parallaxRef}
            src={heroImg}
            alt="Sunlit Adirondack cabin among pine trees"
            className="h-[115%] w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,23,48,0.82) 0%, rgba(10,23,48,0.75) 35%, rgba(10,23,48,0.6) 60%, rgba(250,247,241,0.45) 85%, rgba(250,247,241,0.85) 94%, rgba(250,247,241,1) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-5 sm:py-32 md:py-40">
          <div
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Serving the Adirondacks Since Day One
          </div>
          <h1
            className="text-[2.25rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            style={{ textShadow: "0 4px 28px rgba(10,23,48,0.55), 0 2px 6px rgba(10,23,48,0.35)" }}
          >
            Eagle Bay's Trusted{" "}
            <span style={{ color: "#e8efff" }}>Pest Control</span> Experts.
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white sm:mt-6 sm:text-lg md:text-xl"
            style={{ textShadow: "0 2px 14px rgba(10,23,48,0.6)" }}
          >
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
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+13153572847"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/15 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/25 sm:px-8 sm:py-4 sm:text-base"
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
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
              >
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" fill={Icon === Star ? "#fff" : "none"} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative scroll-mt-20 overflow-hidden"
        style={{ backgroundColor: CREAM }}
      >
        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full opacity-25 blur-3xl sm:h-[28rem] sm:w-[28rem]"
          style={{ backgroundColor: BLUE_BRIGHT }}
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full opacity-20 blur-3xl sm:h-96 sm:w-96"
          style={{ backgroundColor: "#f5c97a" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] sm:mb-3 sm:text-xs" style={{ color: BLUE }}>
                What We Do
              </p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl" style={{ color: NAVY }}>
                Our Services
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:mt-4 sm:text-base" style={{ color: "rgba(22,36,63,0.7)" }}>
                From buzzing nests to creeping rodents — we handle it all with care and precision.
              </p>
            </div>
          </Reveal>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-xl sm:p-7"
                  style={{
                    borderColor: BORDER_LIGHT,
                    boxShadow: "0 4px 18px -10px rgba(22,36,63,0.18)",
                  }}
                >
                  <div
                    className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg sm:h-12 sm:w-12"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE_BRIGHT}, ${BLUE_HOVER})`,
                      boxShadow: `0 8px 20px -8px ${BLUE}`,
                    }}
                  >
                    <Icon className="h-4 w-4 text-white sm:h-6 sm:w-6" strokeWidth={2} />
                  </div>
                  <h3 className="relative mt-3 text-sm font-semibold leading-tight sm:mt-5 sm:text-lg" style={{ color: NAVY }}>{title}</h3>
                  <p className="relative mt-1.5 hidden text-sm leading-relaxed sm:mt-2 sm:block" style={{ color: "rgba(22,36,63,0.7)" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative scroll-mt-20 overflow-hidden"
        style={{ backgroundColor: SAND }}
      >
        <div
          className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full opacity-30 blur-3xl sm:h-[26rem] sm:w-[26rem]"
          style={{ backgroundColor: BLUE_BRIGHT }}
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full opacity-25 blur-3xl sm:h-96 sm:w-96"
          style={{ backgroundColor: "#a8c4a0" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:gap-14 sm:px-5 sm:py-24 md:grid-cols-2 md:items-center">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-xl md:max-w-none">
              <img
                src={technicianImg}
                alt="Pest control sprayer treating shrubs along a home exterior"
                loading="lazy"
                className="h-56 w-full object-cover sm:h-72 md:h-96"
              />
            </div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE }}>
                About Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl" style={{ color: NAVY }}>
                Why Blue Ribbon?
              </h2>
              <p className="mt-6 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(22,36,63,0.8)" }}>
                Locally owned and operated in Eagle Bay, NY. We pride ourselves on fast response times, fair prices, and treating every home like our own. Our customers trust us because we show up on time, get the job done right, and never cut corners.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-1">
                {[
                  { icon: Award, label: "Licensed & Insured", desc: "Fully certified for your peace of mind." },
                  { icon: MapPin, label: "Locally Owned", desc: "Your neighbors in the Adirondacks." },
                  { icon: Leaf, label: "Eco-Friendly Options", desc: "Safe treatments for kids and pets." },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-xl border bg-white/70 p-4 backdrop-blur-sm"
                    style={{ borderColor: BORDER_LIGHT }}
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${BLUE_BRIGHT}, ${BLUE_HOVER})`,
                        boxShadow: `0 8px 20px -8px ${BLUE}`,
                      }}
                    >
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: NAVY }}>{label}</p>
                      <p className="mt-0.5 text-sm" style={{ color: "rgba(22,36,63,0.7)" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative scroll-mt-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img src={leavesImg} alt="" aria-hidden className="h-full w-full object-cover" loading="lazy" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(250,247,241,0.92), rgba(250,247,241,0.96))" }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-5 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE }}>
                Testimonials
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl" style={{ color: NAVY }}>
                What Our Customers Say
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} direction={i % 2 === 0 ? "right" : "left"}>
                <div
                  className="relative h-full overflow-hidden rounded-xl border bg-white p-8"
                  style={{
                    borderColor: BORDER_LIGHT,
                    boxShadow: "0 10px 30px -16px rgba(22,36,63,0.25)",
                  }}
                >
                  <Quote className="h-10 w-10" style={{ color: BLUE_BRIGHT }} strokeWidth={1.5} />
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-5 w-5" fill={BLUE_BRIGHT} stroke={BLUE_BRIGHT} />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(22,36,63,0.9)" }}>"{t.text}"</p>
                  <p className="mt-6 text-sm font-semibold" style={{ color: BLUE }}>— {t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden text-white"
      >
        <div className="absolute inset-0">
          <img
            src={contactLakeImg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,23,48,0.55) 0%, rgba(10,23,48,0.7) 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 py-16 sm:px-5 sm:py-24">
          <Reveal>
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Get in Touch
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl" style={{ textShadow: "0 2px 18px rgba(10,23,48,0.5)" }}>
                Let's Get You Taken Care Of.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
                Tell us about your pest problem and we'll get back to you fast.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="mt-12 space-y-5 rounded-2xl border p-7 shadow-2xl sm:p-9"
              style={{ borderColor: BORDER_LIGHT, backgroundColor: CREAM }}
            >
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "phone", label: "Phone Number", type: "tel" },
                { id: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-2 block text-sm font-medium" style={{ color: NAVY }}>
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    value={(form as any)[f.id]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full rounded-md border px-4 py-3 outline-none transition-colors focus:border-[color:var(--blue)]"
                    style={{ borderColor: BORDER_LIGHT, backgroundColor: "#ffffff", color: NAVY, ["--blue" as any]: BLUE_BRIGHT }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="pest" className="mb-2 block text-sm font-medium" style={{ color: NAVY }}>
                  Pest Type
                </label>
                <select
                  id="pest"
                  required
                  value={form.pest}
                  onChange={(e) => setForm({ ...form, pest: e.target.value })}
                  className="w-full rounded-md border px-4 py-3 outline-none"
                  style={{ borderColor: BORDER_LIGHT, backgroundColor: "#ffffff", color: NAVY }}
                >
                  <option value="">Select a pest type</option>
                  {[
                    ["hornets-wasps", "Hornets / Wasps"],
                    ["ants", "Ants"],
                    ["rodents", "Rodents"],
                    ["ticks-mosquitoes", "Ticks / Mosquitoes"],
                    ["spiders", "Spiders"],
                    ["other", "Other"],
                  ].map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="msg" className="mb-2 block text-sm font-medium" style={{ color: NAVY }}>
                  Describe your issue
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border px-4 py-3 outline-none"
                  style={{ borderColor: BORDER_LIGHT, backgroundColor: "#ffffff", color: NAVY }}
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
                <p className="text-center text-sm" style={{ color: BLUE }}>
                  Thanks — we'll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t text-white" style={{ borderColor: BORDER_DARK, backgroundColor: NAVY }}>
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
