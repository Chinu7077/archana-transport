import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BiocyclePage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center py-16 md:py-24">
      <div className="container max-w-4xl text-center px-4">
        <div className="mb-8">
          <Image
            src="/ABP.png?height=300&width=300"
            alt="Archana Biocycle Logo"
            width={300}
            height={300}
            className="mx-auto"
          />
        

        </div>

       

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Archana Biocycle Private Limited</h1>

        <div className="bg-primary/10 rounded-lg p-8 mb-8">
          <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            We're working on something exciting! Our new sustainable biocycle solutions will be launching soon. Stay
            tuned for updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get Notified at Launch
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Archana Transport
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-muted-foreground">
          <h3 className="text-xl font-semibold mb-4">About Archana Biocycle</h3>
          <p className="mb-4">
            Archana Biocycle Private Limited is our upcoming venture focused on sustainable waste management and
            recycling solutions. We're committed to creating eco-friendly alternatives for businesses looking to reduce
            their environmental impact.
          </p>
          <p>
            For inquiries about our upcoming services, please contact us at{" "}
            <span className="text-primary">biocycle@archanatransport.com</span>
          </p>
        </div>
      </div>
    </div>
  )
}

