import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MissionSection() {
  return (
    <section className="py-8 lg:py-15">
      <div className="max-w-8xl mx-auto px-4 md:px-20 flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="mb-6 lg:mb-12 min-w-full lg:min-w-76 text-center lg:text-left">
          <Badge variant="heading">Our Goal</Badge>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{`Company's Mission, Vision and Values`}</h2>
        </div>
        <div className="grow grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Bringing the best of global technology with respect to technology by offering the best quality products and
                services.
              </p>
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent w-full md:w-auto">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                To establish ourselves as the most trusted and respected brand in Bangladesh through quality products and
                excellent customer service.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full md:w-auto">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Electronics brand in Bangladesh with complete trust and reliability. We believe in providing quality products at
                affordable prices.
              </p>
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent w-full md:w-auto">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
