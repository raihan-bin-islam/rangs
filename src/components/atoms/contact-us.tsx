"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FacebookLogo } from "@/components/icons/FacebookLogo";
import { Badge } from "@/components/ui/badge";

export function ContactFormCard() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    // toast({
    //   title: "Message sent",
    //   description: "Thanks! We will get back to you shortly.",
    // });
  }

  return (
    <Card className="z-50 min-w-90 max-w-full shrink-0 grow overflow-hidden rounded-3xl border-0 shadow-none -mt-64 px-6 pt-15 pb-8 bg-gradient-to-b from-primary from-25% to-80%  to-transparent">
      <CardHeader className="p-0">
        <Badge variant="heading" className="text-center mx-auto">
          Contact Us
        </Badge>
        <CardTitle className="text-center text-3xl font-extrabold tracking-tight text-white">
          <div>Have Queries?</div>
          <div>We here to Help</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-4 bg-transparent">
        <form action={onSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your name"
            className="h-12 bg-transparent text-white placeholder:text-white/80 border-white/20 focus-visible:ring-white/30"
            required
          />
          <Input
            name="mobile"
            placeholder="Your mobile number"
            inputMode="tel"
            className="h-12 bg-transparent text-white placeholder:text-white/80 border-white/20 focus-visible:ring-white/30"
            required
          />
          <Textarea
            name="message"
            placeholder="Enter your message"
            className="min-h-[130px] bg-transparent text-white placeholder:text-white/80 border-white/20 focus-visible:ring-white/30"
            required
          />
          <Button type="submit" disabled={loading} className="h-12 w-full rounded-lg bg-white text-[#1f1f1f] hover:bg-white/90">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-white/60 italic">Get Connected at</span>
          <span className="text-white/30">{"\u2014"}</span>
          <Link href="#" aria-label="Facebook">
            <FacebookLogo className="size-10 text-white" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
