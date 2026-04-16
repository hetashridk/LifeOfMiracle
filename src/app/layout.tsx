import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Instrument_Sans, Karla } from "next/font/google";
import "./globals.css";
import LotusBackground from "@/components/LotusBackground";

const interBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorantHeading = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: "--font-heading",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600', '700'],
  variable: "--font-instrument",
  subsets: ["latin"],
});

const karla = Karla({
  weight: ['400', '500', '600', '700', '800'],
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life of a Miracle | Mental Fitness Coaching",
  description: "Mental fitness coaching for profound professional & spiritual growth by Karishma Khubchandani.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interBody.variable} ${cormorantHeading.variable} ${instrumentSans.variable} ${karla.variable}`}
    >
      <body>
        <LotusBackground />
        {children}
      </body>
    </html>
  );
}
