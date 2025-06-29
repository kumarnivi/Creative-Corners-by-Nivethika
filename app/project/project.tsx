'use client';

import Image from 'next/image';
import { FC } from 'react';

interface CardData {
  date: string;
  title: string;
  subtitle: string;
  progress: number;
  users: string[];
  countdown: string;
  theme: 'green' | 'orange' | 'red' | 'blue';
}

const cardColors = {
  green: {
    bgGradient: 'bg-gradient-to-br from-[#107667ed] via-[#151419] to-[#151419]',
    progress: 'bg-[#01c3a8]',
    border: 'border-[#01c3a8]',
  },
  orange: {
    bgGradient: 'bg-gradient-to-br from-[#ffb74194] via-[#151419] to-[#151419]',
    progress: 'bg-[#ffb741]',
    border: 'border-[#ffb741]',
  },
  red: {
    bgGradient: 'bg-gradient-to-br from-[#a63d2a82] via-[#151419] to-[#151419]',
    progress: 'bg-[#a63d2a]',
    border: 'border-[#a63d2a]',
  },
  blue: {
    bgGradient: 'bg-gradient-to-br from-[#00458f8f] via-[#151419] to-[#151419]',
    progress: 'bg-[#1890ff]',
    border: 'border-[#1890ff]',
  },
};

const cardData: CardData[] = [
  {
    date: 'Feb 2, 2021',
    title: 'web designing',
    subtitle: 'Prototyping',
    progress: 90,
    users: [
      '/public/assets/images/mysql.png',
      '/public/assets/images/mysql.png',
    ],
    countdown: '2 days left',
    theme: 'green',
  },
  {
    date: 'Feb 05, 2021',
    title: 'mobile app',
    subtitle: 'Shopping',
    progress: 30,
    users: [
      '/public/assets/images/mysql.png',
      '/public/assets/images/mysql.png',
    ],
    countdown: '3 weeks left',
    theme: 'orange',
  },
  {
    date: 'March 03, 2021',
    title: 'dashboard',
    subtitle: 'Medical',
    progress: 50,
    users: [
      '/public/assets/images/mysql.png',
      '/public/assets/images/mysql.png',
    ],
    countdown: '3 weeks left',
    theme: 'red',
  },
  {
    date: 'March 08, 2021',
    title: 'web designing',
    subtitle: 'Wireframing',
    progress: 20,
    users: [
      '/public/assets/images/mysql.png',
      '/public/assets/images/mysql.png',
    ],
    countdown: '3 weeks left',
    theme: 'blue',
  },
];

const ProjectCards: FC = () => {
  if (!cardData || cardData.length === 0) {
    return <p className="text-center text-white">No project data available.</p>;
  }

  return (
    <section className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto py-20 px-4">
      {cardData.map((card, idx) => {
        const color = cardColors[card.theme] ?? cardColors.green;

        return (
          <div
            key={idx}
            className={`relative w-80 min-h-80 text-white text-center rounded-[2.25rem] shadow-2xl p-4 ${color.bgGradient} border-2 ${color.border}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center text-sm mb-6">
              <span className="text-gray-300">{card.date}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Body */}
            <div>
              <h3 className="text-xl font-semibold capitalize mb-1">{card.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{card.subtitle}</p>

              <div className="text-left text-sm">
                <span className="block font-semibold mb-1">Progress</span>
                <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${color.progress}`}
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
                <span className="block text-right mt-1">{card.progress}%</span>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#151419] border-t border-neutral-800 rounded-b-[2.25rem] px-6 py-4 flex justify-between items-center">
              <ul className="flex -space-x-4">
                {card.users?.map((user, i) => (
                  <li key={i}>
                    <Image
                      src={user}
                      alt={`user-${i}`}
                      width={30}
                      height={30}
                      className="rounded-full border border-neutral-700"
                    />
                  </li>
                ))}
                <li className={`w-6 h-6 flex items-center justify-center rounded-full ${color.progress} ml-4`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
              <a
                href="#"
                className="text-xs bg-[#222127] px-4 py-1 rounded-full hover:opacity-80"
              >
                {card.countdown}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectCards;
