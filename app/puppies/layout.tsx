import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Available Golden Retriever Puppies for Sale & Adoption | Golden Haven Retrievers",
  description:
    "Browse our selection of healthy, family-raised Golden Retriever puppies for sale and adoption. All our puppies come with health guarantees, vaccinations, and vet checks. Gentle, loyal, and loving Golden Retrievers raised with care.",
  keywords: [
    "Golden Retriever puppies for sale",
    "Golden Retriever breeders",
    "Golden Retriever adoption",
    "Golden Retriever rehoming",
    "healthy Golden Retriever puppies",
    "family-raised Golden Retrievers",
    "Golden Retriever puppies with health guarantee",
    "champion bloodline Golden Retrievers",
    "quality Golden Retriever breeders",
    "AKC registered Golden Retrievers",
    "English Cream Golden Retrievers",
    "Red Golden Retrievers",
    "Golden Retriever puppies near me",
    "Golden Retriever puppies in Texas",
    "Golden Retriever puppies in the USA",
    "Golden Retriever puppy sale online",
  ],
  openGraph: {
    title: "Available Golden Retriever Puppies for Sale & Adoption | Golden Haven Retrievers",
    description:
      "Find your perfect Golden Retriever companion from our trusted breeding program. Family-raised, health-tested, and full of love — ready for their forever homes.",
    type: "website",
    url: "https://goldenhavenretrievers.com/puppies",
    siteName: "Golden Haven Retrievers",
    images: [
      {
        url: "/logo-hori.png",
        width: 1200,
        height: 630,
        alt: "Golden Haven Retrievers - Premium Golden Retriever Puppies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Available Golden Retriever Puppies for Sale & Adoption | Golden Haven Retrievers",
    description:
      "Browse our adorable, healthy Golden Retriever puppies for sale. Family-raised with care and love, all puppies come with health guarantees and vaccinations.",
    images: ["/logo-hori.png"],
  },
  alternates: {
    canonical: "https://goldenhavenretrievers.com/puppies",
  },
}

export default function PuppiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
