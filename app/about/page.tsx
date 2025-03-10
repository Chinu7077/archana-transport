import Image from "next/image";
import Video from "./video";

import { CheckCircle, Award, Users, Clock } from "lucide-react";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Archana Transport
            </h1>
            <p className="text-xl opacity-90">
              Your trusted partner for specialized transportation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
         
            <Video />
   
    
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Archana Transport was established with a vision to provide
                specialized transportation solutions for industries dealing with
                ash, red mud, coal, and other bulk materials. Over the years, we
                have grown to become a trusted name in the transportation
                industry.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey began with a small fleet of vehicles, and today we
                operate a large fleet of Hyva Bulkers and have established
                strong partnerships with train logistics providers to offer
                comprehensive transportation solutions.
              </p>
              <p className="text-muted-foreground">
                We take pride in our commitment to safety, reliability, and
                customer satisfaction, which has helped us build long-lasting
                relationships with our clients across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To provide efficient, safe, and reliable transportation
                solutions for bulk materials, helping our clients optimize their
                supply chain operations while maintaining the highest standards
                of service quality and environmental responsibility.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Deliver exceptional service quality</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Maintain highest safety standards</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Optimize transportation efficiency</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To be the leading provider of specialized transportation
                solutions in the region, recognized for our innovation,
                reliability, and commitment to sustainability, while
                continuously expanding our service offerings to meet evolving
                industry needs.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Industry leadership through innovation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>Sustainable transportation practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide our operations and relationships with
              clients, partners, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our operations, from
                vehicle maintenance to customer service.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Teamwork</h3>
              <p className="text-muted-foreground">
                We believe in the power of collaboration and teamwork to deliver
                exceptional results for our clients.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Reliability</h3>
              <p className="text-muted-foreground">
                We are committed to delivering on our promises and ensuring
                timely and reliable service.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct our business with honesty, transparency, and the
                highest ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Experience & Expertise
              </h2>
              <p className="text-muted-foreground mb-4">
                With years of experience in the transportation industry, we have
                developed specialized expertise in handling various types of
                bulk materials, including ash, red mud, and coal.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team consists of skilled professionals who understand the
                unique requirements of different industries and can provide
                tailored transportation solutions to meet specific needs.
              </p>
              <p className="text-muted-foreground">
                We continuously invest in training our staff and upgrading our
                fleet to ensure that we stay at the forefront of the industry
                and deliver the best possible service to our clients.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/1.jpg?height=400&width=600"
                alt="Archana Transport Operations"
                fill
                className="object-cover"
              />
            
            </div>
          </div>
         
        </div>
      </section>
    
    </>
  );
}
