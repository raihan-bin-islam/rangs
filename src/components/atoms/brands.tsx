import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const brands = [
  { img: "/images/brands/sony.png", alt: "Sony" },
  { img: "/images/brands/rangs.png", alt: "Rangs" },
  { img: "/images/brands/lg.png", alt: "LG" },
  { img: "/images/brands/kelvinator.png", alt: "Kelvinator" },
  { img: "/images/brands/electrolux.png", alt: "Electrolux" },
  { img: "/images/brands/whirpool.png", alt: "Whirlpool" },
  { img: "/images/brands/daewoo.png", alt: "Daewoo" },
  { img: "/images/brands/yasuka.png", alt: "Yasuka" },
  { img: "/images/brands/fuji.png", alt: "Fuji" },
  { img: "/images/brands/philips.png", alt: "Philips" },
  { img: "/images/brands/intex.png", alt: "Intex" },
  { img: "/images/brands/ocean.png", alt: "Ocean" },
  { img: "/images/brands/saffron.png", alt: "Saffron" },
  { img: "/images/brands/jusai.png", alt: "Jusai" },
  { img: "/images/brands/midea.png", alt: "Midea" },
  { img: "/images/brands/kensar.png", alt: "Kensar" },
  { img: "/images/brands/zeiss.png", alt: "Zeiss" },
  { img: "/images/brands/viewsonic.png", alt: "ViewSonic" },
];

const firstRow = brands.slice(0, brands.length / 2);
const secondRow = brands.slice(brands.length / 2);

const BrandCard = ({ img, alt }: { img: string; alt: string }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="object-contain mx-3" alt={alt} src={img} />;
};

export function Brands() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((brand, index) => (
          <BrandCard key={`brand-first-${index}`} {...brand} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((brand, index) => (
          <BrandCard key={`brand-second-${index}`} {...brand} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/20 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/20 bg-gradient-to-l from-background"></div>
    </div>
  );
}
