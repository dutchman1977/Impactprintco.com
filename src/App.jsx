import React from "react";
import ImpactPrintHomepage from "./ImpactPrintHomepage";
import ApparelPrinting from "./ApparelPrinting";

export default function App() {
  return window.location.pathname.replace(/\/$/, "") === "/apparel-printing"
    ? <ApparelPrinting />
    : <ImpactPrintHomepage />;
}
