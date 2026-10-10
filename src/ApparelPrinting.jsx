import React from "react";
import SocialLinks from "./SocialLinks";
import { ArrowLeft, ArrowRight, Check, Phone, Shirt } from "lucide-react";

const apparelQuote = "mailto:jo@impactprintco.com?subject=Custom%20apparel%20quote&body=Hi%20Impact%20Print%20Co.%2C%0A%0AI%27d%20like%20a%20quote%20for%3A%0AGarment%20type%3A%0AQuantity%3A%0ASizes%20and%20colors%3A%0APrint%20locations%3A%0ADate%20needed%3A%0AArtwork%20ready%3A%0A%0AName%3A%0APhone%3A";

const options = [
  { name: "Custom T-Shirts", tone: "cyan", copy: "Put your logo, event, or team front and center. A versatile starting point for staff shirts, community events, and everyday brand wear.", detail: "For businesses, schools & events" },
  { name: "Hoodies & Sweatshirts", tone: "pink", copy: "Give your design a warmer home. Bring your idea for team apparel, branded layers, or a coordinated group order.", detail: "For teams, groups & cooler days" },
  { name: "Branded Workwear", tone: "yellow", copy: "Help your crew look like a team. Tell us about the job and the look you want, and we’ll help you explore suitable garments and decoration.", detail: "For staff, crews & local brands" },
];

export default function ApparelPrinting() {
  return (
    <div className="site apparel-page">
      <header className="site-header">
        <div className="header-inner">
          <a className="header-brand" href="/" aria-label="Impact Print Co. home"><img className="brand-logo brand-logo-small" src="/impact-print-co-logo.png" alt="Impact Print Co." width="112" height="94" /></a>
          <a className="apparel-back" href="/#services"><ArrowLeft size={17} aria-hidden="true" /> All services</a>
          <a className="header-quote" href="#apparel-quote">Get a Quote <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </header>
      <main id="top">
        <section className="apparel-hero">
          <div className="section apparel-hero-inner">
            <div>
              <p className="eyebrow"><span className="eyebrow-square" /> Apparel printing / Mount Vernon, TX</p>
              <h1>YOUR BRAND.<br /><span>WORN LOUD.</span></h1>
              <p className="apparel-intro">Custom t-shirts, hoodies, and clothing that bring your business, team, or event together. Start with an idea. We’ll help you work out the details.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#apparel-quote">Plan your apparel <ArrowRight size={19} aria-hidden="true" /></a>
                <a className="button button-outline" href="#apparel-options">Explore options</a>
              </div>
            </div>
            <div className="apparel-art" aria-hidden="true">
              <span className="card-stamp">MAKE YOUR MARK.</span>
              <div className="apparel-shirt"><Shirt strokeWidth={1.1} /><span>YOUR<br />BRAND<br /><b>HERE.</b></span></div>
              <span className="card-caption">DESIGN. PRINT. WEAR. REPEAT.</span>
            </div>
          </div>
        </section>
        <section id="apparel-options" className="section apparel-options">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-square" /> FIND YOUR FIT</p><h2>WHAT WILL YOU <span className="title-highlight cyan-highlight">PUT YOUR NAME ON?</span></h2></div>
            <p>These are starting points for your custom order. Garment choices, colors, sizes, and availability are confirmed with your quote.</p>
          </div>
          <div className="apparel-option-grid">
            {options.map((option, index) => <article className={"service-card tone-" + option.tone} key={option.name}>
              <span className="apparel-option-label">0{index + 1} / {option.detail}</span>
              <h3>{option.name}</h3><p>{option.copy}</p>
              <a className="service-card-link" href={apparelQuote} aria-label={"Ask about " + option.name}>Ask about this option <ArrowRight size={18} aria-hidden="true" /></a>
            </article>)}
          </div>
        </section>
        <section className="apparel-details">
          <div className="section apparel-details-inner">
            <div><p className="eyebrow eyebrow-light"><span className="eyebrow-square" /> FROM IDEA TO ORDER</p><h2>LET’S GET THE<br /><span>DETAILS RIGHT.</span></h2><p>Have artwork ready? Send it with your request. Still working on the design? Tell us what you have in mind.</p></div>
            <ol className="apparel-steps">
              <li><b>01</b><div><h3>Tell us what you need</h3><p>Share the garment type, quantity, size range, preferred colors, and date you need your order.</p></div></li>
              <li><b>02</b><div><h3>Work through the details</h3><p>We’ll discuss artwork, print placement, garment availability, pricing, and timing with you.</p></div></li>
              <li><b>03</b><div><h3>Confirm your order</h3><p>Review the design and order details with our team before production, then arrange pickup or delivery.</p></div></li>
            </ol>
          </div>
        </section>
        <section id="apparel-quote" className="contact-section">
          <div className="section"><div className="contact-panel">
            <div className="contact-stripes" aria-hidden="true"><span /><span /><span /></div>
            <div><p className="eyebrow eyebrow-light"><span className="eyebrow-square" /> LET’S MAKE IT YOURS</p><h2>YOUR NEXT<br /><span>FAVORITE SHIRT.</span></h2><p>Ready to start? Email your ideas to jo@impactprintco.com. Pricing and turnaround depend on the garments, artwork, quantity, and availability.</p><p className="apparel-check"><Check size={19} aria-hidden="true" /> The email button includes a simple checklist for your request.</p></div>
            <div className="contact-actions"><a className="button button-yellow" href={apparelQuote}>Request an apparel quote <ArrowRight size={19} aria-hidden="true" /></a><a className="button button-dark-outline" href="tel:+19035880188"><Phone size={18} aria-hidden="true" /> Call 903-588-0188</a></div>
          </div></div>
        </section>
      </main>
      <footer className="footer apparel-footer"><div className="section"><a href="/" aria-label="Impact Print Co. home"><img className="brand-logo brand-logo-small" src="/impact-print-co-logo.png" alt="Impact Print Co." width="112" height="94" /></a><p>210 Main St. W<br />Mount Vernon, TX 75457</p><a href="mailto:jo@impactprintco.com">jo@impactprintco.com</a><SocialLinks /><a className="apparel-back" href="/#services"><ArrowLeft size={17} aria-hidden="true" /> Back to all services</a></div><div className="footer-bottom">© {new Date().getFullYear()} IMPACT PRINT CO. <span>PRINT LOUD. SHOW UP BIG.</span></div></footer>
    </div>
  );
}
