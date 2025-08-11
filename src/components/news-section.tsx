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

export function NewsSection() {
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
    <section className="w-full relative mx-auto flex flex-col items-center justify-center lg:py-15 py-8">
      <div className="flex flex-col items-center justify-center gap-1">
        <Badge variant="heading">News & Events</Badge>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Get to know our work insights!
        </h2>
      </div>
      {/* Dark wrapper to match the design */}
      <>
        <Carousel setApi={setApi} opts={{ align: "center", loop: true }} plugins={[Autoplay({ delay: 3500 })]} className="w-full">
          <CarouselContent className="ml-0 lg:py-15 py-6">
            {ITEMS.map((item, idx) => {
              const isActive = idx === current;
              return (
                <CarouselItem key={item.id} className="basis-full lg:basis-1/2 xl:basis-1/3">
                  <Card className="relative rounded-2xl border border-border/50 bg-white shadow-lg p-0 ">
                    <CardContent className="py-4 pl-3 pr-5">
                      <div className="grid items-stretch gap-4 md:grid-cols-2">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            fill
                            alt="Article image"
                            className="object-cover"
                            priority={isActive}
                          />
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="flex items-center gap-3 text-sm text-neutral-600">
                            <Avatar className="size-12">
                              <AvatarImage src={item.avatar ?? "/images/prothom-alo-logo.png"} alt="Author avatar" />
                              <AvatarFallback>AU</AvatarFallback>
                            </Avatar>
                            <div>
                              <p>{item.date}</p>
                              <p className="font-medium text-neutral-800">{item.author}</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <h3 className="text-pretty text-2xl font-bold leading-snug line-clamp-2 text-primary">
                              {item.title}
                            </h3>
                            <p className="text-neutral-600 line-clamp-3">{item.excerpt}</p>
                          </div>

                          <Button variant="link">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
