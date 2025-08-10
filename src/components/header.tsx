"use client";
import { RangsLogo } from "@/components/icons/RangsLoso";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Our Business", href: "#" },
  { label: "Career", href: "#" },
  { label: "News and Media", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="hidden md:flex md:items-center space-x-10">
      {navLinks.map(({ label, href }) => (
        <Link key={label} href={href} className="hover:text-primary transition-colors capitalize">
          {label}
        </Link>
      ))}
    </nav>
  );
};

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (headerRef) {
      document.body.setAttribute("style", `--nav-left-offset: ${headerRef.current?.getBoundingClientRect().x}px`);
      console.log({ dims: headerRef.current?.getBoundingClientRect() });
    }
    const handleScroll = () => {
      setIsScrolled(true);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn("w-full z-[999] fixed top-0 bg-background/0 text-white", isScrolled && "bg-foreground/20 backdrop-blur-md")}
    >
      <div className="max-w-8xl w-full mx-auto px-20 py-6">
        <div ref={headerRef} className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            <RangsLogo />
          </Link>
          <Navbar />

          <Button variant="ghost" className="w-auto h-auto items-start">
            <Download />
            <span className="block">
              <span className="block text-sm/5 font-medium">Company Profile</span>
              <span className="block text-xs/[18px] font-normal text-start">PDF, 4.58 MB</span>
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
