"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Artigos", path: "/artigos" },
    { name: "Equipamentos", path: "/equipamentos" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-matte/85 backdrop-blur-md border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="font-tech text-2xl font-bold tracking-[3px] text-cool-white flex items-center">
          <Link href="/">
            ZERO STOP <span className="text-steel ml-2 font-normal">PRECISION</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="font-subheading text-lg font-medium uppercase tracking-widest text-light-steel relative pb-1 transition-colors duration-300 hover:text-pure-white group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dark-red transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(122,21,21,0.4)]"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-light-steel cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-matte/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden flex flex-col items-center gap-6 md:hidden ${
          isMobileMenuOpen ? "py-8 opacity-100 max-h-[400px]" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="font-subheading text-xl font-medium uppercase tracking-widest text-light-steel hover:text-pure-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
