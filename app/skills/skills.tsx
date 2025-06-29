'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

const skills = [
  {
    title: 'Nodejs',
    src: '/assets/images/nodejs.png',
    alt: 'Nodejs',
    description:
      'I excel in building scalable server-side applications, managing databases, and handling RESTful APIs.',
  },
  {
    title: 'Flowbite',
    src: '/assets/images/Flowbite.png',
    alt: 'Flowbite',
    description:
      'I am proficient in Flowbite for styling web apps, leveraging its utility-first approach to streamline CSS development efficiently.',
  },
  {
    title: 'MongoDB',
    src: '/assets/images/monogodb.png',
    alt: 'MongoDB',
    description:
      'I have practical experience with MongoDB, including schema design, CRUD operations, indexing, aggregation pipelines, and scaling for performance and availability.',
  },

   {
    title: 'React',
    src: '/assets/images/React.webp',
    alt: 'react',
    description:
      'I excel in developing responsive web apps using React hooks, Redux, RESTful APIs, and performance optimization techniques.',
  },

  {
    title: 'MySql',
    src: '/assets/images/mysql.png',
    alt: 'MySql',
    description:
      'I have proficiency in MySQL, including database design, querying with SQL, indexing, transactions, stored procedures, and performance optimization.',
  },

 {
    title: 'Angular',
    src: '/assets/images/angular.png',
    alt: 'Angular',
    description:
      ' With one year of Angular experience, I excel in building dynamic web apps using Angular CLI, RxJS, TypeScript, and NgRx.',
  },

  {
    title: 'Next.js',
    src: '/assets/images/nextjs.png',
    alt: 'Next.js',
    description:
      'I have learned the fundamentals of Next.js, including routing, server-side rendering, and API routes for full-stack web applications.',
  },
  {
    title: 'PostgreSQL',
    src: '/assets/images/postgresql.png',
    alt: 'PostgreSQL',
    description:
      'I have a foundational understanding of PostgreSQL for managing relational databases, writing SQL queries, and handling data relationships.',
  },
  {
    title: 'Docker',
    src: '/assets/images/docker.avif',
    alt: 'Docker',
    description:
      'I am familiar with Docker basics including creating containers, writing Dockerfiles, and containerizing simple applications.',
  },


 
];

const SkillsSection = () => {
  return (
    <section className="relative bg-[#2c012d] py-16 px-4 sm:px-10">
     <div className="text-center mb-10">
  <h1 className="text-white text-3xl sm:text-4xl font-bold uppercase relative inline-block font-[cursive]">
    <span className="block w-[75px] h-[3px] bg-[#930e66] mb-2 ml-0"></span> {/* Top line to the left */}
    My Skills
    <span className="block w-[75px] h-[3px] bg-[#930e66] mt-2 ml-auto mr-0"></span> {/* Bottom line to the right */}
  </h1>
</div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-next-btn',
          prevEl: '.swiper-prev-btn',
        }}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {skills.map((skill, index) => (
       <SwiperSlide key={index} className="h-full">
  <div className="h-full bg-gradient-to-br from-[#121212b9] to-[#930e66] rounded-2xl shadow-lg   p-6 flex flex-col justify-between" id='skills'>
    <div>
      <h2 className="text-[#eba2d3] text-lg font-bold mb-4">
        {skill.title}
      </h2>
      <div className="mb-4 rounded-md overflow-hidden">
        <Image
          src={skill.src}
          alt={skill.alt}
          width={400}
          height={200}
          className="object-cover w-full h-[150px]"
        />
      </div>
      <p className="text-white text-base font-[cursive]">
        {skill.description}
      </p>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-8 right-6 flex gap-4 z-10">
        <button className="swiper-prev-btn w-10 h-10  bg-white text-black text-[20px] rounded-full shadow-md hover:bg-[#ddd] flex items-center justify-center transition">
          ←
        </button>
        <button className="swiper-next-btn w-10 h-10 bg-[#930e66] text-white rounded-full shadow-md hover:bg-[#7c0a56] flex items-center justify-center transition">
          →
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
