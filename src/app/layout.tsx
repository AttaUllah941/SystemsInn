import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionWrapper } from "@/components/animations/MotionWrapper";
import { company } from "@/data/company";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const title = "System Inn | Software Development & Technology Partner";
const description =
  "System Inn is your trusted partner in software and technology: custom software development, SaaS solutions, IT services and technology consulting. Build · Innovate · Grow.";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl || "http://localhost:3000"),
  title: { default: title, template: "%s | System Inn" },
  description,
  applicationName: company.name,
  keywords: [
    "System Inn",
    "software development company",
    "SaaS development",
    "custom software",
    "IT services",
    "technology consulting",
  ],
  // Canonical is only emitted once the production domain is configured.
  ...(company.siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    siteName: company.name,
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#03152f",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  slogan: company.tagline,
  description: company.description,
  email: company.email,
  telephone: "+923134832030",
  ...(company.siteUrl ? { logo: `${company.siteUrl}/logo/system-inn-logo.jpg` } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  sameAs: [company.linkedin],
  ...(company.siteUrl ? { url: company.siteUrl } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-white px-4 py-2 font-semibold text-brand-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <MotionWrapper>{children}</MotionWrapper>
      </body>
    </html>
  );
}
