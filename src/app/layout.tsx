import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Na Esquina – Petiscaria",
  description:
    "Mais que um local para petiscar, este é um refúgio onde a tradição encontra a modernidade em cada detalhe. Um espaço onde cada prato conta uma história e cada recanto abraça com calor e familiaridade.",
  authors: [
    { url: "http://anaresende.github.io", name: "Ana Resende" },
    { url: "http://github.com/nlfonseca", name: "Nelson Fonseca" },
  ],
  keywords:
    "petiscaria, esquina, petiscos, santa maria da feira, são joão da madeira, moelas, prego, rojoes, camaroes, ameijoas, familia, restaurante, tasco, tasquinha, esplanada, tabua, tabuas, asinhas de frango, chicken wings, heineken, tostas, finos, sangria, tosta bacalhau, bacalhau, polvo",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Na Esquina – Petiscaria",
    title: "Na Esquina – Petiscaria",
    description:
      "Mais que um local para petiscar, este é um refúgio onde a tradição encontra a modernidade em cada detalhe. Um espaço onde cada prato conta uma história e cada recanto abraça com calor e familiaridade.",
    images: [
      {
        url: "/seo.jpg",
        alt: "Na Esquina – Petiscaria",
      },
    ],
    url: "https://naesquina.pt",
  },
  themeColor: "#385545",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
