import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Clock3,
  Megaphone,
  Palette,
  Phone,
  Printer,
  Shirt,
  Store,
  Ticket,
  WandSparkles,
} from "lucide-react";

const navLinks = ["Services", "Products", "About", "Contact"];
const LOGO_SRC = "/impact-print-co-logo.png"; // Place provided logo file in /public with this name.

const services = [
  {
    title: "Apparel Printing",
    description:
      "Premium t-shirts, hoodies, and uniforms with rich color and durable print that keeps its edge.",
    icon: Shirt,
  },
  {
    title: "Embroidery",
    description:
      "Professional stitched logos for polos, jackets, hats, and uniforms with clean thread detail and durable finish.",
    icon: Shirt,
  },
  {
    title: "Signs & Banners",
    description:
      "Event-ready and storefront-ready signage designed for high visibility day or night.",
    icon: Megaphone,
  },
  {
    title: "Vinyl Lettering",
    description: "Clean-cut window, wall, and vehicle vinyl that makes your message impossible to miss.",
    icon: Store,
  },
  {
    title: "Business Cards & Flyers",
    description: "Sharp, tactile print materials that look professional the moment they hit someone’s hand.",
    icon: Ticket,
  },
  {
    title: "Event Graphics",
    description: "Unified signage systems for schools, churches, tournaments, launches, and community events.",
    icon: WandSparkles,
  },
  {
    title: "Custom Branding Materials",
    description: "From one item to a full rollout, we keep your brand consistent across every print surface.",
    icon: Palette,
  },
];

const whyImpact = [
  {
    title: "Fast Turnarounds",
    copy: "Rush-friendly production slots for real deadlines and last-minute campaign needs.",
    icon: Clock3,
  },
  {
    title: "Local & Reliable",
    copy: "Easy communication, quick approvals, and a team that’s close enough to move fast.",
    icon: BadgeCheck,
  },
  {
    title: "Design Help Included",
    copy: "We can refine your file, improve layout hierarchy, and prep print-ready artwork.",
    icon: Brush,
  },
  {
    title: "Crisp, Durable Output",
    copy: "Material and print methods chosen for the environment your graphics live in.",
    icon: Printer,
  },
  {
    title: "Built for Growth",
    copy: "From one event to ongoing monthly campaigns, we scale alongside your organization.",
    icon: ArrowRight,
  },
];

const products = [
  "T-Shirts",
  "Hoodies",
  "Banners",
  "Storefront Vinyl",
  "Yard Signs",
  "Decals",
  "Posters",
  "Promo Materials",
];

const processSteps = [
  "Tell us what you need",
  "We design or prep your artwork",
  "We print and produce",
  "You pick up or receive your order",
];



const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function BrandLogo({ compact = false }) {
  return (
    <div className="inline-flex items-center">
      <img
        src={LOGO_SRC}
        alt="Impact Print Co. logo"
        className={compact ? "h-12 w-auto object-contain" : "h-24 w-auto object-contain"}
        loading="eager"
      />
    </div>
  );
}

