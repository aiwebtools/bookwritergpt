
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

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Versions", href: "#versions" },
    { label: "Examples", href: "#examples" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <a
              href="#"
              className="flex items-center space-x-2 text-xl font-medium"
            >
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="animate-fade-in bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Book Writer GPT</span>
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors ml-8"
            >
              Presented By AiWebTools.Ai
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button className="btn-primary glow-on-hover">Get Started</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="btn-primary w-full mt-4 glow-on-hover">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
