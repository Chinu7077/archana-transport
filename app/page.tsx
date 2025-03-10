import Link from "next/link";
import Image from "next/image";



import {
  ArrowRight,
  CheckCircle,
  Truck,
  Train,
  Factory,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageSlider from "..//components/ImageSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
  className="relative bg-primary py-20 md:py-28 bg-cover bg-center" 
  style={{ backgroundImage: "url('/ban2.jpg')" }}
>
  <div className="container grid md:grid-cols-2 gap-8 items-center bg-black/50 p-6 rounded-lg">
    <div className="text-white space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        The Transport Solutions
      </h1>
      <p className="text-lg md:text-xl opacity-90 max-w-md">
        Specialized transportation of Ash, Red-Mud, and Coal using Hyva
        Bulkers and Trains.
        <span className="block text-3xl font-bold leading-tight mt-2">
          On-time, every time
        </span>
      </p>
      <div className="flex flex-wrap gap-4">
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
        >
          <Link href="/contact">Get a Quote</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-white text-primary hover:bg-white/90"
        >
          <Link href="/services">Our Services</Link>
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Transport Services
            </h2>
            <p className="text-muted-foreground">
              We provide specialized transportation solutions for various
              industries with our fleet of Hyva Bulkers and train logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted rounded-lg p-6 text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Hyva & Bulker Transport</h3>
              <p className="text-muted-foreground">
                Efficient transportation of bulk materials with our modern Hyva
                bulker fleet.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6 text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Train className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Train Logistics</h3>
              <p className="text-muted-foreground">
                Large-scale transportation solutions using our train logistics
                network.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6 text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Industries Served</h3>
              <p className="text-muted-foreground">
                Specialized solutions for Ash,Red-Mud,coal and other industrial
                materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Hear from businesses that rely on our transportation services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Archana Transport has been our trusted partner for transporting
                Ash and Red-Mud for over 2 years. Their reliability and
                professionalism have significantly improved our supply chain
                efficiency."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">RN</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ranjit Nayak</h4>
                  <p className="text-sm text-muted-foreground">
                    Site Incharge,
                    <p>Gargsons Logistics Private Limited.</p>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "The team at Archana Transport understands the unique challenges
                of Ash and Red-Mud transportation. Their specialized fleet and
                experienced drivers ensure safe and efficient delivery every
                time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold">Satya</h4>
                  <p className="text-sm text-muted-foreground">
                    Logistics Manager,
                    <p>Ashtech India Private Limited</p>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "We've worked with several transport companies, but Archana
                Transport stands out for their commitment to timely delivery and
                excellent communication throughout the transportation process."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">AN</span>
                </div>
                <div>
                  <h4 className="font-semibold">Arbind Nanda</h4>
                  <p className="text-sm text-muted-foreground">
                    CEO <p>Afar Infra India Pvt. Ltd</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Archana Transport?
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Experienced Team</h3>
                    <p className="text-muted-foreground">
                      Years of experience in specialized material transport.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Modern Fleet</h3>
                    <p className="text-muted-foreground">
                      Well-maintained Hyva Bulkers and train logistics
                      solutions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Safety First</h3>
                    <p className="text-muted-foreground">
                      Strict adherence to safety protocols and regulations.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Reliable Service</h3>
                    <p className="text-muted-foreground">
                      Timely deliveries and professional handling of materials.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-8">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[690px]  rounded-lg overflow-hidden">
              <ImageSlider />
            </div>
          </div>
        </div>
      </section>
     

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your transportation needs and get a
            customized quote for your business.
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
