import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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
      className={`${interBody.variable} ${cormorantHeading.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
