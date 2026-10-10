import React from "react";
import { Facebook, Instagram, ArrowUpRight } from "lucide-react";

const profiles = [
  { name: "Facebook", url: "https://www.facebook.com/ImpactPrintCo", icon: Facebook },
  { name: "Instagram", url: "https://www.instagram.com/impactprintco_/", icon: Instagram },
];

export default function SocialLinks() {
  const linkedProfiles = profiles.filter((profile) => profile.url);
  if (!linkedProfiles.length) return null;

  return (
    <nav className="social-links" aria-label="Follow Impact Print Co.">
      {linkedProfiles.map(({ name, url, icon: Icon }) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={"Impact Print Co. on " + name + " (opens in a new tab)"}>
          <Icon size={20} aria-hidden="true" />
          <span>{name}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
