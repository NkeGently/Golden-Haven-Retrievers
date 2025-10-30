"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import type { Puppy } from "@/lib/cart-context"

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
    image: "/pup 1.jpg?height=600&width=600",
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
    image: "/pup 2.jpg?height=600&width=600",
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
    image: "/pup 3.jpg?height=600&width=600",
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
    image: "/placeholder.svg?height=600&width=600",
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
    image: "/placeholder.svg?height=600&width=600",
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
    color: "Black",
    price: 1100,
    priceDisplay: "$1,100",
    status: "Available",
    image: "/placeholder.svg?height=600&width=600",
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
    priceDisplay: "$1,000",
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
    gender: "Female",
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

export default function PuppyDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addToCart, toggleMicrochip } = useCart()
  const [addMicrochip, setAddMicrochip] = useState(false)
  const [added, setAdded] = useState(false)

  const puppy = puppies.find((p) => p.id === Number.parseInt(params.id))

  if (!puppy) {
    return (
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Puppy Not Found</h1>
          <Button asChild>
            <Link href="/puppies">Back to Puppies</Link>
          </Button>
        </div>
      </main>
    )
  }

  const microchipPrice = 50
  const totalPrice = puppy.price + (addMicrochip ? microchipPrice : 0)

  const handleAddToCart = () => {
    addToCart(puppy)
    if (addMicrochip) {
      toggleMicrochip(puppy.id)
    }
    setAdded(true)
    setTimeout(() => {
      router.push("/cart")
    }, 1000)
  }

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/puppies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Puppies
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="relative">
              <img
                src={puppy.image || "/placeholder.svg"}
                alt={puppy.name}
                className="w-full h-auto rounded-sm object-cover"
              />
              <Badge className="absolute top-4 right-4" variant={puppy.status === "Reserved" ? "secondary" : "default"}>
                {puppy.status}
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{puppy.name}</h1>
              <p className="text-3xl font-bold text-primary">{puppy.priceDisplay}</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Age</p>
                    <p className="font-medium">{puppy.age}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Gender</p>
                    <p className="font-medium">{puppy.gender}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Color</p>
                    <p className="font-medium">{puppy.color}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Weight</p>
                    <p className="font-medium">{puppy.weight}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Parents</p>
                    <p className="font-medium">{puppy.parents}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-xl font-bold mb-2">About {puppy.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{puppy.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Health & Vaccinations</h2>
              <ul className="space-y-2">
                {puppy.vaccinations?.map((vaccination, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{vaccination}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <input
                    type="checkbox"
                    id="microchip"
                    checked={addMicrochip}
                    onChange={(e) => setAddMicrochip(e.target.checked)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="microchip" className="font-medium cursor-pointer">
                      Add Microchip (+${microchipPrice})
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Ensure your puppy's safety with a registered microchip
                    </p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Total Price:</span>
                    <span className="text-2xl font-bold text-primary">${totalPrice.toLocaleString()}</span>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    disabled={added || puppy.status === "Reserved"}
                    className="w-full"
                    size="lg"
                  >
                    {added ? "Added to Cart!" : puppy.status === "Reserved" ? "Reserved" : "Add to Cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-muted-foreground">
              <p>
                All our puppies come with a health guarantee and are raised in a loving home environment. Contact us for
                more information about {puppy.name}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
