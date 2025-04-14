import { useState, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300; // Offset to trigger a bit early

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-text bg-background">
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />
        <main>
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <ResumeSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer scrollToSection={scrollToSection} />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
