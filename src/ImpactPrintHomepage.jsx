import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
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

const services = [
  {
    title: "Apparel Printing",
    href: "/apparel-printing/",
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



const quoteLink = "mailto:jo@impactprintco.com?subject=Impact%20Print%20Co.%20quote%20request";
const tones = ["cyan", "pink", "yellow", "white"];

function BrandLogo({ compact = false }) {
  return (
    <img
      src="/impact-print-co-logo.png"
      alt="Impact Print Co."
      className={compact ? "brand-logo brand-logo-small" : "brand-logo"}
      width={compact ? 112 : 580}
      height={compact ? 94 : 489}
    />
  );
}

export default function ImpactPrintHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <header className="site-header">
        <div className="header-inner">
          <a className="header-brand" href="#top" aria-label="Impact Print Co. home">
            <BrandLogo compact />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <a key={item} href={"#" + item.toLowerCase()}>{item}</a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-quote" href="#contact">Get a Quote <ArrowRight size={17} aria-hidden="true" /></a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <a key={item} href={"#" + item.toLowerCase()} onClick={() => setMenuOpen(false)}>{item}<ArrowRight size={18} aria-hidden="true" /></a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Local print shop <span className="eyebrow-separator">/</span> Mount Vernon, TX</p>
              <h1>MAKE IT <span>IMPOSSIBLE</span> TO MISS.</h1>
              <p className="hero-description">
                Impact Print Co. blends bold creative direction with production precision—helping businesses, schools, churches, teams, and events show up bigger, sharper, and impossible to miss.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Start your project <ArrowRight size={19} aria-hidden="true" /></a>
                <a className="button button-outline" href="#services">Explore services</a>
              </div>
              <div className="hero-proof"><span>DESIGN</span><b>+</b><span>PRINT</span><b>+</b><span>IMPACT</span></div>
            </motion.div>
            <motion.div className="hero-visual" initial={{ opacity: 0, rotate: 2, scale: 0.95 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
              <div className="hero-visual-back" aria-hidden="true" />
              <div className="hero-logo-card">
                <span className="card-stamp">BOLD PRINT. LOCAL POWER.</span>
                <BrandLogo />
                <span className="card-caption">COLOR THAT WORKS HARD.</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="ticker" aria-label="Print loud. Show up big. Leave an impression.">
          <div>PRINT LOUD <span>✦</span> SHOW UP BIG <span>✦</span> LEAVE AN IMPRESSION <span>✦</span> PRINT LOUD <span>✦</span> SHOW UP BIG</div>
        </div>

        <section id="services" className="section services-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-square" /> WHAT WE DO</p>
              <h2>PRINT THAT <span className="title-highlight cyan-highlight">PULLS ITS WEIGHT.</span></h2>
            </div>
            <p>We match the right material, print method, and finish to where your message needs to perform.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              const Card = service.href ? motion.a : motion.article;
              return (
                <Card key={service.title} href={service.href} aria-label={service.href ? "Explore apparel printing" : undefined} className={"service-card tone-" + tones[index % tones.length]} whileHover={{ y: -5, x: -3 }} transition={{ duration: 0.18 }}>
                  <div className="service-icon"><Icon size={26} strokeWidth={2.4} aria-hidden="true" /></div>
                  <span className="card-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.href && <span className="service-card-link">Explore apparel <ArrowRight size={18} aria-hidden="true" /></span>}
                </Card>
              );
            })}
          </div>
        </section>

        <section id="about" className="why-section">
          <div className="section why-inner">
            <div className="why-intro">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-square" /> WHY IMPACT</p>
              <h2>BUILT TO <span>STAND OUT.</span> MADE TO LAST.</h2>
              <p>High-energy branding, handled with premium-level production discipline.</p>
            </div>
            <div className="why-grid">
              {whyImpact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="why-card" key={item.title}>
                    <div className={"why-icon tone-" + tones[index % tones.length]}><Icon size={24} strokeWidth={2.3} aria-hidden="true" /></div>
                    <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="section products-section">
          <div className="section-heading product-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-square" /> THE GOOD STUFF</p>
              <h2>MADE TO BE <span className="title-highlight pink-highlight">SEEN.</span></h2>
            </div>
            <p>From the first shirt to the finishing sign, every piece carries your brand into the world.</p>
          </div>
          <div className="product-grid">
            {products.map((item, index) => (
              <div className={"product-tile tone-" + tones[index % tones.length]} key={item}>
                <span className="product-index">/ 0{index + 1}</span>
                <strong>{item}</strong>
                <ArrowRight size={24} strokeWidth={2.5} aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section">
            <p className="eyebrow"><span className="eyebrow-square" /> SIMPLE FROM START TO FINISH</p>
            <div className="process-header">
              <h2>YOUR IDEA. <span>OUR PROCESS.</span></h2>
              <p>From first message to finished print—fast, clear, and dependable.</p>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div className="process-card" key={step}>
                  <span className="process-number">0{index + 1}</span>
                  <p>{step}</p>
                  <ArrowRight size={22} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section">
            <div className="contact-panel">
              <div className="contact-stripes" aria-hidden="true"><span /><span /><span /></div>
              <div>
                <p className="eyebrow eyebrow-light"><span className="eyebrow-square" /> LET'S MAKE AN IMPACT</p>
                <h2>LET'S MAKE YOUR BRAND <span>IMPOSSIBLE TO IGNORE.</span></h2>
                <p>Share your timeline, quantity, and goals. We’ll help you choose the right materials and deliver with speed, clarity, and color confidence.</p>
              </div>
              <div className="contact-actions">
                <a className="button button-yellow" href={quoteLink}>Email for a quote <ArrowRight size={19} aria-hidden="true" /></a>
                <a className="button button-dark-outline" href="tel:+19035880188"><Phone size={18} aria-hidden="true" /> Call 903-588-0188</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section footer-inner">
          <div className="footer-brand">
            <BrandLogo compact />
            <p>Bold production for local brands, teams, schools, and events—designed to look strong in person and on camera.</p>
            <SocialLinks />
          </div>
          <div>
            <h3>EXPLORE</h3>
            <ul>{navLinks.map((item) => <li key={item}><a href={"#" + item.toLowerCase()}>{item}</a></li>)}</ul>
          </div>
          <div>
            <h3>CONTACT</h3>
            <ul>
              <li><a href="tel:+19035880188">903-588-0188</a></li>
              <li><a href="mailto:jo@impactprintco.com">jo@impactprintco.com</a></li>
              <li>210 Main St. W<br />Mount Vernon, TX 75457</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} IMPACT PRINT CO. <span>PRINT LOUD. SHOW UP BIG.</span></div>
      </footer>
    </div>
  );
}
