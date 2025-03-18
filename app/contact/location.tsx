"use client";

export default function ContactPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📍 Our Location</h2>

      {/* Clickable Google Maps Link */}
      <p className="text-center mb-2">
      <a href="https://www.google.com/maps/place/Sai+Priya+Nagar,+Rayagada,+Odisha/@19.189865,83.410044,17z/" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="absolute inset-0 z-10" 
   aria-label="Open Google Maps">
   Open Google Maps
</a>
      </p>

      {/* Google Maps Embed */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
      <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1743909151774!2d83.411744!3d19.187584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b44c83e3ae5d5%3A0xf57d010897bb59f4!2sSai%20Priya%20Nagar%2C%20Rayagada%2C%20Odisha!5e0!3m2!1sen!2sin!4v1742261595524!5m2!1sen!2sin" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>

      </div>
    </div>
  );
}
