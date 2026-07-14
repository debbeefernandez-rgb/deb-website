import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers, accentInitScript } from "@/components/providers";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { CommandMenu } from "@/components/command-menu";
import { Preloader } from "@/components/preloader";
import { site } from "@/lib/site";

/* The exact variable fonts shipped inside the original site file. */
const geist = localFont({
  src: "../fonts/geist.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s · Deb Fernandez",
  },
  description: site.description,
  keywords: site.keywords,
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

/*
  A @graph with the person and the service she offers. areaServed lists
  Bukidnon and the Philippines so local search and AI answer engines know
  she takes work there, while keeping worldwide remote scope. All honest:
  based in PH, serving Bukidnon remotely (RotyPeaks is the proof).
*/
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#deb`,
      name: "Deb Fernandez",
      jobTitle: "Web Designer & Product Developer",
      email: site.email,
      url: site.url,
      image: `${site.url}/og.png`,
      sameAs: [site.instagram, site.blog],
      address: { "@type": "PostalAddress", addressCountry: "PH" },
      knowsAbout: [
        "Web design",
        "Web development",
        "Next.js",
        "React",
        "Brand design",
        "AI automation",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: "Deb Fernandez — Web Design & Development",
      description: site.description,
      url: site.url,
      image: `${site.url}/og.png`,
      email: site.email,
      priceRange: "$$",
      provider: { "@id": `${site.url}/#deb` },
      founder: { "@id": `${site.url}/#deb` },
      address: { "@type": "PostalAddress", addressCountry: "PH" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Bukidnon" },
        { "@type": "Country", name: "Philippines" },
        { "@type": "Place", name: "Worldwide (remote)" },
      ],
      serviceType: [
        "Web design",
        "Web development",
        "Brand design",
        "AI automation",
      ],
      sameAs: [site.instagram, site.blog],
    },
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
      className={`${geist.variable} ${geistMono.variable} antialiased`}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
