import type React from "react"
import type { Metadata } from "next"
import { getPuppyById } from "@/data/puppies"

type Props = {
  params: { id: string }
}

// generateMetadata must be async in App Router
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const puppy = getPuppyById(Number.parseInt(params.id))

  if (!puppy) {
    return {
      title: "Puppy Not Found | Golden Haven Retrievers",
      description:
        "The puppy you're looking for is not available. Browse our other available Golden Retriever puppies for sale and adoption.",
    }
  }

  return {
    title: `${puppy.name} - ${puppy.color} Golden Retriever Puppy for Sale | Golden Haven Retrievers`,
    description: `Meet ${puppy.name}, a ${puppy.age} old ${puppy.color.toLowerCase()} Golden Retriever ${puppy.gender.toLowerCase()} for sale. ${puppy.description} Health guaranteed, vaccinated, and ready for adoption. ${puppy.priceDisplay}. Located in Dallas, Texas with nationwide delivery available.`,
    keywords: [
      `${puppy.color} Golden Retriever for sale`,
      `${puppy.color} Golden Retriever puppy`,
      `${puppy.name} Golden Retriever`,
      `${puppy.gender} Golden Retriever puppy`,
      `${puppy.age} Golden Retriever`,
      "Golden Retriever with health guarantee",
      "champion bloodline Golden Retriever",
      "vaccinated Golden Retriever puppy",
      "family-raised Golden Retriever",
      "Golden Retriever adoption",
      "Golden Retriever for sale Dallas",
      "Golden Retriever for sale Texas",
      "Golden Retriever breeder",
      "buy Golden Retriever puppy",
    ],
    openGraph: {
      title: `${puppy.name} - ${puppy.color} Golden Retriever Puppy for Sale | Golden Haven Retrievers`,
      description: `${puppy.age} old ${puppy.color.toLowerCase()} Golden Retriever ${puppy.gender.toLowerCase()} for sale. ${puppy.description} Health guaranteed. ${puppy.priceDisplay}`,
      type: "website",
      url: `https://goldenhavenretrievers.com/puppies/${puppy.id}`,
      siteName: "Golden Haven Retrievers",
      images: [
        {
          url: puppy.image.startsWith("http") ? puppy.image : `https://goldenhavenretrievers.com${puppy.image}`,
          width: 1200,
          height: 630,
          alt: `${puppy.name} - ${puppy.color} Golden Retriever Puppy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${puppy.name} - ${puppy.color} Golden Retriever Puppy for Sale`,
      description: `Meet ${puppy.name}, a ${puppy.age} old ${puppy.color.toLowerCase()} Golden Retriever. Health guaranteed, vaccinated. ${puppy.priceDisplay}`,
      images: [puppy.image.startsWith("http") ? puppy.image : `https://goldenhavenretrievers.com${puppy.image}`],
    },
    alternates: {
      canonical: `https://goldenhavenretrievers.com/puppies/${puppy.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function PuppyDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
