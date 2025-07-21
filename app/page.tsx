import Brands from "@/components/Brand";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Testimonials />
    </>
  );
}
