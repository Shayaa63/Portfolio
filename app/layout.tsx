import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aisha Hashi — Junior fullstackutvecklare",
  description:
    "Portfolio av Aisha Hashi, junior fullstackutvecklare med bakgrund inom elektronik. Projekt med React, Next.js och headless CMS.",
  openGraph: {
    title: "Aisha Hashi — Junior fullstackutvecklare",
    description:
      "Ny som utvecklare, snabb på att lära sig och bygga med nya tekniker.",
    type: "website",
    locale: "sv_SE",
  },
};

// Sätter rätt tema innan sidan målas, så det inte blinkar mörkt -> ljust.
const themeScript = `try{if(localStorage.getItem("theme")==="light"){document.documentElement.setAttribute("data-theme","light")}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={geist.className}>{children}</body>
    </html>
  );
}