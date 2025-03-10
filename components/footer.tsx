import Link from "next/link";

import { Mail, MapPin, Phone, Truck } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Background Image - Now Fully Responsive */}
      <section className="absolute bottom-0 left-0 w-full">
        <img
          src="/footer_bg.png"
          alt="Industrial Background"
          className="w-full h-auto md:h-[300px] object-cover mix-blend-multiply opacity-80"
        />
      </section>

      {/* Footer Content */}
      <div className="relative z-10 container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6" />
              <span className="text-xl font-bold">ARCHANA TRANSPORT</span>
            </div>
            <p className="text-sm opacity-80">
              Specialized transportation of Ash, Red-Mud, and Coal using Hyva,
              Bulkers, and Trains.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
  <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>
  <div className="flex flex-wrap justify-start gap-4">
    <a href="https://facebook.com" target="_blank">
      <img src="/fb.png" alt="Facebook" className="h-10 w-10 object-contain" />
    </a>
    <a href="https://twitter.com" target="_blank">
      <img src="/X.png" alt="Twitter" className="h-10 w-10 object-contain" />
    </a>
    <a href="https://instagram.com" target="_blank">
      <img src="/ig.png" alt="Instagram" className="h-10 w-10 object-contain" />
    </a>
    <a href="https://linkedin.com" target="_blank">
      <img src="/ld.png" alt="LinkedIn" className="h-10 w-10 object-contain" />
    </a>
    <a href="https://wa.me/918458035964?text=Hello%20there!" target="_blank">
      <img src="/wp.png" alt="WhatsApp" className="h-10 w-10 object-contain" />
    </a>
    <a href="mailto:archanatransportrgd@gmail.com?subject=Hello&body=Hello%20there!" target="_blank">
      <img src="/gm.png" alt="Email" className="h-10 w-10 object-contain" />
    </a>
  </div>
</div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">
                  MPR Nagar, Sai Priya Nagar, Rayagada, Odisha-765001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-sm opacity-80">+91 84580 35964</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="text-sm opacity-80">
                  info@archanatransport.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="text-sm opacity-80">
                  archanatransportrgd@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-70">
          <p>
            &copy; {new Date().getFullYear()} Archana Transport. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
