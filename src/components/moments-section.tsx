"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, CalendarDays, Sun } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { CarouselPagination } from "@/components/atoms/slider-pagination";

type NewsItem = {
  id: number;
  date: string;
  author: string;
  source: string;
  title: string;
  excerpt: string;
  image: string;
  avatar: string;
};

const ITEMS: NewsItem[] = [
  {
    id: 1,
    date: "17 June, 2024",
    author: "Sujan Saha",
    source: "Case Study",
    title: "Market Research for Business Growth",
    excerpt:
      "We help brands grow online through data‑driven digital marketing strategies, including SEO, social media, content...",
    image: "/images/hero-banner.webp",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    date: "17 June, 2024",
    author: "Prothom Alo",
    source: "Prothom Alo",
    title: "Inside the Country’s Largest TV Factory",
    excerpt: "We help brands grow online through data‑driven digital marketing strategies, including... ",
    image: "/images/hero-banner.webp",
    avatar: "/images/prothom-alo-logo.png",
  },
  {
    id: 3,
    date: "17 June, 2024",
    author: "Sujan Saha",
    source: "Blog",
    title: "Market Research for Business Growth",
    excerpt:
      "We help brands grow online through data‑driven digital marketing strategies, including SEO, social media, content...",
    image: "/images/hero-banner.webp",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    date: "22 July, 2024",
    author: "Editorial",
    source: "Feature",
    title: "How We Scale Content Engines",
    excerpt: "From ideation to distribution, see our framework for compounding content ROI across channels.",
    image: "/images/hero-banner.webp",
    avatar: "https://github.com/shadcn.png",
  },
];

export function MomentsSection() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (i: number) => api?.scrollTo(i);

  return (
    <section className="w-full relative mx-auto max-w-8xl lg:px-20 px-5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-1">
        <Badge variant="heading">Our Gallery</Badge>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Moments we live</h2>
      </div>
      <>
        <Carousel setApi={setApi} opts={{ align: "center", loop: true }} plugins={[Autoplay({ delay: 3500 })]} className="w-full">
          <CarouselContent className="lg:py-10 py-6">
            {ITEMS.map((item, idx) => {
              const isActive = idx === current;
              return (
                <CarouselItem key={item.id} className="relative basis-full lg:basis-1/2 xl:basis-1/3 aspect-video">
                  <div className="size-full relative rounded-xl overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      fill
                      alt="Article image"
                      className="object-cover"
                      priority={isActive}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <CarouselPagination api={api} numberOfSlides={api?.scrollSnapList()?.length} activeSlide={current} />
      </>
    </section>
  );
}
