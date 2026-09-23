import localFont from "next/font/local";

export const gotham = localFont({
  src: [
    { path: "../public/fonts/GothamProLight.woff", weight: "300", style: "normal" },
    { path: "../public/fonts/GothamProRegular.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/GothamProItalic.woff", weight: "400", style: "italic" },
    { path: "../public/fonts/GothamProMedium.woff", weight: "500", style: "normal" },
    { path: "../public/fonts/GothamProMediumItalic.woff", weight: "500", style: "italic" },
    { path: "../public/fonts/GothamProBold.woff", weight: "700", style: "normal" },
    { path: "../public/fonts/GothamProBlack.woff", weight: "900", style: "normal" },
    { path: "../public/fonts/GothamProBlackItalic.woff", weight: "900", style: "italic" },
  ],
  variable: "--font-gotham",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  // Load only faces used by the page instead of preloading all eight files.
  preload: false,
});
