
import React, { useEffect, useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500",
        isScrolled
          ? "bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-lg shadow-2xl shadow-purple-500/20 border-b border-purple-500/30" 
          : "bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <a
              href="#"
              className="flex items-center space-x-3 text-xl font-medium group"
            >
              <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 p-2 rounded-full border border-purple-400/30 shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300">
                <BookOpen className="w-6 h-6 text-purple-200 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="animate-fade-in bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent font-bold tracking-tight text-2xl text-shimmer">Book Writer GPT</span>
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-300/80 hover:text-purple-200 transition-all duration-300 ml-14 font-medium glow-on-hover transform hover:scale-105"
            >
              Presented By AiWebTools.Ai
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              variant="destructive"
              size="lg"
              className="glow-on-hover font-semibold tracking-wide text-base bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 shadow-2xl shadow-red-500/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-red-400/30 px-6 py-3"
              onClick={() => {
                const versionsSection = document.getElementById('versions');
                if (versionsSection) {
                  versionsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              SELECT YOUR VERSION OF BOOK WRITER GPT
            </Button>
            <Button 
              className="btn-primary glow-on-hover font-semibold tracking-wide px-6 py-3"
              onClick={() => window.open("https://kdp.amazon.com/", "_blank")}
            >
              PUBLISH YOUR BOOK ON AMAZON
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 text-purple-200 rounded-full hover:bg-purple-500/20 transition-all duration-300 border border-purple-400/30 glow-on-hover transform hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[88px] bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-lg shadow-2xl md:hidden transition-all duration-500 ease-in-out border-t border-purple-500/30",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <Button 
            variant="destructive"
            className="w-full glow-on-hover font-semibold tracking-wide bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 shadow-2xl shadow-red-500/30 transform hover:scale-105 transition-all duration-300 border border-red-400/30 py-4"
            onClick={() => {
              const versionsSection = document.getElementById('versions');
              if (versionsSection) {
                versionsSection.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }
            }}
          >
            SELECT YOUR VERSION OF BOOK WRITER GPT
          </Button>
          <Button 
            className="btn-primary w-full glow-on-hover font-semibold tracking-wide py-4"
            onClick={() => {
              window.open("https://kdp.amazon.com/", "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            PUBLISH YOUR BOOK ON AMAZON
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
