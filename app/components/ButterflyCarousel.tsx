"use client";
import { useState } from "react";
import Image from "next/image";

const newsData = [
  {
    title: "Tea E-commerce App",
    date: "Jan 29, 2018",
    excerpt: [
      { title: "React.js" },
      { title: "Nodejs" },
      { title: "mongodb" },
    ],
    src: "/assets/images/comrade.png",
    href: "#",
    sourceCode: "link",
  },
  {
    title: "Leave Applay App",
    date: "Jan 29, 2018",
    excerpt: [{ title: "Responsive UI with Next.js" }],
    src: "/assets/images/Leav_app.png",
    href: "#",
    sourceCode: "link",
  },
  {
    title: "Book Store",
    date: "Jan 29, 2018",
    excerpt: [
      { title: "Responsive UI with Next.js" },
      { title: "Admin Dashboard" },
    ],
    src: "/assets/images/BookStore.png",
    href: "#",
    sourceCode: "Link",
  },
];

export default function NewsCarousel() {
  const [selected, setSelected] = useState(0);

  const next = () => setSelected((prev) => (prev + 1) % newsData.length);
  const prev = () => setSelected((prev) => (prev - 1 + newsData.length) % newsData.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1209] text-white">
      <h1 className="text-3xl font-light mb-8">My Projects</h1>

      <div className="relative w-[90%] max-w-md rounded-2xl border border-white/40 bg-white shadow-lg overflow-hidden transition-all duration-500 text-black">
        {/* Top Section with Image */}
        <div className="relative bg-gray-200 pb-24 rounded-b-[80px]">
          <div className="absolute inset-x-0 top-6 mx-auto w-48 h-48 flex items-center justify-center group transition-all duration-500 ease-in-out">
            <Image
              key={newsData[selected].src}
              src={newsData[selected].src}
              alt={newsData[selected].title}
              width={160}
              height={160}
              className="drop-shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

        {/* Bottom Paper Section */}
        <div className="bg-[url('/bg-paper.webp')] bg-cover bg-no-repeat px-6 pt-8 pb-10 transition-all duration-500">
          <article className="text-sm text-black animate-fade-in">
            <h2 className="text-xl font-semibold mb-1">{newsData[selected].title}</h2>
            <p className="text-gray-600 text-sm mb-3">{newsData[selected].date}</p>
            <ul className="list-disc list-inside space-y-1">
              {newsData[selected].excerpt.map((item, idx) => (
                <li key={idx}>{item.title}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-6">
              <a
                href={newsData[selected].href}
                className="text-sm text-blue-600 underline"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                href={newsData[selected].sourceCode}
                className="text-sm text-blue-600 underline"
                target="_blank"
              >
                Source Code
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-6 text-xl">
              <button onClick={prev} className="hover:text-black text-gray-800">&#10094;</button>
              <button onClick={next} className="hover:text-black text-gray-800">&#10095;</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
