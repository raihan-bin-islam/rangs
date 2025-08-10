import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-red-600 font-semibold mb-2">NEWS & EVENTS</div>
          <h2 className="text-3xl font-bold">Get to know our work insights!</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Business Growth"
                width={300}
                height={200}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  Business
                </Badge>
                <h3 className="font-bold text-lg mb-2">Market Research for Business Growth</h3>
                <p className="text-gray-600 text-sm mb-4">Read More</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="TV Factory"
                width={300}
                height={200}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <Badge variant="secondary" className="mb-3 bg-red-100 text-red-600">
                  Featured
                </Badge>
                <h3 className="font-bold text-lg mb-2">Inside the Country's Largest TV Factory</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We help brands grow online through data-driven digital marketing.
                </p>
                <Button variant="link" className="text-red-600 p-0">
                  Read More →
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Market Research"
                width={300}
                height={200}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  Research
                </Badge>
                <h3 className="font-bold text-lg mb-2">Market Research for Business Growth</h3>
                <p className="text-gray-600 text-sm mb-4">Read More</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
