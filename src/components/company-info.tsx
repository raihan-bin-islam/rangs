import { Stats } from "@/components/atoms/stats";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function CompanyInfo() {
  return (
    <section className="flex justify-between gap-10.5 max-w-8xl mx-auto px-20">
      <div className="shrink-0 relative w-60 h-80 flex flex-col items-center justify-end pb-3 bg-red-50">
        <Image src="/images/founder-intro.png" alt="alt" fill className="shrink-0 object-cover" />
        <div className="relative z-30 text-background">
          <h3 className="text-sm font-semibold text-center">Late Akhter Hussain</h3>
          <div className="text-xs text-center space-y-0.5">
            <p>Founder Chairman</p>
            <p>Rangs Group of Companies</p>
          </div>
        </div>
      </div>
      <div className="grow grid grid-cols-1 py-16 md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-400">Since</p>
          <span className="text-4xl font-extrabold leading-none text-primary">1984</span>
          <p className="text-xl font-medium mt-2 mb-5 tracking-[-2%]">Dear Bangladesh, we are here to serve....</p>
          <Button size="lg">Know more about us</Button>
        </div>

        {/* Right column */}
        <div className="space-y-6 col-span-2">
          <p className="line-clamp-7">
            <strong>RANGS, ELECTRONICS Ltd.</strong> (REL) was established in Dhaka, Bangladesh and registered as private limited
            company under the Companies Act of 1913. <br /> <br />
            {`Rangs is one of the most popular electronics product & service providing organizations in Bangladesh. The company has
            always been known for pioneering in the field of consumer electronics & technology. Rangs has made It's position in
            the market by providing all sorts of quality electronics & electrical goods and reliable after sales service. Rangs is
            the Official Distributor of SONY CORPORATION, TOKYO, JAPAN; LG ELECTRONICS, KOREA; ELECTROLUX HOME PRODUCTS, USA;`}
          </p>
        </div>
      </div>
      <Stats />
    </section>
  );
}
