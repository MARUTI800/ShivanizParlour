import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrainingPrograms from "@/components/TrainingPrograms";
import Reviews from "@/components/Reviews";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  const openBooking = () => {
    window.open("https://wa.me/917710235502?text=Hi%20Shivani'z%20Beauty%20Parlour,%20I%20would%20like%20to%20book%20an%20appointment.", "_blank");
  };

  const openEnrollment = () => {
    window.open("https://wa.me/917710235502?text=Hi%20Shivani'z%20Beauty%20Parlour,%20I%20would%20like%20to%20enroll%20in%20a%20training%20program.", "_blank");
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Expose globally so our scrollTo utility can use it
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="App font-body bg-base text-ink">
      <Toaster position="top-center" richColors theme="light" />
      <Navbar onBook={openBooking} onEnroll={openEnrollment} dark />
      <main>
        <Hero onBook={openBooking} onEnroll={openEnrollment} />
        <About />
        <Services onBook={openBooking} />
        <TrainingPrograms onEnroll={openEnrollment} />
        <Reviews />
        <Story />
        <Contact />
      </main>
      <Footer onBook={openBooking} />
    </div>
  );
}

export default App;
