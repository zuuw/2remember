'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; 


export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Donate", href: "/donate" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 top-6 z-50 w-[92%] max-w-3xl px-6 py-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center justify-between transition-all duration-300
        ${isScrolled ? "bg-purple-700/20 shadow-xl" : "bg-purple-600/50"}`}
    >
      {/* Logo */}
      <div className="font-bold text-2xl tracking-wide">2Remember</div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`transition hover:opacity-80 relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:rounded-full after:transition-all
              ${ pathname === link.href
                ? "after:bg-white"
                : "after:bg-transparent hover:after:bg-white/60"}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden p-2 rounded-xl bg-white/20 hover:bg-white/30 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-full bg-purple-700/95 rounded-2xl shadow-xl py-4 px-6 flex flex-col gap-4 text-lg md:hidden backdrop-blur-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`transition hover:opacity-80 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:rounded-full after:transition-all
                ${(typeof window !== 'undefined') && window.location.pathname === link.href
                  ? "after:bg-white"
                  : "after:bg-transparent hover:after:bg-white/60"}`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
