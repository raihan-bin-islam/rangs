import { Brands } from "@/components/atoms/brands";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function PartnersSection() {
  return (
    <section className="max-w-8xl mx-auto flex items-center gap-10 lg:pt-15 lg:px-20 lg:pb-20 p-5">
      <div className="shrink-0">
        <Badge variant="heading">Our Concerns</Badge>
        <h2 className="text-3xl font-bold">Our Strengths</h2>
      </div>
      <Brands />
    </section>
  );
}
