// components/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage: 'url("/assets/images/aboutlap.avif")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#340625e8] z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-white">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="relative inline-block text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            <span className="block w-[75px] h-[3px] bg-[#930e66] mb-2 mx-auto"></span>
            About Me
            <span className="block w-[75px] h-[3px] bg-[#930e66] mt-2 mx-auto"></span>
          </h1>
        </div>

        {/* Description */}
        <div className="space-y-5 text-sm sm:text-base text-center">
          <h4 className="text-lg sm:text-xl font-semibold">
            Full Stack Developer | MEAN & MERN Stacks
          </h4>

          <p>
            Welcome to my portfolio! I am a passionate full-stack developer
            specializing in both MEAN (MongoDB, Express.js, Angular, Node.js)
            and MERN (MongoDB, Express.js, React, Node.js) stacks. With a strong
            foundation in JavaScript and its frameworks, I thrive on creating
            robust and scalable web applications that deliver seamless user
            experiences.
          </p>

          <p>
            Proficient in leveraging MongoDB for database management,
            Express.js for server-side application development, Angular for
            dynamic front-end interfaces, and Node.js for backend operations.
          </p>

          <p>
            Skilled in utilizing MongoDB as a flexible NoSQL database,
            Express.js for building RESTful APIs, React for crafting interactive
            UI components, and Node.js for handling server-side logic.
          </p>

          <p>
            I am deeply enthusiastic about staying updated with the latest
            advancements in technology. From exploring serverless architectures
            to integrating AI and machine learning into web applications, I am
            always eager to experiment with cutting-edge tools and frameworks to
            enhance my skill set.
          </p>

          {/* Download Button */}
          <div>
            <Link
              href="https://drive.google.com/file/d/1xkAFv-CD8grn38YB_h8yYurk8dJrHbFF/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#930e66] hover:bg-[#7c0a56] text-white font-medium px-5 py-2 rounded transition"
            >
              Download CV
              <Image
                src="/assets/logos/down-arrow.png"
                alt="Download Arrow"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
