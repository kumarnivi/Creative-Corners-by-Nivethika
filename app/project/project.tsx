// pages/news.tsx or components/News.tsx
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const News = () => {
  const newsData = [
    {
      title: "Amazing First Title",
      date: "Jan 29, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat?",
      src:
        "/assets/images/react_app.png",
      href: "#",
    },
    {
      title: "Amazing Second Title that is Quite Long",
      date: "Jan 29, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla...",
      src:
        "/assets/images/angular.png",
      href: "#",
    },
    {
      title: "Amazing Title",
      date: "Jan 29, 2018",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae...",
      src:
        "/public/assets/images/angular.png",
      href: "#",
    },
    {
      title: "Amazing Forth Title that is Quite Long",
      date: "Jan 29, 2018",
      excerpt: "Lorem ipsum dolor sit amet!",
      src:
        "/public/assets/images/angular.png",
      href: "#",
    },
    {
      title: "Amazing Fifth Title",
      date: "Jan 29, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat...",
      src:
        "/public/assets/images/angular.png",
      href: "#",
    },
    {
      title: "Amazing 6th Title",
      date: "Jan 29, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat?",
      src:
        "/public/assets/images/angular.png",
      href: "#",
    },
  ];

  return (
    <>


      <Head>
        <title>News Cards</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <div className="bg-gray-700 min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
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
                className="transition-transform duration-[3000ms] group-hover:scale-110 z-[-1]"
              />
              <div className="absolute bottom-0 p-4 text-white transition duration-500 group-hover:bg-black/60 z-10">
                <h2 className="text-lg font-semibold group-hover:text-yellow-400 transition-colors duration-500 mb-1">
                  {news.title}
                </h2>
                <p className="text-xs text-gray-300 mb-2">{news.date}</p>
                <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <p className="text-sm">{news.excerpt}</p>
                  <Link
                    href={news.href}
                    className="inline-block mt-4 text-sm text-gray-300 hover:text-yellow-400 transition-colors border border-gray-500 rounded px-3 py-1"
                  >
                    Read more <i className="fas fa-long-arrow-alt-right ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
