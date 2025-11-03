// /components/structured-data.tsx

"use client"

import React from "react"
import Script from "next/script"

interface ProductSchemaProps {
  name: string
  description: string
  image: string | string[]
  price: number
  currency?: string
  availability?: string
  brand?: string
  sku?: string
  id?: string
}

export function ProductSchema({
  name,
  description,
  image,
  price,
  currency = "USD",
  availability = "InStock",
  brand = "Golden Haven Retrievers",
  sku,
  id,
}: ProductSchemaProps) {
  const images = Array.isArray(image) ? image : [image]

  const productData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    image: images,
    sku: sku || name.replace(/\s+/g, "-").toLowerCase(),
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://goldenhavenretrievers.com/puppies/${id || sku || name}`,
      priceCurrency: currency,
      price,
      availability: `https://schema.org/${availability}`,
      itemCondition: "https://schema.org/NewCondition",
    },
  }

  return (
    <Script
      id={`product-schema-${id || sku || name}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}
