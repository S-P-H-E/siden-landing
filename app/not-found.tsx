import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center gap-3 p-4 md:p-20 w-full max-w-4xl mx-auto relative overflow-hidden">
      
      {/* Header with Logo and Navigation */}
      <div className="w-full flex items-center justify-between mb-8 z-10">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/Logo.svg" alt="Siden Logo" className="brightness-0" width={25} height={25} />
          <h1 className="text-2xl font-bold">Siden</h1>
        </Link>
        <Link 
          href="/"
          className="text-[var(--accent)] hover:underline font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main content */}
      <div className="text-center w-full z-10">
        {/* 404 Number */}
        <div className="mb-6">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[var(--accent)] leading-none">404</h2>
        </div>
        
        {/* Error message */}
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[var(--foreground)]">
          Page Not Found
        </h3>
        
        <p className="text-[var(--description)] text-base md:text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
      </div>

      {/* Content Card */}
      <div className="p-6 md:p-10 shadow-lg rounded-2xl border border-[#e8e8e8] space-y-6 w-full max-w-2xl bg-white/80 backdrop-blur-sm">
        <div className="space-y-4">
          <h4 className="text-xl md:text-2xl font-semibold text-[var(--foreground)]">
            What you can do:
          </h4>
          
          <ul className="list-disc list-inside text-[var(--description)] space-y-2 text-left">
            <li>Check the URL for any typos</li>
            <li>Use the navigation menu to find what you&apos;re looking for</li>
            <li>Return to our homepage to explore our services</li>
            <li>Contact our support team for assistance</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button href="/">
            Back to Home
          </Button>
          <Link 
            href="https://siden.ai/auth?mode=signup"
            className="w-fit flex items-center gap-2 rounded-md border-2 border-[var(--accent)] text-[var(--accent)] px-6 py-3 font-semibold hover:bg-[var(--accent)] hover:text-white transition-colors duration-300"
          >
            Join Waitlist
          </Link>
        </div>
        
        {/* Additional help text */}
        <div className="pt-4 border-t border-[var(--border)]">
          <p className="text-[var(--description)] text-sm">
            Need help? Contact us at{" "}
            <a 
              href="mailto:support@siden.ai" 
              className="text-[var(--accent)] hover:underline"
            >
              support@siden.ai
            </a>
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-[var(--accent)] opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 md:w-32 md:h-32 bg-[var(--accent)] opacity-5 rounded-full blur-xl"></div>
    </div>
  );
} 