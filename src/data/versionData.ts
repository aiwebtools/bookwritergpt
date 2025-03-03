
export interface Version {
  name: string;
  title: string;
  description: string;
  color: string;
  textColor: string;
  descriptionColor: string;
  accentColor: string;
  buttonColor: string;
  features: string[];
  rating: number; // Rating out of 5
}

export const versions: Version[] = [
  {
    name: "V1",
    title: "Page by Page",
    description: "Writes each page individually and compiles into a document, perfect for detailed storytelling.",
    color: "bg-blue-800/30 border-blue-700/50",
    textColor: "text-slate-200",
    descriptionColor: "text-slate-300",
    accentColor: "text-blue-400",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    rating: 4.6, // Updated from 4.5 to 4.6
    features: [
      "Page-by-page writing approach",
      "Document compilation after each page",
      "5000 words per page",
      "Perfect continuity between pages",
      "Detailed descriptions and dialogue"
    ]
  },
  {
    name: "V2",
    title: "Shorter Chapters",
    description: "Creates shorter, more concise chapters with document compilation for a faster writing experience.",
    color: "bg-purple-800/30 border-purple-700/50",
    textColor: "text-slate-200",
    descriptionColor: "text-slate-300",
    accentColor: "text-purple-400",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    rating: 4.2,
    features: [
      "Shorter chapter format",
      "Document compilation",
      "Faster writing process",
      "Concise storytelling",
      "Great for shorter books"
    ]
  },
  {
    name: "V3",
    title: "Original Fast",
    description: "The original faster chapter-by-chapter version without document compilation.",
    color: "bg-amber-800/30 border-amber-700/50",
    textColor: "text-slate-200",
    descriptionColor: "text-slate-300",
    accentColor: "text-amber-400",
    buttonColor: "bg-amber-600 hover:bg-amber-700",
    rating: 4.0,
    features: [
      "Chapter-by-chapter approach",
      "No document compilation",
      "Faster writing speed",
      "Good for first drafts",
      "Original 2023 version"
    ]
  },
  {
    name: "V4",
    title: "Segmented Chapters",
    description: "Breaks each chapter into two or more individualized parts for more detailed writing.",
    color: "bg-emerald-800/30 border-emerald-700/50",
    textColor: "text-slate-200",
    descriptionColor: "text-slate-300",
    accentColor: "text-emerald-400",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    rating: 4.3,
    features: [
      "Segmented chapter approach",
      "No document compilation",
      "Detailed chapter sections",
      "Original 2023 version",
      "Longer chapter format"
    ]
  },
  {
    name: "V5",
    title: "Enhanced Chapters",
    description: "Similar to V3 with slightly different directions for enhanced chapter writing.",
    color: "bg-rose-800/30 border-rose-700/50",
    textColor: "text-slate-200",
    descriptionColor: "text-slate-300",
    accentColor: "text-rose-400",
    buttonColor: "bg-rose-600 hover:bg-rose-700",
    rating: 4.1,
    features: [
      "Enhanced chapter writing",
      "No document compilation",
      "Original 2023 version",
      "Improved character development",
      "Better story pacing"
    ]
  },
  {
    name: "V6",
    title: "Base Original",
    description: "The base original model similar to V3 and V5 with different instructions.",
    color: "bg-indigo-800/30 border-indigo-700/50",
    textColor: "text-slate-200",
    descriptionColor: "text-slate-300",
    accentColor: "text-indigo-400",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    rating: 4.2, // Updated from 3.9 to 4.2
    features: [
      "Base original model",
      "No document compilation",
      "Original 2023 version",
      "Standard chapter format",
      "Straightforward writing style"
    ]
  },
  {
    name: "V7",
    title: "Dialogue Focus",
    description: "Similar to V1 with a particular focus on dialogue enhancement and document compilation.",
    color: "bg-cyan-800/30 border-cyan-700/50",
    textColor: "text-slate-200",
    descriptionColor: "text-slate-300",
    accentColor: "text-cyan-400",
    buttonColor: "bg-cyan-600 hover:bg-cyan-700",
    rating: 4.8, // Updated from 4.7 to 4.8
    features: [
      "Enhanced dialogue focus",
      "Document compilation",
      "Page-by-page approach",
      "Character-driven narratives",
      "2024 version"
    ]
  }
];
