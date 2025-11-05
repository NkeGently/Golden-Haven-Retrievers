import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone, MessageCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-muted">
        <img
          src="/hero.JPG?height=600&width=1920"
          alt="French Bulldog Puppy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4 py-12 max-w-2xl mx-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
            Find Your Perfect Golden Companion Today!
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/puppies">View Available Puppies</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="text-base md:text-lg font-semibold text-white drop-shadow-xl">
            Pay in full or place a $500 deposit*
            <br />
            <span className="text-sm md:text-base font-medium text-white drop-shadow-xl">
              *Remaining balance due upon delivery or pick-up
            </span>
          </p>
        </div>
      </section>

   {/* Featured Puppies Section */}
<section className="py-16 px-4 bg-muted">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-4">Featured Puppies</h2>
    <p className="text-center text-muted-foreground mb-8">
      Meet some of our adorable Golden Retriever puppies available now
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[
        {
          id: 1,
          name: "Max",
          age: "10 weeks",
          gender: "Male",
          color: "Golden",
          price: "$1,200",
          status: "Available",
          image: "/max1.jpg",
        },
        {
          id: 2,
          name: "Bella",
          age: "9 weeks",
          gender: "Female",
          color: "Light Cream",
          price: "$1,500",
          status: "Available",
          image: "/bella2.jpg",
        },
      ].map((puppy) => (
        <Card
          key={puppy.id}
          className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Image + status badge */}
          <div className="relative">
            <img
              src={puppy.image}
              alt={puppy.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {puppy.status}
            </div>
          </div>

          {/* Puppy info */}
          <CardContent className="px-6 pt-6">
            <h3 className="text-2xl font-bold mb-3">{puppy.name}</h3>

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
              <p className="text-xl font-bold text-primary mt-2">{puppy.price}</p>
            </div>

            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href={`/puppies/${puppy.id}`}>View Details</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="text-center mt-8">
      <Button asChild variant="outline" size="lg">
        <Link href="/puppies">View All Available Puppies</Link>
      </Button>
    </div>
  </div>
</section>





      {/* About Our Puppies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Our Puppies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Up To Date on Vaccines", description: "All puppies receive age-appropriate vaccinations" },
              { title: "Warranty Commitment", description: "Comprehensive health guarantee included" },
              { title: "Quality Bloodlines", description: "Champion bloodlines with excellent temperaments" },
              { title: "Breeders since 2008", description: "Over 15 years of breeding experience" },
              { title: "Microchip ID (Optional)", description: "Permanent identification for your peace of mind" },
              { title: "Travel Nanny (Optional)", description: "Safe delivery to most U.S. cities" },
            ].map((feature, index) => (
              <Card
                key={index}
                className="relative flex border border-gray-200 rounded-[5px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div> {/* colored side bar */}

                <CardContent className="p-6 pl-8">
                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>


            ))}
          </div>
        </div>
      </section>

      {/* Got Any Questions */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Got Any Questions?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Your Retriever's journey starts with a conversation. Reach out for personalized assistance from breeding
            experts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="tel:+15035551234">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </Button> */}
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/447415179416" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

     {/* Dear Customers */}
