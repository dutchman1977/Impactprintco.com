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

const navLinks = ["Services", "Products", "Work", "About", "Contact"];

const services = [
  {
    title: "Apparel Printing",
    description:
      "Premium t-shirts, hoodies, and uniforms with crisp color, durable inks, and consistent sizing across every run.",
    icon: Shirt,
  },
  {
    title: "Signs & Banners",
    description:
      "Indoor and outdoor signage built to be seen—from grand openings to directional event graphics.",
    icon: Megaphone,
  },
  {
    title: "Vinyl Lettering",
    description:
      "Storefront, vehicle, and window vinyl cut and installed cleanly for a polished branded presence.",
    icon: Store,
  },
  {
    title: "Business Cards & Flyers",
    description:
      "Printed marketing essentials with sharp typography, premium stock, and color-managed output.",
    icon: Ticket,
  },
  {
    title: "Event Graphics",
    description:
      "From church conferences to tournaments, we deliver cohesive banners, signage, and collateral fast.",
    icon: WandSparkles,
  },
  {
    title: "Custom Branding Materials",
    description:
      "Branded print systems for local teams, schools, and startups that need consistency across every touchpoint.",
    icon: Palette,
  },
];

const whyImpact = [
  {
    title: "Fast Turnarounds",
    copy: "Real deadlines are respected. Rush-friendly scheduling without sacrificing detail.",
    icon: Clock3,
  },
  {
    title: "Local & Reliable",
    copy: "A nearby print partner who answers quickly, communicates clearly, and shows up.",
    icon: BadgeCheck,
  },
  {
    title: "Design Support",
    copy: "Need help refining artwork? We adjust layouts, prep files, and keep your brand clean.",
    icon: Brush,
  },
  {
    title: "Sharp Output",
    copy: "Color-accurate production, premium substrates, and clean finishing across products.",
    icon: Printer,
  },
  {
    title: "Built for Growth",
    copy: "From one event to ongoing monthly campaigns, we scale with your business.",
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

const workPreview = [
  "Storefront Signage Refresh",
  "Event Branding Package",
  "Team & Church Shirt Run",
  "Vehicle + Window Vinyl Graphics",
  "Business Launch Promo Print Set",
];

const testimonials = [
  {
    quote:
      "Impact Print Co. helped us rebrand our storefront and window graphics in one week. Everything looked clean and intentional.",
    author: "Maya R., Boutique Owner",
  },
  {
    quote:
      "We needed shirts, banners, and directional signage for a school fundraiser. They handled every piece and kept us on schedule.",
    author: "James T., PTA Coordinator",
  },
  {
    quote:
      "Their team fixed our artwork, suggested better materials, and delivered print that actually matched our brand colors.",
    author: "Alyssa V., Startup Founder",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ImpactPrintHomepage() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#f7f7f5] text-[#111318] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="group inline-flex items-center gap-3" aria-label="Impact Print Co. home">
            <div className="h-9 w-9 rounded-sm bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-yellow-300" />
            <div className="leading-tight">
              <p className="font-serif text-lg tracking-tight text-black">Impact Print Co.</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-black/55">Print • Signs • Apparel</p>
            </div>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-black/70 transition hover:text-black"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-black"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(0,195,255,0.12),transparent_35%),radial-gradient(circle_at_75%_30%,rgba(255,0,147,0.12),transparent_35%),radial-gradient(circle_at_90%_40%,rgba(255,211,0,0.12),transparent_25%)]" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                Premium Local Print Partner
              </p>
              <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl">
                Make your brand
                <span className="block">impossible to ignore.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-black/70 lg:text-lg">
                Impact Print Co. helps local businesses, schools, churches, and teams stand out with custom
                apparel, signage, and promotional print—crafted fast, produced sharp, and built to be remembered.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/85"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-black"
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
              <div className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.35)]">
                <div className="mb-6 rounded-2xl border border-dashed border-black/15 bg-[#f3f4f6] p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Logo Placeholder</p>
                  <p className="mt-2 font-serif text-2xl text-black">Impact Print Co.</p>
                  <p className="text-sm text-black/50">Replace with official logo asset</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Photo Mockup Placeholder", "Apparel Preview", "Window Vinyl Preview", "Banner Preview"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-black/10 bg-[#fbfbfb] p-4 text-xs text-black/60"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                <div className="pointer-events-none absolute -right-4 top-10 h-14 w-14 rotate-12 rounded-md bg-cyan-400/80" />
                <div className="pointer-events-none absolute -left-3 bottom-16 h-10 w-10 -rotate-12 rounded-md bg-fuchsia-500/80" />
                <div className="pointer-events-none absolute -bottom-4 right-16 h-8 w-24 -rotate-6 rounded-md bg-yellow-300/90" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* services */}
        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Services</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-black lg:text-5xl">
                Print capabilities built for real-world visibility.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-black/60">
              Every product is produced with color care, material expertise, and practical recommendations for where
              and how it will be used.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-xl"
                >
                  <Icon className="h-5 w-5 text-black/70" />
                  <h3 className="mt-5 font-serif text-2xl tracking-tight text-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="about" className="border-y border-black/10 bg-white/70 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Why Impact</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-black lg:text-5xl">
                Trusted by teams that need it done right the first time.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {whyImpact.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-black/10 bg-white p-5">
                    <Icon className="h-5 w-5 text-black/80" />
                    <h3 className="mt-4 text-base font-semibold text-black">{item.title}</h3>
                    <p className="mt-2 text-sm text-black/65">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Products</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-black lg:text-5xl">What we produce daily.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((item, idx) => (
              <div
                key={item}
                className={`rounded-2xl border border-black/10 p-6 text-center text-sm font-medium ${
                  idx % 4 === 0
                    ? "bg-cyan-400/15"
                    : idx % 4 === 1
                      ? "bg-fuchsia-500/15"
                      : idx % 4 === 2
                        ? "bg-yellow-300/25"
                        : "bg-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* process */}
        <section className="bg-[#111318] py-20 text-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Process</p>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight lg:text-5xl">
              From first message to finished print—clear, fast, and organized.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/60">STEP {index + 1}</p>
                  <p className="mt-3 text-base font-medium text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Portfolio Preview</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-black lg:text-5xl">Recent project types.</h2>
            </div>
            <p className="max-w-lg text-sm text-black/60">Image blocks below are placeholders for real project photography and mockups.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workPreview.map((project) => (
              <article key={project} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="flex h-44 items-center justify-center border-b border-black/10 bg-[#f1f2f4] text-xs uppercase tracking-[0.16em] text-black/45">
                  Project Image Placeholder
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-black">{project}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* testimonials */}
        <section className="border-y border-black/10 bg-white/70 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Testimonials</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-black lg:text-5xl">
              What local clients say after launch day.
            </h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="rounded-2xl border border-black/10 bg-white p-6">
                  <p className="text-sm leading-relaxed text-black/75">“{testimonial.quote}”</p>
                  <cite className="mt-5 block text-sm font-semibold not-italic text-black">{testimonial.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* final CTA */}
        <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-14 text-white lg:px-14">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/3 translate-x-1/3 rounded-full bg-cyan-400/50 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 translate-y-1/3 -translate-x-1/3 rounded-full bg-fuchsia-500/45 blur-2xl" />
            <div className="absolute right-24 top-10 h-12 w-12 rotate-12 rounded bg-yellow-300/70" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl tracking-tight lg:text-5xl">Let’s make your brand impossible to ignore.</h2>
                <p className="mt-4 text-white/75">
                  Tell us what you need, when you need it, and where it will be seen. We’ll guide materials,
                  production, and finishing so your print works hard in the real world.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Get a Quote
                </a>
                <a
                  href="tel:+10000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
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
      <footer className="border-t border-black/10 bg-white px-6 py-14 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-sm bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-yellow-300" />
              <div>
                <p className="font-serif text-xl text-black">Impact Print Co.</p>
                <p className="text-xs uppercase tracking-[0.22em] text-black/50">Print • Signs • Apparel</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-black/65">
              Bold print production for local brands, teams, schools, and events—designed to look sharp in person,
              not just on screen.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-black/55">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              {navLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-black/55">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
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
