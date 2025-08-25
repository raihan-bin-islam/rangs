"use client";
import { RangsLogo } from "@/components/icons/RangsLogo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
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

const MobileNavbar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[1000] bg-foreground/95 backdrop-blur-md transition-opacity duration-300 md:hidden",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6">
          <Link href="/" className="text-2xl font-bold" onClick={onClose}>
            <RangsLogo />
          </Link>
          <button onClick={onClose} className="text-white hover:text-primary transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 px-6 py-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white hover:text-primary transition-colors capitalize text-lg font-medium"
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-6">
          <Button variant="ghost" className="w-full h-auto items-start text-white" onClick={onClose}>
            <Download />
            <span className="block">
              <span className="block text-sm/5 font-medium">Company Profile</span>
              <span className="block text-xs/[18px] font-normal text-start">PDF, 4.58 MB</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn("w-full z-[999] fixed top-0 bg-background/0 text-white", isScrolled && "bg-foreground/20 backdrop-blur-md")}
      >
        <div className="max-w-8xl w-full mx-auto px-4 md:px-20 py-6">
          <div ref={headerRef} className="flex items-center justify-between lg:h-16">
            <Link href="/" className="text-2xl font-bold">
              <RangsLogo />
            </Link>
            <Navbar />

            {/* Desktop Download Button */}
            <Button variant="ghost" className="hidden md:flex w-auto h-auto items-start">
              <Download />
              <span className="block">
                <span className="block text-sm/5 font-medium">Company Profile</span>
                <span className="block text-xs/[18px] font-normal text-start">PDF, 4.58 MB</span>
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-white hover:text-primary transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavbar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