<section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-4">Dear Customers</h2>
    <p className="text-center text-lg mb-12 text-muted-foreground max-w-3xl mx-auto">
      Thank you for trusting us to help you find the perfect Golden Retriever. We're grateful to be part of your
      journey.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "/rev 1.jpeg",
        "/rev 2.jpg",
        "/rev 9.webp",
        "/rev 4.jpg",
        "/rev 5.webp",
        "/rev 10.jpg",
        "/rev 7.webp",
        "/rev 8.jpg",
      ].map((img, i) => (
        <div key={i} className="aspect-square overflow-hidden rounded-lg">
          <img
            src={img}
            alt={`Customer with puppy ${i + 1}`}
            className="w-full h-full object-cover border border-border hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FAQ */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How to Buy a Golden Retriever Puppy?</AccordionTrigger>
              <AccordionContent>
                Browse our available puppies, contact us to reserve your puppy with a $500 deposit, and we'll guide you
                through the entire process including delivery or pickup options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What makes Golden Retrievers special?</AccordionTrigger>
              <AccordionContent>
                Golden Retrivers are known for their affectionate nature, adaptability to apartment living, low exercise
                needs, and charming personalities. They make excellent companions for families and individuals alike.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How big do Golden Retrivers get when they grow up?</AccordionTrigger>
              <AccordionContent>
                Golden Retrievers typically weigh between 16-28 pounds and stand about 11-13 inches tall at the shoulder
                when fully grown.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Are Golden Retrievers good with children and other pets?</AccordionTrigger>
              <AccordionContent>
                Yes! Golden Retrievers are known for their gentle and patient nature, making them excellent companions for
                children. They also generally get along well with other pets when properly socialized.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How often do Golden Retrievers need exercise?</AccordionTrigger>
              <AccordionContent>
                Golden Retrievers need moderate exercise - typically 15-30 minutes of walking per day. They're not
                high-energy dogs and are perfect for apartment living.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Golden Retriever pups for sale near me?</AccordionTrigger>
              <AccordionContent>
                We're located in Dallas, Texas, and offer travel nanny services to most U.S. cities. You can also
                pick up your puppy locally if you're in the area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Are Golden Retrievers easy to train?</AccordionTrigger>
              <AccordionContent>
                Golden Retrievers are intelligent and eager to please, making them relatively easy to train with positive
                reinforcement methods. They respond well to consistency and patience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
        
              <AccordionTrigger>
                Do you ship to other cities in the USA or to other parts of the world?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We offer travel nanny services to most U.S. cities for a flat fee of $500. For international
                shipping, please contact us to discuss options and requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>How much do Golden Retrievers cost?</AccordionTrigger>
              <AccordionContent>
                Our Golden Retriever puppies range in price depending on color, gender, and bloodlines. Please view our
                available puppies page or contact us for current pricing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>What is the typical behavior of a Golden Retriever?</AccordionTrigger>
              <AccordionContent>
                Golden Retrievers are affectionate, playful, and alert. They're known for being excellent companion dogs,
                forming strong bonds with their families, and having a gentle, patient temperament.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What our Adopting Families say about us!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">⭐️⭐️⭐️  • February 16, 2022</p>
                <p className="mb-4 text-pretty">
                  "We purchased our 2nd puppy from GHR on Sunday!! Easy transaction and beautiful puppies!!"
                </p>
                <p className="font-bold">— Jason Rowe</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">⭐️⭐️⭐️⭐️  • November 3, 2023</p>
                <p className="mb-4 text-pretty">
                  "I have three of the Golden Haven Retrievers and couldn't be happier. They are all very healthy and have
                  great temperaments. GHR has been great at answering questions both before and after getting the puppies
                  on different occasions. If you are going to get a Golden Retriever definitely use these guys, my vet is very
                  impressed as well."
                </p>
                <p className="font-bold">— Breann Burke</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">⭐️⭐️⭐️  • December 24, 2023</p>
                <p className="mb-4 text-pretty">
                  "Have to give a huge thank you to Idella for all her help and transparency through this entire process!
                  I received my beautiful little princess and couldn't be happier with her. She is super playful and
                  energetic and we couldn't be happier. I would recommend CH French bulldogs to anyone!"
                </p>
                <p className="font-bold">— Jenny Ramirez</p>
              </CardContent>
            </Card>
            <Card>
  <CardContent className="pt-6">
    <p className="text-sm text-muted-foreground mb-2">⭐️⭐️⭐️⭐️⭐️  •  June 12, 2024</p>
    <p className="mb-4 text-pretty">
      "We had such a great experience with Golden Haven Retrievers! Our puppy Bella arrived healthy, happy, and so well-socialized.
      The entire process was smooth and professional we could tell she came from a loving environment."
    </p>
    <p className="font-bold">— Emily Roberts</p>
  </CardContent>
</Card>

<Card>
  <CardContent className="pt-6">
    <p className="text-sm text-muted-foreground mb-2">⭐️⭐️⭐️⭐️  •  October 8, 2024</p>
    <p className="mb-4 text-pretty">
      "Amazing communication and genuine care from start to finish. Our boy Max has been such a blessing — calm, friendly, and great with kids.
      We’re so thankful we found this breeder!"
    </p>
    <p className="font-bold">— James & Sarah Mitchell</p>
  </CardContent>
</Card>

<Card>
  <CardContent className="pt-6">
    <p className="text-sm text-muted-foreground mb-2">⭐️⭐️⭐️⭐️  •  February 20, 2025</p>
    <p className="mb-4 text-pretty">
      "Couldn’t have asked for a better experience! The team was transparent and kind throughout. Our little Luna is healthy,
      playful, and full of love — you can tell she was raised with real care."
    </p>
    <p className="font-bold">— Olivia Bennett</p>
  </CardContent>
</Card>

          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Located in Dallas, Texas</h2>
              <p className="text-lg mb-6 text-pretty">
                As a Golden Retriever breeder based in Dallas, Texas, we offer travel nanny services to most U.S.
                cities for a flat fee of $500 — or you're welcome to pick up locally if you're nearby or prefer a more
                personal adoption experience.
              </p>
              <Button asChild variant="outline">
                <Link href="/policies/shipping">Check our shipping policy</Link>
              </Button>
            </div>
            <div className="h-[400px] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134243.6242823796!2d-96.889963!3d32.776664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9911c5f9d6e1%3A0x3a6c7f6b7e6e1c0!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Where Have Our Puppies Been Adopted?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Texas</h3>
              <div className="space-y-2">
                {["Dallas", "Houston", "Austin", "Fort Worth"].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Northwest</h3>
              <div className="space-y-2">
                {["Washington", "Oregon", "Idaho"].map((state) => (
                  <div key={state} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Southwest</h3>
              <div className="space-y-2">
                {["California", "Nevada"].map((state) => (
                  <div key={state} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Midwest</h3>
              <div className="space-y-2">
                {["Oklahoma", "Kansas", "Nevada"].map((state) => (
                  <div key={state} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Northeast</h3>
              <div className="space-y-2">
                {["New York", "Illinois", "Maine", "NH", "Vermont"].map((state) => (
                  <div key={state} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Southeast</h3>
              <div className="space-y-2">
                {["Florida", "Virginia", "W. Virginia", "N. Carolina"].map((state) => (
                  <div key={state} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script id="tawkto-chat" strategy="lazyOnload">
  {`
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/690b366a727def194d09dfe3/1j99sp4ho';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  `}
</Script>
    </main>
  )
}
