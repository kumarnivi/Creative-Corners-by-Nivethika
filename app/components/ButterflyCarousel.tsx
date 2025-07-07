"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const butterflies = [
  {
    title: "Blue Morpho",
    image: "/assets/images/angular.png",
    facts: [
      ["Scientific Name", "Morpho menelaus"],
      ["Region", "Central and South America"],
      ["Fact", "Its iridescent blue wings can reflect light and confuse predators."],
    ],
  },
  {
    title: "Monarch Butterfly",
    image: "/assets/images/angular.png",
    facts: [
      ["Scientific Name", "Danaus plexippus"],
      ["Region", "North America (migrates to Mexico)"],
      ["Fact", "Known for its epic annual migration of up to 3,000 miles."],
    ],
  },
  {
    title: "Monarch Butterfly",
    image: "/assets/images/angular.png",
    facts: [
      ["Scientific Name", "Danaus plexippus"],
      ["Region", "North America (migrates to Mexico)"],
      ["Fact", "Known for its epic annual migration of up to 3,000 miles."],
    ],
  },
    {
    title: "Monarch Butterfly",
    image: "/assets/images/angular.png",
    facts: [
      ["Scientific Name", "Danaus plexippus"],
      ["Region", "North America (migrates to Mexico)"],
      ["Fact", "Known for its epic annual migration of up to 3,000 miles."],
    ],
  },
  // ...add other butterfly data
];

export default function ButterflyCarousel() {
  const [selected, setSelected] = useState(0);
  const [rotation, setRotation] = useState(0);

  const next = () => {
    setSelected((prev) => (prev + 1) % butterflies.length);
    setRotation((prev) => prev + 360 / butterflies.length);
  };
  const prev = () => {
    setSelected((prev) => (prev - 1 + butterflies.length) % butterflies.length);
    setRotation((prev) => prev - 360 / butterflies.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/bg-paper.webp')] bg-cover bg-no-repeat text-black">
      <h1 className="text-3xl font-light mb-8">World Butterflies</h1>
      <div className="relative w-[300px] sm:w-[400px] aspect-[3/4.25] overflow-hidden rounded-xl border border-gray-300 shadow-lg bg-white">
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {butterflies.map((b, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `rotate(${(360 / butterflies.length) * i + 45}deg) translate(150px) rotate(90deg)`,
              }}
            >
              <Image
                src={b.image}
                alt={b.title}
                width={130}
                height={130}
                className="rotate-180 drop-shadow-lg"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 w-full p-6 bg-white/80 backdrop-blur-md">
          <article className="text-sm">
            <h2 className="text-lg font-semibold mb-2">{butterflies[selected].title}</h2>
            <ul className="space-y-1">
              {butterflies[selected].facts.map(([label, value], idx) => (
                <li key={idx}>
                  <span className="text-gray-600 font-medium">{label}:</span> {value}
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prev}
                className="text-xl hover:text-blue-600 disabled:opacity-50"
              >
                &#10094;
              </button>
              <button
                onClick={next}
                className="text-xl hover:text-blue-600 disabled:opacity-50"
              >
                &#10095;
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
