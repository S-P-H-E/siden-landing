import Banner from "@/components/Banner";
import Brands from "@/components/Brand";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Banner />
        <Navbar />
      </div>
      <Hero />
      <Brands />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
