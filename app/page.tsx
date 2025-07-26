import Banner from "@/components/Banner";
import Brands from "@/components/Brand";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

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
      <div id="brands">
        <Brands />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
