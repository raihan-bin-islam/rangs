import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function CertificateSection() {
  return (
    <section className="max-w-8xl mx-auto flex items-center gap-6 lg:pt-15 lg:px-20 lg:pb-20 p-5">
      <div className="shrink-0 min-w-76 space-y-2">
        <Badge variant="heading">Our Achievements</Badge>
        <h2 className="text-3xl font-bold">ISO Certified</h2>
        <p className="mt-6 text-muted-foreground">
          ISO Certified ISO 9001 : 2015 <br /> Quality Management System
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Image
          src="/images/certificates/CDertificate-1.png"
          alt="certificate one"
          width={101}
          height={152}
          className="object-contain shrink-0"
        />
        <Image
          src="/images/certificates/CDertificate-2.png"
          alt="certificate two"
          width={212}
          height={152}
          className="object-contain shrink-0"
        />
      </div>
    </section>
  );
}
