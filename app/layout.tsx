import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

import {
  Libre_Baskerville,
  IBM_Plex_Mono,
  Geist as V0_Font_Geist,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google"

// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Golden Haven Retrievers - Premium Golden Retriever Puppies",
    template: "%s | Golden Haven Retrievers",
  },
  description:
    "Find your perfect Golden Retriever companion. Quality bloodlines, health guarantees, and trusted breeders since 2008.",
  keywords: [
    "Golden Retrievers",
    "Retriever puppies",
    "dog breeders",
    "AKC Golden Retrievers",
    "family dogs",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://golden-haven-retrievers.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/lolo.png", // path inside /public
  },
  openGraph: {
    title: "Golden Haven Retrievers - Premium Golden Retriever Puppies",
    description:
      "Find your perfect Golden Retriever companion. Quality bloodlines, health guarantees, and trusted breeders since 2008.",
    url: "https://golden-haven-retrievers.vercel.app/",
    siteName: "Golden Haven Retrievers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Golden Haven Retrievers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Haven Retrievers - Premium Golden Retriever Puppies",
    description:
      "Find your perfect Golden Retriever companion. Quality bloodlines, health guarantees, and trusted breeders since 2008.",
    images: ["/opengraph-image.png"], // fallback to Open Graph image
    creator: "@GoldenHaven",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <CartProvider>
          <Navigation />
          {children}
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
