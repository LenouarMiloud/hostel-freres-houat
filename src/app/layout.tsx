import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Hostel Frères Houat | Réservation",
  description:
    "Réservez votre séjour au Hostel Frères Houat à Tlemcen. Découvrez nos hébergements F3 et envoyez votre demande de réservation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${notoSans.variable} ${notoSansArabic.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}