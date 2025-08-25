"use client";

import Image from "next/image";
import * as React from "react";

import { CarouselPagination } from "@/components/atoms/slider-pagination";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

export function TeamSection() {
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
    <section className="w-full relative mx-auto max-w-8xl flex flex-col items-center justify-center gap-6 lg:gap-15 py-8 lg:py-15 px-4 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <Badge variant="heading">Board of Directors</Badge>
        <h2 className="text-balance text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">{`Our Company's Captains`}</h2>
      </div>
      {/* Dark wrapper to match the design */}
      <>
        <Carousel setApi={setApi} opts={{ align: "center", loop: true }} plugins={[Autoplay({ delay: 3500 })]} className="w-full">
          <CarouselContent className="ml-0">
            {ITEMS.map((item, idx) => {
              const isActive = idx === current;
              return (
                <CarouselItem key={item.id} className="relative basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-2 pr-2">
                  <div className="group cursor-pointer w-full aspect-[3/4] relative rounded-xl overflow-hidden flex flex-col items-center justify-end p-2 lg:p-3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      fill
                      alt="Article image"
                      className="object-cover"
                      priority={isActive}
                    />
                    <div className="group-hover:block hidden relative z-50 w-full bg-background/80 border border-border/20 backdrop-blur-sm p-3 lg:p-4 rounded-2xl">
                      <h4 className="font-semibold text-center text-sm lg:text-base">{item.author}</h4>
                      <p className="text-xs lg:text-sm text-primary text-center">{item.source}</p>
                    </div>
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
