"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function ProductsSection() {
  const [emblaApi, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap()); // Get current active slide index
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Set initial index
    emblaApi.on("select", onSelect); // Update on slide change
  }, [emblaApi, onSelect]);

  return (
    <section className="py-15 bg-neutral-800 text-white flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-1">
        <Badge className="bg-rose-50 text-primary -rotate-3">Our Products</Badge>
        <h2 className="text-3xl">Products that Make Life Easier</h2>
      </div>
      <div className="w-full pl-[var(--nav-left-offset)]">
        <Carousel opts={{ align: "start" }} className="w-full" setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index, arr) => (
              <CarouselItem
                key={index}
                className={cn(
                  "group basis-1/4 2xl:basis-1/5 transition-all duration-300",
                  index === selectedIndex && "basis-1/2 2xl:basis-1/2",
                  index === arr.length - 1 && "pr-4"
                )}
              >
                <Card className="flex justify-end min-h-105 relative overflow-hidden border-none p-3">
                  {index === selectedIndex && (
                    <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-foreground/60 z-50">
                      <div className="cursor-pointer size-30 flex items-center justify-center rounded-full bg-white/25 border border-white/12 backdrop-blur-sm">
                        <Play className="size-10 stroke-0 fill-white " />
                      </div>
                    </div>
                  )}
                  <Image src="/images/hero-banner.webp" alt="alt" fill className="object-cover" />
                  <div
                    className={cn(
                      "hidden space-y-2 bg-white/60 border border-white/20 rounded-lg backdrop-blur-2xl p-4",
                      index !== selectedIndex && "group-hover:block"
                    )}
                  >
                    <h2 className="text-sm font-light">Model : KSV-18HCTINV-SW</h2>
                    <p className="font-semibold line-clamp-2">Kelvinator 1.5 Ton Inverter heating cooling Smart Wi-fi Ac</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Button className="bg-rose-50 text-primary hover:bg-rose-100">Check our all products</Button>
    </section>
  );
}
