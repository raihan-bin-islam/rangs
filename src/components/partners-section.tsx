import { Brands } from "@/components/atoms/brands";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function PartnersSection() {
  return (
    <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10 pt-8 lg:pt-15 px-4 md:px-20 pb-8 lg:pb-20">
      <div className="shrink-0 text-center lg:text-left">
        <Badge variant="heading">Our Concerns</Badge>
        <h2 className="text-2xl lg:text-3xl font-bold">Our Strengths</h2>
      </div>
      <Brands />
    </section>
  );
}
