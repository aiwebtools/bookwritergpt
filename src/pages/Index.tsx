
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Versions from "@/components/Versions";
import Examples from "@/components/Examples";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the scroll-trigger class
    document.querySelectorAll(".scroll-trigger").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".scroll-trigger").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ComparisonSection />
        <Features />
        <Versions />
        <Examples />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
