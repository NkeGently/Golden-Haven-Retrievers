export interface Puppy {
  id: number
  name: string
  age: string
  gender: string
  color: string
  price: number
  priceDisplay: string
  status: "Available" | "Reserved"
  weight?: string
  parents?: string
  vaccinations?: string[]
  image: string
  images?: string[]
  description: string
}
