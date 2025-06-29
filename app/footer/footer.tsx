// components/Footer.tsx
'use client';

import Link from 'next/link';
import { FaFacebookF, FaMedium, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#930e66] py-4 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-white text-sm mb-2 sm:mb-0">@ Nivethika | 2024</div>
          <div className="flex gap-4">
            <Link
              href="https://web.facebook.com/nivethika.sivakumar.14"
              target="_blank"
              className="w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-[#24262b] flex items-center justify-center rounded-full transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://medium.com/@nivethikashivakumar56"
              target="_blank"
              className="w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-[#24262b] flex items-center justify-center rounded-full transition"
            >
              <FaMedium />
            </Link>
            <Link
              href="https://github.com/kumarnivi"
              target="_blank"
              className="w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-[#24262b] flex items-center justify-center rounded-full transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nivethikashivakumar/"
              target="_blank"
              className="w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-[#24262b] flex items-center justify-center rounded-full transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;