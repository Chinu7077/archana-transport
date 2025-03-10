"use client";

export default function ContactPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📍 Our Location</h2>

      {/* Clickable Google Maps Link */}
      <p className="text-center mb-2">
        <a
          href="https://goo.gl/maps/xZp8mZCmErRPB5Kc9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Open in Google Maps
        </a>
      </p>

      {/* Google Maps Embed */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-[450px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.623112673485!2d83.41004358864984!3d19.189865727131252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b44c83e3ae5d5%3A0xf57d010897bb59f4!2sSai%20Priya%20Nagar%2C%20Rayagada%2C%20Odisha!5e0!3m2!1sen!2sin!4v1741522463870!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
