"use client"
import { useState, useEffect } from 'react';
import { Code, Database, Shield, Brain } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const textToType = 'Building the digital future.';
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + textToType[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-6 flex flex-col items-center justify-center min-h-screen py-12 text-center">
        <div className="max-w-3xl">
          <div className="mb-2 inline-block">
            <div className="flex items-center justify-center gap-2 text-xs font-bold bg-gray-800 text-teal-400 py-1 px-3 rounded-full border border-gray-700 mb-4">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              <span>Available for new opportunities</span>
            </div>
            </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Sandrah Lewa</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-10">
            {typedText}<span className="animate-blink">|</span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-8">
            Computer Science graduate from JKUAT with a passion for creating innovative web solutions. 
            Skilled in modern frontend technologies and eager to explore Cybersecurity and AI.
          </p>
          
          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-teal-400 transition-colors duration-300">Next.js</span>
            <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-teal-400 transition-colors duration-300">TypeScript</span>
            <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-teal-400 transition-colors duration-300">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-teal-400 transition-colors duration-300">React</span>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
              View Projects
            </button>
            <button className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 hover:border-teal-400 hover:shadow-lg transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-3 p-2 bg-gray-700 rounded-full text-teal-400 flex items-center justify-center">
              <Code size={24} />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Web Dev</h3>
            <p className="text-sm text-gray-400">Frontend specialist</p>
          </div>
          
          <div className="p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-3 p-2 bg-gray-700 rounded-full text-blue-400 flex items-center justify-center">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Software Eng</h3>
            <p className="text-sm text-gray-400">Full-stack solutions</p>
          </div>
             {/* Interest areas */}
          <div className="p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-3 p-2 bg-gray-700 rounded-full text-purple-400 flex items-center justify-center">
              <Shield size={24} />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Cyber Security</h3>
            <p className="text-sm text-gray-400">Learning & growing</p>
          </div>
          
          <div className="p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-3 p-2 bg-gray-700 rounded-full text-yellow-400 flex items-center justify-center">
              <Brain size={24} />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">AI</h3>
            <p className="text-sm text-gray-400">Exploring possibilities</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


