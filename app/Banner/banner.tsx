// components/HomeSection.tsx
import Image from "next/image";
import { FaFacebookF, FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import profile from "../../public/assets/images/profile-2.png"
const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative z-[1] overflow-x-hidden pt-20 bg-[#2b0617]"
    >
      <div className="mx-4 md:mx-12 lg:mx-24 xl:mx-32">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Column */}
          <div className="lg:w-1/2 w-full flex items-center">
            <div className="px-6">
              <h4 className="text-[30px] font-semibold tracking-[4px] text-main text-[#930e66]">
                Hello
              </h4>
              <p className="mt-2 text-white text-lg">I'm</p>
              <h1 className="text-[50px] font-bold mt-2 text-white">
                Nivethika Sivakumar
              </h1>
              <span className="block text-[18px] text-white mt-3 font-medium">
                "Fullstack Developer & Frontend Developer"
              </span>
              <p className="text-[#646f87] text-[16px] mt-3 max-w-lg">
                Full-stack developer and enthusiast of React and Angular, adept at
                transforming ideas into innovative web applications
              </p>

              {/* Socials */}
              <div className="mt-6">
                <ul className="flex justify-between w-[250px] border border-gray-300 rounded-full p-[10px]">
                  <li>
                    <a
                      href="https://web.facebook.com/nivethika.sivakumar.14"
                      target="_blank"
                      className="text-gray-300  hover:text-main transition text-xl"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/kumarnivi"
                      target="_blank"
                      className="text-gray-300  hover:text-main transition text-xl"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@nivethikashivakumar56"
                      target="_blank"
                      className="text-gray-300  hover:text-main transition text-xl"
                    >
                      <FaMedium />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nivethikashivakumar/"
                      target="_blank"
                      className="text-gray-300  hover:text-main transition text-xl"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2 w-full flex justify-center py-10">
            <div className="w-[350px] h-[350px] relative rounded-full overflow-hidden">
              <Image
                src= {profile} 
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
