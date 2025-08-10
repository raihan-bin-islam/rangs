import { Card, CardContent } from "@/components/ui/card"

export function PartnersSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-red-600 font-semibold mb-2">OUR STRENGTHS</div>
          <h2 className="text-3xl font-bold">Our Strengths</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center opacity-60">
          {[
            "SONY",
            "BRANDS",
            "LG",
            "Whirlpool",
            "SINGER",
            "PHILIPS",
            "INTEX",
            "GENERAL",
            "HAIER",
            "GREE",
            "MIDEA",
            "WALTON",
            "VISION",
          ].map((brand, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="p-4 text-center">
                <div className="text-gray-400 font-semibold text-sm">{brand}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-red-600 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">ISO Certified</h3>
              <p className="text-red-100">
                RGC Group is one of the leading electronics companies in Bangladesh with ISO certification ensuring
                quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white text-gray-900 p-6 rounded-lg inline-block">
                <div className="text-lg font-bold">ISO 9001:2015</div>
                <div className="text-sm text-gray-600">Quality Management System</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
