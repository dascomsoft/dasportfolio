"use client"

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dassi.Tech
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="#about" 
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              ABOUT
            </Link>
            <Link 
              href="#about" 
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              SKILLS
            </Link>
            <Link 
              href="#projects" 
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              PROJECTS
            </Link>
            <Link 
              href="#contact" 
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              CONTACT
            </Link>
            <Link 
              href="https://docs.google.com/document/d/1wVRUXOo3gmSLZtWxaHyPEeus11QWEjMWdPkPKK6wcAE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-md text-sm font-bold bg-amber-500 text-slate-900 hover:bg-amber-600 transition-colors"
            >
              RESUME
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="#about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="#about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                SKILLS
              </Link>
              <Link 
                href="#projects" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
              <Link 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <Link 
                href="https://docs.google.com/document/d/1wVRUXOo3gmSLZtWxaHyPEeus11QWEjMWdPkPKK6wcAE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-bold bg-amber-500 text-slate-900 hover:bg-amber-600 transition-colors"
              >
                RESUME
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}