export default function ImpactPrintHomepage() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#fbfcff] text-[#10131a] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#0f1116]/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" aria-label="Impact Print Co. home">
            <BrandLogo compact />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-[#0f1116]/70 transition hover:text-[#0f1116]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#0f1116] bg-[#0f1116] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0f1116]"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_9%,rgba(0,208,255,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,0,140,0.18),transparent_38%),radial-gradient(circle_at_88%_52%,rgba(255,217,0,0.2),transparent_28%)]" />

          <div className="pointer-events-none absolute left-6 top-12 hidden font-black uppercase tracking-tight text-[#0f1116]/5 lg:block" style={{ fontSize: "11rem", lineHeight: 0.9 }}>
            IMPACT
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7 text-center"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="mb-6 inline-flex items-center rounded-full border border-[#0f1116]/10 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#0f1116]/65">
                Bold Print • Local Power
              </p>
              <div className="mb-4 inline-flex items-center rounded-full border border-[#0f1116]/15 bg-white px-4 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-[#0f1116]/70">
                Impact Print Co.
              </div>
              <h1 className="text-center font-serif text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                <span className="inline-block bg-gradient-to-r from-[#00d4ff] via-[#ff2ea6] to-[#ffd400] bg-clip-text text-transparent">IMPACT PRINT CO.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-[#0f1116]/75 lg:mx-auto lg:text-center lg:text-lg">
                Impact Print Co. blends bold creative direction with production precision—helping businesses, schools,
                churches, teams, and events show up bigger, sharper, and impossible to miss.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f1116] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f1116]/90"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0f1116]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0f1116] transition hover:-translate-y-0.5 hover:border-[#0f1116]"
                >
                  View Services
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="relative rounded-3xl border border-[#0f1116]/10 bg-white p-7 shadow-[0_28px_100px_-30px_rgba(3,10,26,0.32)]">
                <div className="mb-6 rounded-2xl border border-[#0f1116]/10 bg-[#f7f9ff] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f1116]/50">Primary Logo</p>
                  <div className="mt-4">
                    <BrandLogo />
                  </div>
                  <p className="mt-3 text-sm text-[#0f1116]/55">Official Impact Print Co. logo.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Storefront Mockup", "Apparel Mockup", "Window Vinyl Mockup", "Banner Mockup"].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-xl border border-[#0f1116]/10 p-4 text-xs font-medium text-[#0f1116]/70 ${
                        i === 0
                          ? "bg-[#00d4ff]/20"
                          : i === 1
                            ? "bg-[#ff2ea6]/18"
                            : i === 2
                              ? "bg-[#ffd400]/28"
                              : "bg-[#f9fbff]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute -right-4 top-9 h-14 w-14 rotate-12 rounded-md bg-[#00d4ff]/90" />
                <div className="pointer-events-none absolute -left-4 bottom-16 h-10 w-10 -rotate-12 rounded-md bg-[#ff2ea6]/90" />
                <div className="pointer-events-none absolute -bottom-4 right-16 h-8 w-24 -rotate-6 rounded-md bg-[#ffd400]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* services */}
        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f1116]/50">Services</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-[#0f1116] lg:text-5xl">
                Built for impact on fabric, walls, windows, and streets.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#0f1116]/65">
              We match the right material, print method, and finish to where your message needs to perform.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`group rounded-2xl border border-[#0f1116]/10 p-6 shadow-sm transition hover:shadow-xl ${
                    idx % 3 === 0
                      ? "bg-[#00d4ff]/10"
                      : idx % 3 === 1
                        ? "bg-[#ff2ea6]/10"
                        : "bg-[#ffd400]/18"
                  }`}
                >
                  <Icon className="h-5 w-5 text-[#0f1116]" />
                  <h3 className="mt-5 font-serif text-2xl tracking-tight text-[#0f1116]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#0f1116]/70">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="about" className="border-y border-[#0f1116]/10 bg-white py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f1116]/50">Why Impact</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-[#0f1116] lg:text-5xl">
                High-energy branding, handled with premium-level production discipline.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {whyImpact.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-[#0f1116]/10 bg-[#f9fbff] p-5">
                    <Icon className="h-5 w-5 text-[#0f1116]/85" />
                    <h3 className="mt-4 text-base font-bold text-[#0f1116]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#0f1116]/65">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f1116]/50">Products</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-[#0f1116] lg:text-5xl">What we produce daily.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((item, idx) => (
              <div
                key={item}
                className={`rounded-2xl border border-[#0f1116]/10 p-6 text-center text-sm font-semibold ${
                  idx % 4 === 0
                    ? "bg-[#00d4ff]/20"
                    : idx % 4 === 1
                      ? "bg-[#ff2ea6]/16"
                      : idx % 4 === 2
                        ? "bg-[#ffd400]/30"
                        : "bg-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* process */}
        <section className="bg-[#0f1116] py-20 text-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Process</p>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight lg:text-5xl">
              From first message to finished print—fast, clear, and dependable.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-cyan-300">STEP {index + 1}</p>
                  <p className="mt-3 text-base font-medium text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* final CTA */}
        <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#0f1116] px-8 py-14 text-white lg:px-14">
            <div className="absolute -left-5 -top-6 h-32 w-32 rounded-full bg-[#00d4ff]/45 blur-2xl" />
            <div className="absolute right-6 top-10 h-12 w-12 rotate-12 rounded bg-[#ff2ea6]/80" />
            <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-1/4 translate-y-1/4 rounded-full bg-[#ffd400]/35 blur-3xl" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl tracking-tight lg:text-5xl">Let’s make your brand impossible to ignore.</h2>
                <p className="mt-4 text-white/78">
                  Share your timeline, quantity, and goals. We’ll help you choose the right materials and deliver with
                  speed, clarity, and color confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0f1116] transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Get a Quote
                </a>
                <a
                  href="tel:+10000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="border-t border-[#0f1116]/10 bg-white px-6 py-14 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandLogo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#0f1116]/65">
              Bold production for local brands, teams, schools, and events—designed to look strong in person and on
              camera.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f1116]/55">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#0f1116]/70">
              {navLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#0f1116]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f1116]/55">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#0f1116]/70">
              <li>Phone: (000) 000-0000</li>
              <li>Email: hello@impactprintco.com</li>
              <li>Address: Your City, State</li>
              <li>Instagram / Facebook / LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
