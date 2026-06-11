import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers, accentInitScript } from "@/components/providers";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { CommandMenu } from "@/components/command-menu";
import { Preloader } from "@/components/preloader";
import { site } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s · Deb Fernandez",
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: "Deb Fernandez",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Deb Fernandez",
  jobTitle: "Product Developer & Designer",
  email: site.email,
  url: site.url,
  sameAs: [site.instagram, site.blog],
  address: { "@type": "PostalAddress", addressCountry: "PH" },
  knowsAbout: [
    "Product development",
    "Brand design",
    "AI automation",
    "Web development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable} antialiased`}
    >
      <body className="grain">
        <script dangerouslySetInnerHTML={{ __html: accentInitScript }} />
        <Providers>
          <Preloader />
          <Cursor />
          <Nav />
          <main>{children}</main>
          <Footer />
          <CommandMenu />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
