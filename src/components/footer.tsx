import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">RGC</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              RGC Group is one of the leading electronics companies in Bangladesh. We have been serving the people of Bangladesh
              since 1984 with quality products and excellent customer service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">+880-2-8833041</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">info@rgc.com.bd</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact us</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-gray-800 border-gray-700" />
                <Input placeholder="Last Name" className="bg-gray-800 border-gray-700" />
              </div>
              <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
              <Input placeholder="Phone" className="bg-gray-800 border-gray-700" />
              <Textarea placeholder="Message" className="bg-gray-800 border-gray-700 min-h-[100px]" />
              <Button className="bg-red-600 hover:bg-red-700 w-full">Send Message</Button>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Useful Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Our Products
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Career
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  News & Events
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-4">Your Mobile Number</h5>
              <Input placeholder="Enter your mobile number" className="bg-gray-800 border-gray-700 mb-4" />
              <Button className="bg-red-600 hover:bg-red-700 w-full mb-6">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 RGC Group. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
