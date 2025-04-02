"use client";
import { useState, useEffect } from "react";
import { SiNextdotjs, SiTypescript, SiReact } from "react-icons/si";
import { FaCode, FaDatabase, FaShieldAlt, FaBrain } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export function TypingEffect({ text }: { text: string }) {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-10">
      {typedText}
      <span className="animate-blink">|</span>
    </h2>
  );
}

export function TechBadge({ icon: Icon, color }: { icon: any; color: string }) {
  return (
    <span className="p-3 rounded-full border border-gray-700 hover:border-teal-400 hover:cursor-pointer transition-transform duration-300 hover:scale-110">
      <Icon size={30} className={color} />
    </span>
  );
}

export function InterestCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400 hover:cursor-pointer transition-all duration-300">
      <div className={`w-12 h-12 mx-auto mb-3 p-2 bg-gray-700 rounded-full flex items-center justify-center text-${color}-400`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className="relative container mx-auto px-6 flex flex-col items-center justify-center min-h-screen py-12 text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Sandrah Lewa</span>
          </h1>
          <TypingEffect text="Building the digital future." />
          <p className="text-lg text-gray-400 mb-8">
            Computer Science student at JKUAT with a passion for creating innovative web solutions.
          </p>

          {/* Tech Stack with Colored Icons */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-10">
            <TechBadge icon={RiNextjsFill} color="text-black dark:text-white" />
            <TechBadge icon={SiTypescript} color="text-blue-500" />
            <TechBadge icon={RiTailwindCssFill} color="text-teal-400" />
            <TechBadge icon={SiReact} color="text-cyan-400" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
              View Projects
            </button>
            <button className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 hover:border-teal-400 hover:shadow-lg transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Interest Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <InterestCard icon={FaCode} title="Web Dev" description="Frontend specialist" color="teal" />
          <InterestCard icon={FaDatabase} title="Software Eng" description="Full-stack solutions" color="blue" />
          <InterestCard icon={FaShieldAlt} title="Cyber Security" description="Learning & growing" color="purple" />
          <InterestCard icon={FaBrain} title="AI" description="Exploring possibilities" color="yellow" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
