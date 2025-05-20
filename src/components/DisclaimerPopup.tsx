
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DisclaimerPopupProps {
  onAccept: () => void;
}

const DisclaimerPopup = ({ onAccept }: DisclaimerPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="relative w-11/12 max-w-md rounded-2xl bg-gradient-to-br from-secondary to-background p-1"
      >
        <div className="relative rounded-xl bg-background/95 p-6 backdrop-blur-sm">
          <div className="absolute -top-3 -right-3 h-20 w-20 rotate-12 bg-primary/20 blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 h-20 w-20 -rotate-12 bg-primary/20 blur-2xl"></div>
          
          <h2 className="mb-4 bg-gradient-to-r from-primary to-purple-300 bg-clip-text text-center font-serif text-2xl font-bold tracking-tight text-transparent">
            Disclaimer
          </h2>
          
          <div className="mb-6 space-y-4 text-sm leading-relaxed text-gray-300">
            <p>
              By using Book Writer GPT, you agree that the content generated is for creative assistance only. You are responsible for reviewing and editing any AI-generated content.
            </p>
            <p>
              Book Writer GPT may occasionally produce content that requires additional editing to meet your specific requirements and standards.
            </p>
            <p className="font-semibold text-primary-foreground">
              <span className="text-primary">Usage Information:</span> Unrestricted usage is available for free with a ChatGPT Plus subscription or higher. Free accounts have limited interactions that reset periodically.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={onAccept}
              className="group relative overflow-hidden rounded-lg px-8 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wider">
                <Check className="h-5 w-5" />
                I AGREE
              </span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DisclaimerPopup;
