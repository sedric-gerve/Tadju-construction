import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Catalogue />
        <Services />
        <About />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
