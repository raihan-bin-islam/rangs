import { ContactFormCard } from "@/components/atoms/contact-us";
import { FacebookLogo } from "@/components/icons/FacebookLogo";
import { RangsLogoFooter } from "@/components/icons/RangsLogoFooter";
import { Shop } from "iconsax-reactjs";
import { ArrowRight, Copyright, Facebook, Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type React from "react";

export function Footer() {
  return (
    <footer className="bg-[#25272C] text-white/90">
      <div className="max-w-8xl mx-auto px-6 py-14 lg:py-20 lg:px-20">
        <div className="flex gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-4">
              <RangsLogoFooter />
              <p className="max-w-56 leading-relaxed">Rangs Group is one of the largest Bangladeshi industrial conglomerates.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12.5 flex items-center justify-center bg-white/5 rounded-full shrink-0">
                <Shop className="size-6" />
              </div>
              <div>
                <span className="text-white/60">e‑Commerce :</span>
                <a
                  target="_blank"
                  href="#"
                  className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-white/90"
                >
                  <span>shop.rangs.com.bd</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <Copyright className="h-4 w-4" />
              <span>{new Date().getFullYear()} Rangs Group Reserved</span>
            </div>
          </div>

          {/* Contact us */}
          <div className="space-y-6 grow">
            <h3 className="text-2xl font-semibold tracking-tight">Contact us</h3>

            <div className="space-y-5">
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                content={
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-medium">02223363551-3</span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-medium">09677244244</span>
                      <span className="text-primary text-sm">(Hotline)</span>
                      <span className="text-sm">🔥</span>
                    </div>
                  </div>
                }
              />

              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                content={
                  <div className="space-y-1">
                    <span className="block">info@rangs.com.bd</span>
                    <span className="block">marketing@rangs.com.bd</span>
                  </div>
                }
              />

              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                content={
                  <address className="not-italic leading-relaxed">
                    <div className="font-medium">Sonartori Tower</div>
                    <div>{"3rd, 4th, 5th, 6th, 7th, 10th, 11th & 15th Floor"}</div>
                    <div>{"12, Sonargaon Road, Bangla Motor"}</div>
                    <div>Dhaka-1000, Bangladesh</div>
                  </address>
                }
              />
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6 shrink-0">
            <h3 className="text-2xl font-semibold tracking-tight">Useful Links</h3>
            <ul className="grid gap-3 text-white/80">
              <li>
                <FooterLink href="#">Our Outlets</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Career</FooterLink>
              </li>
              <li>
                <FooterLink href="#" highlight>
                  FAQ
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#">Terms & Conditions</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Form Card */}
          <ContactFormCard />
        </div>
      </div>
    </footer>
  );
}

function ContactRow({ icon, content }: { icon: React.ReactNode; content: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
        <span className="text-white/90 shrink-0">{icon}</span>
      </div>
      <div className="text-white/80">{content}</div>
    </div>
  );
}

function FooterLink({ href, children, highlight = false }: { href: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <Link
      href={href}
      className={
        highlight
          ? "inline-flex items-center gap-2 text-primary hover:text-primary"
          : "inline-flex items-center gap-2 hover:text-white"
      }
    >
      <span>{children}</span>
    </Link>
  );
}
