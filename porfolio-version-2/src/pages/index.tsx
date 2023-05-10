import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Format from "~/components/Format";
import TypeIt from "typeit-react";
import { api } from "~/utils/api";
import anime from "animejs";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  if (typeof window !== "undefined") {
    anime.timeline().add({
      targets: ".letter",
      scale: [0, 1],
      // duration: 1500,
      elasticity: 500,
      delay: 2500,
    });
  }

  return (
    <>
      <Head>
        <title>Kristine//Software Developer</title>
        <meta
          name="Kristine's Portfolio and Blog"
          content="Portfolio, blog, software development"
        />
        <link rel="icon" href="/dango_icon.svg" />
      </Head>
      <Format>
        <div className="w-[100%] h-[100%]">
        <svg
          width="500px"
          height="500px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          className="absolute self-center"
        >
          <path
            d="M50.9 48.6c-.6-.6-1.7-.6-2.3 0c-.6.6-.6 1.7 0 2.3l10.6 10.6c.6.6 1.7.6 2.3 0c.6-.6.6-1.7 0-2.3L50.9 48.6"
            fill="#f29a2e"
          ></path>
          <ellipse
            transform="rotate(-45.001 46.998 46.997)"
            cx="47"
            cy="47"
            rx="13.6"
            ry="12"
            fill="#8cc63e"
          ></ellipse>
          <path
            d="M38.3 35.9c-.6-.6-1.7-.6-2.3 0c-.6.6-.6 1.7 0 2.3l3.7 3.7c.6.6 1.7.6 2.3 0c.6-.6.6-1.7 0-2.3l-3.7-3.7"
            fill="#f29a2e"
          ></path>
          <ellipse
            transform="rotate(-45.001 30.91 30.911)"
            cx="30.9"
            cy="30.9"
            rx="13.6"
            ry="12"
            fill="#dae3ea"
          ></ellipse>
          <path
            d="M22.2 19.9c-.6-.6-1.7-.6-2.3 0c-.6.6-.6 1.7 0 2.3l3.7 3.7c.6.6 1.7.6 2.3 0c.6-.6.6-1.7 0-2.3l-3.7-3.7"
            fill="#f29a2e"
          ></path>
          <ellipse
            transform="rotate(-45.001 14.822 14.824)"
            cx="14.8"
            cy="14.8"
            rx="13.6"
            ry="12"
            fill="#ff99ad"
          ></ellipse>
          <path
            d="M6.1 3.8c-.6-.6-1.7-.6-2.3 0c-.6.6-.6 1.7 0 2.3l3.7 3.7c.6.6 1.7.6 2.3 0c.6-.6.6-1.7 0-2.3L6.1 3.8"
            fill="#f29a2e"
          ></path>
        </svg>
        <div className="m-5 relative">
          <p className="text-left font-heading text-4xl tracking-wide text-charcoal">
            <TypeIt
              options={{
                // startDelay: 1000,
                cursor: false,
                lifeLike: true,
              }}
              >
              hello, my name is
            </TypeIt>
          </p>
          <br />
          <br />
          <span className="text-wrapper">
            <span className="letter text-center font-title2 text-[210px] text-charcoal">
              Kristine
            </span>
          </span>
          <br />
          <br />
          <h1 className="font-body-regular text-right text-4xl text-charcoal">
            <TypeIt
              options={{
                startDelay: 4000,
                lifeLike: true,
              }}
              >
              and I'm a software engineer based in Tokyo, Japan.
            </TypeIt>
          </h1>
        </div>
              </div>
      </Format>
    </>
  );
};

export default Home;
