'use client';
import styles from './navbar.module.css';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking a link (optional UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-2 left-0 right-0 z-[1000] mx-auto rounded-[10px] transition-all duration-300 bg-white/20 backdrop-blur-md shadow-lg
    w-full max-w-[1200px] px-4
    md:left-[72px] md:w-auto md:mx-0 mt-[10px]
  `}
    id={styles.nav}
    >
      <div className="container mx-auto px-4"
      
     >
        <div className="flex justify-between items-center py-[8px]">
          {/* Logo */}
          <Link href="/" className="text-white text-[18px] font-bold">
            &lt; Dev
            <span className={`${isScrolled ? 'text-pink-500' : ''}`}>
              eloper /&gt;
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 items-center text-white text-sm">
            {['home', 'about', 'skills', 'experience', 'project'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={handleLinkClick}
                  className="relative group capitalize px-[20px] py-[3px]"
                >
                  {section}
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            {/* Scroll Down Text */}
            <span className="text-white text-xs select-none">Scroll down</span>

            {/* Hamburger Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-white text-3xl focus:outline-none"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          {/* Contact Button - hide on mobile */}
          <div className="hidden md:block">
            <button className="bg-[#930e66] text-white px-6 py-2 rounded-md text-[16px] font-semibold hover:bg-[#930e66]/80 transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-md shadow-lg rounded-b-md mx-[10px] px-4 pb-4">
          <ul className="flex flex-col gap-3 text-black text-base">
            {['home', 'about', 'skills', 'experience', 'project'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={handleLinkClick}
                  className="block capitalize py-2 hover:text-pink-500 transition"
                >
                  {section}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full bg-[#930e66] text-white px-6 py-2 rounded-md text-[16px] font-semibold hover:bg-[#930e66]/80 transition mt-2">
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
