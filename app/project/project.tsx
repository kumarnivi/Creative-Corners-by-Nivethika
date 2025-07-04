// pages/news.tsx or components/News.tsx
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const News = () => {
  const newsData = [
    {
      title: "Tea E-commerce App",
      date: "Jan 29, 2018",
      excerpt: [
        { title: "React.js" },
        { title: "Nodejs" },
        { title: "mongodb" },
      ],
      src:
        "/assets/images/comrade.png",
      href: "#",
      sourceCode: "link"
    },
    {
      title: "Leave Applay App",
      date: "Jan 29, 2018",
      excerpt: [
        { title: "Responsive UI with Next.js" },

      ],
      src:
        "/assets/images/Leav_app.png",
      href: "#",
      sourceCode: "link"
    },
    {
      title: "Book Store",
      date: "Jan 29, 2018",
      excerpt: [
        { title: "Responsive UI with Next.js" },

        { title: "Admin Dashboard" },
      ],
      src:
        "/assets/images/BookStore.png",
      href: "#",
      sourceCode: "Link"
    },
    // {
    //   title: "Amazing Forth Title that is Quite Long",
    //   date: "Jan 29, 2018",
    //   excerpt: "Lorem ipsum dolor sit amet!",
    //   src:
    //     "/assets/images/angular.png",
    //   href: "#",
    // },
    // {
    //   title: "Amazing Fifth Title",
    //   date: "Jan 29, 2018",
    //   excerpt:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat...",
    //   src:
    //     "/assets/images/angular.png",
    //   href: "#",
    // },
    // {
    //   title: "Amazing 6th Title",
    //   date: "Jan 29, 2018",
    //   excerpt:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat?",
    //   src:
    //     "/assets/images/angular.png",
    //   href: "#",
    // },
  ];

  return (
    <>
    <section
        className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-10 max-auto"
        style={{ backgroundImage: 'url(/assets/images/projectbackground.avif)' }}
      >
        <div className="absolute inset-0 bg-[#340625e8] z-0" />
        <div className="text-center mb-10">
          <h1 className="text-white text-3xl sm:text-4xl font-bold uppercase relative inline-block font-[cursive]">

            <span className="block w-[75px] h-[3px] bg-[#930e66] mb-2 ml-0"></span> {/* Top line to the left */}
            Experience
            <span className="block w-[75px] h-[3px] bg-[#930e66] mt-2 ml-auto mr-0"></span>
          </h1>
        </div>

        <div className=" ">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-5 justify-center">
            {newsData.map((news, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-lg group w-full sm:w-[48%] lg:w-[31%] h-[12rem] lg:h-[20rem]"
              >
                <Link href={news.href} className="absolute inset-0 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-0" />
                <Image
                  src={news.src}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-[3000ms] group-hover:scale-110 z-[0]"
                />
                <div className="absolute w-full bottom-0 p-4 text-white transition duration-500 group-hover:bg-black/100 z-10">
                  <h2 className="text-lg font-semibold group-hover:text-[#930e66] transition-colors duration-500 mb-1">
                    {news.title}
                  </h2>
                  <p className="text-xs text-gray-300 mb-2">{news.date}</p>
                  <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                    <div className="flex justify-center  w-full gap-2  ">
                      {news.excerpt.map((item, index) => (
                        <p key={index} className="text-sm bg-white rounded p-2 px-[20px] text-black ">
                          - {item.title}
                        </p>
                      ))}
                    </div>

                    <div className="flex justify-between ">
                      <div className="flex mt-4 " style={{alignItems:"center", justifyContent:"space-between", display:"flex"}}>
                        <img src="/assets/images/external-link (1).png" className="text-white w-[15px] h-[15px]" />
                        <Link
                          href={news.href}
                          className="inline-block text-sm text-gray-300 hover:text-yellow-400 transition-colors  px-3 py-1"
                        >

                          Live preview<i className="fas fa-long-arrow-alt-right ml-1" />
                        </Link>
                      </div>

                      <div className="flex mt-4 " style={{alignItems:"center", justifyContent:"space-between", display:"flex"}} >
                         <img src="/assets/images/github.png" className="text-white w-[18px] h-[18px]  " />
                        <Link
                          href={news.sourceCode}
                          className="inline-block text-sm text-gray-300 hover:text-yellow-400 transition-colors px-3 py-1" 
                        >
                          Source Code
                        </Link>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


    </>
  );
};

export default News;
