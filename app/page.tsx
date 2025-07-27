import Banner from "@/components/Banner";
import Brands from "@/components/Brand";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/Call-to-action";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* <Banner /> */}
        <Navbar />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <Brands />
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CallToAction />
      <Footer />
    </>
  );
}
