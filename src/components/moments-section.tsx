import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function MomentsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-red-600 font-semibold mb-2">GALLERY</div>
          <h2 className="text-3xl font-bold">Moments we live</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Team Meeting"
                width={350}
                height={250}
                className="w-full aspect-video object-cover"
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Award Ceremony"
                width={350}
                height={250}
                className="w-full aspect-video object-cover"
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Business Meeting"
                width={350}
                height={250}
                className="w-full aspect-video object-cover"
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
