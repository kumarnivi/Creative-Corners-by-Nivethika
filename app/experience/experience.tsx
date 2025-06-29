'use client';

import Image from 'next/image';
import { useState } from 'react';

const experienceData = [


  {
    title: 'Assistan Lecture at Uki',
    date: 'Aug-2024 to Currently',
    description: 'I have extensive experience as a software engineer at Moodeforcode, specializing in website development. using Angular, Node.js, and MySQL. My role involves designing, implementing, and maintaining robust web applications, ensuring seamless user experiences and efficient data management.',
    open: false,
    location: "Kilinochchi",
    link: "https://www.uki.life/",
    linkName: "uki.life"
  },
  {
    title: 'Software Engineer  @ MFC',
    date: 'Aug-2023 to Feb-2024',
    description: 'I have extensive experience as a software engineer at Moodeforcode, specializing in website development. using Angular, Node.js, and MySQL. My role involves designing, implementing, and maintaining robust web applications, ensuring seamless user experiences and efficient data management.',
    open: false,
    location: "Colombo",
    link: "https://kumarnivi.github.io/my_portfolio/edu.html",
    linkName: "moodeforcode.com"
  },
  {
    title: 'UKi Technology School',
    date: 'Nov-2023 to June-2024',
    description: 'I studied full-stack development at Uki Coding School, where I learned website development using React, Node.js, and MongoDB. I developed real-world projects and gained basic business management and English skills, enhancing my overall proficiency in web development and project execution.',
    open: false,
    location: "Jaffna",
    link: "https://www.uki.life/",
    linkName: "Uki.life"
  },
  {
    title: 'Jarld Finance Company',
    date: 'Feb-2021 to Aug-2022',
    description: 'In my role as a cashier and sales marketign at Jarld Finance Company, I applied basic business ethics to ensure fair transactions and customer satisfaction. I navigated company structures efficiently, adhering to protocols to maintain operational integrity. My leadership was evident in guiding team efforts towards achieving sales targets and delivering exceptional service.',
    open: false,
    location: "Jaffna",
    link: "https://web.facebook.com/profile.php?id=100064703089749",
    linkName: "Jarlda Enterprises"
  }
];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-10"
      style={{ backgroundImage: 'url(/assets/images/aboutlap.avif)' }}
    >
      <div className="absolute inset-0 bg-[#340625e8] z-0" />
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-white text-3xl sm:text-4xl font-bold uppercase relative inline-block font-[cursive]">

            <span className="block w-[75px] h-[3px] bg-[#930e66] mb-2 ml-0"></span> {/* Top line to the left */}
            Experience
            <span className="block w-[75px] h-[3px] bg-[#930e66] mt-2 ml-auto mr-0"></span>
          </h1>
        </div>
        <h4 className="text-white mb-6 text-lg font-semibold">
          My career path has been shaped by the wisdom gained from my
          experiences.
        </h4>
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          <div className="lg:w-5/12 w-full">
            <Image
              src="/assets/images/experience.png"
              alt="experience"
              width={400}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div className="lg:w-7/12 w-full">

            <div className="space-y-4">
              {experienceData.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full bg-white rounded-lg px-5 py-4 text-left shadow-md transition duration-300 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-[#930e66] font-bold">
                          {item.title}
                        </h5>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                      <Image
                        src={
                          openIndex === index
                            ? '/assets/images/up-arrow.png'
                            : '/assets/images/chevron.png'
                        }
                        alt="toggle"
                        width={20}
                        height={20}
                      />
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="bg-[#f5f5f5] px-5 py-4 rounded-b-lg border-t text-sm text-gray-700">
                      <div className="flex flex-col md:flex-row justify-between mb-2 gap-2">
                        <p className="flex items-center gap-2">
                          <Image
                            src="/assets/images/location.png"
                            alt="location"
                            width={16}
                            height={16}
                          />
                          {item.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <Image
                            src="/assets/images/link.png"
                            alt="link"
                            width={16}
                            height={16}
                          />
                          <a
                            href={item.link}
                            target="_blank"
                            className="text-[#930e66] underline"
                          >
                            {item.linkName}
                          </a>
                        </p>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
