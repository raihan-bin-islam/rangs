import { Award, BriefcaseBusiness, Globe2, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import type { LucideIcon } from "lucide-react";

type StatItem = {
  icon: LucideIcon;
  iconGradient: string;
  number: string;
  numberColor: string;
  label: string;
};

function StatRow({ icon: Icon, iconGradient, number, numberColor, label }: StatItem) {
  return (
    <li className="flex items-center gap-4">
      <div
        className={`grid size-12.5 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${iconGradient} text-white shadow-xl`}
        aria-hidden="true"
      >
        <Icon className="size-6" strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <div className={`${numberColor} text-2xl font-extrabold leading-tight`}>{number}</div>
        <div className="">{label}</div>
      </div>
    </li>
  );
}

export const Stats = () => {
  const stats: StatItem[] = [
    {
      icon: Globe2,
      iconGradient: "from-rose-300 to-rose-400 shadow-rose-200",
      number: "130+",
      numberColor: "text-rose-400",
      label: "Countries Served",
    },
    {
      icon: BriefcaseBusiness,
      iconGradient: "from-orange-300 to-orange-500 shadow-orange-200",
      number: "25,000+",
      numberColor: "text-amber-400",
      label: "Job Holders",
    },
    {
      icon: Package,
      iconGradient: "from-teal-200 to-teal-400 shadow-teal-200",
      number: "4,400+",
      numberColor: "text-teal-400",
      label: "Products",
    },
    {
      icon: Award,
      iconGradient: "from-violet-400 to-purple-500 shadow-purple-200",
      number: "55+",
      numberColor: "text-violet-400",
      label: "National Awards",
    },
  ];

  return (
    <main className="shrink-0 flex items-center justify-center -mt-42 z-50">
      <div className="relative">
        <Card className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg border-none bg-white p-6 shadow-2xl">
          <ul className="">
            {stats.map((s, i) => (
              <div key={i}>
                <StatRow {...s} />
                {i < stats.length - 1 ? <Separator className="opacity-60 my-4" /> : null}
              </div>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
};
