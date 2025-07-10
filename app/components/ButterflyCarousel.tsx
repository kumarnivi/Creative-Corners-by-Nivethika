"use client";
import { useState } from "react";
import Image from "next/image";

const butterflies = [
  {
    title: "Blue Morpho",
    image: "/assets/images/morpho.png",
    facts: [
      ["Scientific Name", "Morpho menelaus"],
      ["Region", "Central and South America"],
      ["Fact", "Its iridescent blue wings can reflect light and confuse predators."],
    ],
  },
  {
    title: "Rajah Brooke’s Birdwing",
    image: "/assets/images/Flowbite.png",
    facts: [
      ["Scientific Name", "Trogonoptera brookiana"],
      ["Region", "Borneo, Malaysia"],
      ["Fact", "Named after James Brooke, the “White Rajah” of Sarawak."],
    ],
  },
];

export default function ButterflyCarousel() {
  const [selected, setSelected] = useState(0);

  const next = () => setSelected((prev) => (prev + 1) % butterflies.length);
  const prev = () => setSelected((prev) => (prev - 1 + butterflies.length) % butterflies.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1209] text-black">
      <h1 className="text-3xl font-light mb-8 text-white">World Butterflies</h1>

      <div className="relative w-[90%] max-w-md rounded-2xl border border-white/40 bg-white shadow-lg overflow-hidden transition-all duration-500">
        {/* Top Green Section with Image */}
        <div className="relative bg-green-200 pb-24 rounded-b-[80px]">
          <div className="absolute inset-x-0 top-6 mx-auto w-48 h-48 flex items-center justify-center group transition-all duration-500 ease-in-out">
            <Image
              key={butterflies[selected].image}
              src={butterflies[selected].image}
              alt={butterflies[selected].title}
              width={160}
              height={160}
              className="drop-shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

        {/* Bottom Crumpled Section */}
        <div className="bg-[url('/bg-paper.webp')] bg-cover bg-no-repeat px-6 pt-8 pb-10 transition-all duration-500">
          <article className="text-sm text-black animate-fade-in">
            <h2 className="text-xl font-semibold mb-3">{butterflies[selected].title}</h2>
            <ul className="list-disc list-inside space-y-1">
              {butterflies[selected].facts.map(([label, value], idx) => (
                <li key={idx}>
                  <span className="text-gray-600 font-semibold">{label}:</span> {value}
                </li>
              ))}
            </ul>
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
