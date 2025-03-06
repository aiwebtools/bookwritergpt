
import React, { useRef } from "react";
import { useEffect } from "react";

interface BookProps {
  imageUrl: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  rotation: number;
  speed: number;
  delay: number;
}

const Book: React.FC<BookProps> = ({ imageUrl, position, size, rotation, speed, delay }) => {
  const bookRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!bookRef.current) return;
    
    const book = bookRef.current;
    book.style.animation = `float ${speed}s ease-in-out infinite`;
    book.style.animationDelay = `${delay}s`;
    
    // Add slight rotation animation on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!book) return;
      const x = (e.clientX / window.innerWidth) * 10 - 5;
      const y = (e.clientY / window.innerHeight) * 10 - 5;
      book.style.transform = `translate3d(0, 0, 0) rotateX(${y}deg) rotateY(${x}deg) rotate(${rotation}deg)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rotation, speed, delay]);
  
  return (
    <div
      ref={bookRef}
      className="absolute shadow-xl rounded-md overflow-hidden transition-transform duration-300"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        transform: `rotate(${rotation}deg)`,
        perspective: "1000px",
        transformStyle: "preserve-3d",
        zIndex: 0
      }}
    >
      <img
        src={imageUrl}
        alt="Book"
        className="w-full h-full object-cover rounded-md"
        style={{
          filter: "brightness(0.7) contrast(1.2)",
          boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
        }}
      />
    </div>
  );
};

const FloatingBooks: React.FC = () => {
  const books = [
    {
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
      position: { x: 10, y: 15 },
      size: { width: 200, height: 150 },
      rotation: -15,
      speed: 6,
      delay: 0,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
      position: { x: 80, y: 25 },
      size: { width: 180, height: 130 },
      rotation: 10,
      speed: 7,
      delay: 1,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      position: { x: 65, y: 65 },
      size: { width: 220, height: 160 },
      rotation: -5,
      speed: 8,
      delay: 2,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500",
      position: { x: 15, y: 70 },
      size: { width: 190, height: 140 },
      rotation: 12,
      speed: 9,
      delay: 3,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
      position: { x: 40, y: 40 },
      size: { width: 160, height: 120 },
      rotation: -8,
      speed: 7.5,
      delay: 1.5,
    },
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default FloatingBooks;
