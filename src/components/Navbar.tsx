
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
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-background shadow-lg shadow-black/20" 
          : "bg-background/40 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <a
              href="#"
              className="flex items-center space-x-2 text-xl font-medium group"
            >
              <BookOpen className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
              <span className="animate-fade-in bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold tracking-tight">Book Writer GPT</span>
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors ml-8 font-medium"
            >
              Presented By AiWebTools.Ai
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              variant="destructive"
              size="lg"
              className="glow-on-hover font-semibold tracking-wide text-base"
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
              className="btn-primary glow-on-hover font-semibold tracking-wide"
              onClick={() => window.open("https://kdp.amazon.com/", "_blank")}
            >
              PUBLISH YOUR BOOK ON AMAZON
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground rounded-full hover:bg-background/20 transition-colors"
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
          "fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-md shadow-lg md:hidden transition-all duration-300 ease-in-out border-t border-border",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <Button 
            variant="destructive"
            className="w-full glow-on-hover font-semibold tracking-wide"
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
            className="btn-primary w-full mt-4 glow-on-hover font-semibold tracking-wide"
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
