import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center relative h-dvh overflow-hidden">
      <div className="absolute z-40 text-background max-w-8xl w-full mx-auto px-20">
        <div className="max-w-2xl space-y-1">
          <Badge className="-rotate-3 rounded-full bg-yellow-200 text-primary">Let’s experience something futuristic</Badge>
          <h2 className="text-6xl font-bold">Country’s Best & Reliable Electronics Partner</h2>
        </div>
      </div>
      <div className="z-30 absolute inset-0 bg-gradient-to-r from-primary to-primary/15" />
      <div className="relative h-full z-20 shrink-0 grow w-full">
        <Image src="/images/hero-banner.webp" alt="alt" fill className="z-20 object-cover" />
      </div>
    </section>
  );
}
