"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Puppy } from "@/lib/cart-context"
import Link from "next/link"

const puppies: Puppy[] = [
  {
    id: 1,
    name: "Buddy",
    age: "10 weeks",
    gender: "Male",
    color: "Fawn",
    price: 1000,
    priceDisplay: "$1,000",
    status: "Available",
    image: "/pup 1.jpg?height=400&width=400",
    description:
      "Buddy is a confident, outgoing boy with a heart of gold. He loves being around people and has already started basic crate and potty training. Buddy has a soft golden coat that glows in the sun and the sweetest eyes that seem to smile. He’ll thrive in an active family that enjoys outdoor adventures and cuddles in equal measure.",
    weight: "12 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  },
  {
    id: 2,
    name: "Max",
    age: "12 weeks",
    gender: "Male",
    color: "Light cream",
    price: 1000,
    priceDisplay: "$1,000",
    status: "Available",
    image: "/pup 2.jpg?height=400&width=400",
    description: "Max is calm and gentle — the kind of puppy who quietly follows you around just to be close. He’s great with kids and other pets and responds well to early commands. Max will grow into a loyal and easygoing companion who brings warmth and balance to any home.",
    weight: "14 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First and second round of shots", "Dewormed", "Vet checked"],
  },
  {
    id: 3,
    name: "Luna",
    age: "8 weeks",
    gender: "Female",
    color: "Cream White",
    price: 1100,
    priceDisplay: "$1,100",
    status: "New Arrival",
    image: "/pup 3.jpg?height=400&width=400",
    description: "Luna is graceful and affectionate, with a soft personality that makes her instantly lovable. She prefers snuggling over rough play and has already mastered sitting politely for treats. Luna’s easygoing nature makes her a perfect match for first-time dog owners or quieter households.",
    weight: "10 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  },
  {
    id: 4,
    name: "Charlie",
    age: "11 weeks",
    gender: "Male",
    color: "Brindle",
    price: 1000,
    priceDisplay: "$1,000",
    status: "Available",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Charlie is our curious little explorer! He loves to sniff around the yard, discover new toys, and make friends with everyone he meets. His playful spirit and quick learning make him ideal for families who want a smart, engaging companion. Expect lots of tail wags and fun training sessions.",
    weight: "13 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  },
  {
    id: 5,
    name: "Daisy",
    age: "9 weeks",
    gender: "Female",
    color: "Light Gold",
    price: 1100,
    priceDisplay: "$1,100",
    status: "Reserved",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Daisy is a bright, social butterfly who loves meeting new people and other dogs. She’s confident but gentle, and her cheerful energy fills every room she walks into. Daisy has a beautiful light-gold coat and would thrive with a family that enjoys plenty of playtime and affection.",
    weight: "11 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  },
  {
    id: 6,
    name: "Rosie",
    age: "10 weeks",
    gender: "Female",
    color: "Golden",
    price: 1100,
    priceDisplay: "$1,100",
    status: "Available",
    image: "/placeholder.svg?height=400&width=400",
    description: "Rosie is a fun-loving girl with endless enthusiasm! Whether she’s fetching toys or following you on walks, she’s always ready for the next adventure. Rosie’s intelligence shines during training sessions — she picks up new cues quickly and loves showing off her skills for praise and treats.",
    weight: "12 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  },
   {
    id: 7,
    name: "Cooper",
    age: "10 weeks",
    gender: "Male",
    color: "Dark Golden",
    price: 1000,
    priceDisplay: "$1,100",
    status: "Available",
    image: "/placeholder.svg?height=600&width=600",
    description: "Cooper is a cuddly sweetheart with a big personality. He adores belly rubs, chew toys, and cozy naps after playtime. Cooper’s balanced temperament makes him a great fit for families looking for a pup who’s both affectionate and well-mannered.",
    weight: "12 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  },
   {
    id: 8,
    name: "Molly",
    age: "10 weeks",
    gender: "Male",
    color: "Light Golden",
    price: 1100,
    priceDisplay: "$1,100",
    status: "Available",
    image: "/placeholder.svg?height=600&width=600",
    description: "Molly is gentle, sweet, and full of heart. She loves being around people, especially children, and has a calm demeanor that makes her a comforting presence. Molly’s soft, wavy coat and soulful eyes perfectly match her affectionate nature — she’s the definition of a loving family companion.",
    weight: "12 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  },
   {
    id: 9,
    name: "Leo",
    age: "10 weeks",
    gender: "Male",
    color: "Golden",
    price: 1000,
    priceDisplay: "$1,000",
    status: "Available",
    image: "/placeholder.svg?height=600&width=600",
    description: "Leo is the thinker of the litter — observant, patient, and incredibly intuitive. He tends to sit back and watch before joining in, showing early signs of strong focus and emotional intelligence. He’ll make a fantastic companion for someone looking for a calm, loyal, and easy-to-train Golden.",
    weight: "12 lbs",
    parents: "Champion bloodline",
    vaccinations: ["First round of shots", "Dewormed", "Vet checked"],
  }
]

export default function PuppiesPage() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Golden Haven Retrievers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our current selection of adorable Golden Retriever puppies. Each puppy comes with health guarantees,
            up-to-date vaccinations, and our commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {puppies.map((puppy) => (
            <Card key={puppy.id} className="overflow-hidden">
              <div className="relative">
                <img src={puppy.image || "/placeholder.svg"} alt={puppy.name} className="w-full h-64 object-cover" />
                <Badge
                  className="absolute top-2 right-2"
                  variant={puppy.status === "Reserved" ? "secondary" : "default"}
                >
                  {puppy.status}
                </Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">{puppy.name}</h3>
                <div className="space-y-1 text-sm mb-4">
                  <p>
                    <span className="font-medium">Age:</span> {puppy.age}
                  </p>
                  <p>
                    <span className="font-medium">Gender:</span> {puppy.gender}
                  </p>
                  <p>
                    <span className="font-medium">Color:</span> {puppy.color}
                  </p>
                  <p className="text-xl font-bold text-primary mt-2">{puppy.priceDisplay}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href={`/puppies/${puppy.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Don't see the perfect puppy? We have more coming soon!</p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get Notified of New Arrivals</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
