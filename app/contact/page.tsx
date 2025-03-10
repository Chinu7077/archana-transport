"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our team for inquiries and quotes
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 84580 35964</p>
              <p className="text-muted-foreground">+91 78558 77317</p>
            </div>

            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@archanatransport.com</p>
              <p className="text-muted-foreground">
                sales@archanatransport.com
              </p>
              <p className="text-muted-foreground">
                archanatransportrgd@gmail.com
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                MPR Nagar, Sai Priya Nagar, Rayagada, Odisha-765001
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                  <p>
                    Your message has been sent successfully. Our team will get
                    back to you shortly.
                  </p>
                  <Button
                    className="mt-4"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      value={formState.service}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Hyva-bulker">
                          Hyva & Bulker Transport
                        </SelectItem>
                        <SelectItem value="train-logistics">
                          Train Logistics
                        </SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <div>
                <h2 className="text-2xl font-bold mb-6">📍 Our Location</h2>
                <div className="bg-muted h-[400px] rounded-lg overflow-hidden relative">
                  {/* Clickable Google Map */}
                  <a
                    href="https://goo.gl/maps/xZp8mZCmErRPB5Kc9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label="Open Google Maps"
                  />
                  <iframe
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.235604206128!2d83.40721669521179!3d19.190056428152346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b44c83e3ae5d5%3A0xf57d010897bb59f4!2sSai%20Priya%20Nagar%2C%20Rayagada%2C%20Odisha!5e0!3m2!1sen!2sin!4v1741499619623!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-4 text-muted-foreground text-center">
                🏢 {" "}
                  <strong>
                    MPR Nagar, Sai Priya Nagar, Rayagada, Odisha-765001
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our transportation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold mb-2">What areas do you serve?</h3>
              <p className="text-sm text-muted-foreground">
                We primarily operate throughout industrial regions, serving
                power plants, mining sites, and manufacturing facilities across
                the country.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                How do you ensure material safety during transport?
              </h3>
              <p className="text-sm text-muted-foreground">
                Our vehicles are specially designed for the materials we
                transport, with features to prevent spillage and contamination.
                We also follow strict safety protocols.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                What is the typical response time for inquiries?
              </h3>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during
                business days. For urgent matters, we recommend calling our
                office directly.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold mb-2">
                Do you offer long-term transportation contracts?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes, we specialize in long-term partnerships with industrial
                clients and can create customized transportation plans based on
                your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
