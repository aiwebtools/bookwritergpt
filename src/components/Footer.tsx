import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";
import { versions } from "@/data/versionsData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 scroll-trigger">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="footer-heading">About Book Writer GPT</h3>
            <p className="text-gray-300">
              Book Writer GPT is your AI companion for crafting compelling books.
              We provide specialized versions tailored to your unique writing needs.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="footer-icon-container hover:bg-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="footer-icon-container hover:bg-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="footer-icon-container hover:bg-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="https://github.com/username" className="footer-icon-container hover:bg-primary" aria-label="GitHub">
                <Github className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Versions Section */}
          <div>
            <h3 className="footer-heading">Explore Versions</h3>
            <ul>
              {versions.slice(0, 4).map((version, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="footer-link">
                    {version.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#versions" className="footer-link">
                  More versions <ArrowRight className="inline-block w-4 h-4 ml-1 mb-0.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="footer-heading">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300">
              Stay up to date with the latest features, updates, and special offers.
            </p>
            <div className="mt-4">
              <div className="relative">
                <input
                  type="email"
                  className="bg-secondary/50 border border-gray-700 text-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-primary"
                  placeholder="Your email address"
                />
                <Button variant="secondary" size="sm" className="absolute right-1 top-1 h-auto">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Book Writer GPT. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:support@example.com" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="Email us">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
