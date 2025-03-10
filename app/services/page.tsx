import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Train, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive transportation solutions for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transportation Solutions
            </h2>
            <p className="text-muted-foreground">
              We offer specialized transportation services for various
              industries, focusing on the efficient movement of bulk materials.
            </p>
          </div>

          {/* Hyva Bulker Transport */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/3v.jpg?height=400&width=600"
                alt="Hyva Bulker Transport"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Hyva & Bulker Transport
              </h3>
              <p className="text-muted-foreground mb-4">
                Our fleet of modern Hyva & Bulkers 🚛 is designed for the
                efficient transportation of various bulk materials, including
                Ash, red-Mud, and Coal. These specialized vehicles 🚜 offer
                hydraulic tipping mechanisms 🏗️ for easy unloading, ensuring
                smooth operations⚙️ at loading and unloading points.
              </p>
              <p className="text-muted-foreground mb-6">
                We maintain our vehicles 🚛 to the highest standards ⭐,
                ensuring reliability 🔄 and safety 🦺 in all operations. Our
                experienced drivers 👨‍✈️ are trained to handle these specialized
                vehicles ⚙️ and materials 📦 with care
              </p>
              <Button asChild className="gap-1">
                <Link href="/services/Hyva-bulker">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Train Logistics */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Train className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Train Logistics</h3>
              <p className="text-muted-foreground mb-4">
                For large-scale transportation needs 🚛, we offer comprehensive
                train logistics solutions 🚂. This service is ideal for moving
                substantial volumes of materials 📦 over long distances 🛤️,
                providing a cost-effective 💰 and environmentally friendly 🌱
                alternative to road transport.
              </p>
              <p className="text-muted-foreground mb-6">
                We coordinate with railway authorities 🏢 and manage all aspects
                of train logistics 🚆, from loading and securing cargo 🔒 to
                ensuring timely delivery ⏳ at the destination 📍. Our expertise
                🏗️ in handling bulk materials ensures efficient operations
                throughout the transportation process.
              </p>
              <Button asChild className="gap-1">
                <Link href="/services/train-logistics">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/col.jpg?height=400&width=600"
                alt="Train Logistics"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Industries Served */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/pl.jpg?height=400&width=600"
                alt="Industries Served"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Industries Served</h3>
              <p className="text-muted-foreground mb-4">
                We specialize in serving industries that deal with bulk
                materials 📦 such as ash 🌫️, red mud 🏗️, and coal ⛏️. Our
                clients include power plants ⚡, mining companies 🚜, cement
                manufacturers 🏭, and other industrial facilities 🏗️ that
                require reliable transportation solutions 🚛 for their
                materials.
              </p>
              <p className="text-muted-foreground mb-6">
                We understand the unique requirements 🎯 of each industry 🏭 and
                provide tailored transportation solutions 🚛 that address
                specific challenges ⚙️ related to material handling 📦,
                environmental considerations 🌱, and operational efficiency 🔄.
              </p>
              <Button asChild className="gap-1">
                <Link href="/services/industries">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Customized Solution?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Contact our team to discuss your specific transportation
            requirements and get a tailored solution for your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
