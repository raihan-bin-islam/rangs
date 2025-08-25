import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function CertificateSection() {
  return (
    <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-8 py-8 lg:py-15 px-4 lg:px-20">
      <div className="w-full lg:shrink-0 lg:max-w-76 space-y-2 text-center lg:text-left">
        <Badge variant="heading">Our Achievements</Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">ISO Certified</h2>
        <p className="mt-4 lg:mt-6 text-muted-foreground text-sm lg:text-base">
          ISO Certified ISO 9001 : 2015 <br /> Quality Management System
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 lg:gap-4 shrink-0 w-full lg:w-auto">
        <Image
          src="/images/certificates/CDertificate-1.png"
          alt="certificate one"
          width={101}
          height={152}
          className="object-contain shrink-0 w-16 h-24 lg:w-[101px] lg:h-[152px]"
        />
        <Image
          src="/images/certificates/CDertificate-2.png"
          alt="certificate two"
          width={212}
          height={152}
          className="object-contain shrink-0 w-32 h-24 lg:w-[212px] lg:h-[152px]"
        />
      </div>
    </section>
  );
}
