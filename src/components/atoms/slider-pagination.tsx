import { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  numberOfSlides?: number;
  activeSlide?: number;
  api?: CarouselApi | null;
};

export const CarouselPagination = ({ numberOfSlides, activeSlide, api }: Props) => {
  if (!api || !numberOfSlides || numberOfSlides <= 1) return;
  const scrollTo = (i: number) => api?.scrollTo(i);
  return (
    <div className="flex items-center justify-center gap-px">
      {Array.from({ length: numberOfSlides })
        ?.fill(1)
        ?.map((_, i) => {
          const active = i === activeSlide;
          return (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className="size-5 cursor-pointer inline-flex items-center justify-center"
            >
              <span
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "size-2.5 scale-85 rounded-full transition-all duration-350 bg-input cursor-pointer",
                  active ? "scale-125 bg-primary" : ""
                )}
              />
            </button>
          );
        })}
    </div>
  );
};
