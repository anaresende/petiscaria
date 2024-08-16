import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Na Esquina – Petiscaria",
  applicationName: "Na Esquina – Petiscaria",
  description:
    "Mais que um local para petiscar, este é um refúgio onde a tradição encontra a modernidade em cada detalhe. Um espaço onde cada prato conta uma história e cada recanto abraça com calor e familiaridade.",
  authors: [
    { url: "http://anaresende.github.io", name: "Ana Resende" },
    { url: "http://github.com/nlfonseca", name: "Nelson Fonseca" },
  ],
  keywords:
    "petiscaria, esquina, na esquina, petiscos, santa maria da feira, são joão da madeira, moelas, prego, rojoes, camaroes, ameijoas, familia, restaurante, tasco, tasquinha, esplanada, tabua, tabuas, asinhas de frango, chicken wings, heineken, tostas, finos, sangria, tosta bacalhau, bacalhau, polvo, pregos, sandes, tábuas, mousse chocolate",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Na Esquina – Petiscaria",
    title: "Na Esquina – Petiscaria",
    description:
      "Mais que um local para petiscar, este é um refúgio onde a tradição encontra a modernidade em cada detalhe. Um espaço onde cada prato conta uma história e cada recanto abraça com calor e familiaridade.",
    images: [
      {
        url: "https://www.naesquina.pt/seo.jpg",
        alt: "Na Esquina – Petiscaria",
      },
    ],
    url: "https://naesquina.pt",
  },
};

export const viewport: Viewport = {
  themeColor: "#385545",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=0.2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=0.2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=0.2"
        />
        <link rel="manifest" href="/site.webmanifest?v=0.2" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=0.2"
          color="#385444"
        />

        <meta name="msapplication-TileColor" content="#385444" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={opensans.className}>{children}</body>
      <GoogleAnalytics gaId="G-4DMFGGRDM7" />
    </html>
  );
}
