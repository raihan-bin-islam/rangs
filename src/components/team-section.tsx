import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Company's Captains</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Team Member"
                width={250}
                height={300}
                className="w-full aspect-[4/5] object-cover"
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Sabina Yasmin"
                width={250}
                height={300}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="p-4 bg-orange-500 text-white">
                <h3 className="font-semibold">Sabina Yasmin</h3>
                <p className="text-sm opacity-90">Executive Director</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Team Member"
                width={250}
                height={300}
                className="w-full aspect-[4/5] object-cover"
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Team Member"
                width={250}
                height={300}
                className="w-full aspect-[4/5] object-cover"
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
