import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Format from "~/components/Format";
import TypeIt from "typeit-react";
import anime from "animejs";
import { useEffect, useState } from "react";
import { getDatabase } from "../lib/notion";

const Home: NextPage = () => {
  if (typeof window !== "undefined") {
    anime.timeline().add({
      targets: ".letter",
      scale: [0, 1],
      // duration: 1500,
      elasticity: 500,
      delay: 2500,
    });
  }

  useEffect(() => {
    console.log(getDatabase("59097e004f5541079692da2e9c745d1e"));
  });

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
        <p className="mt-15 absolute pb-5 text-left font-heading text-5xl tracking-wide text-charcoal ">
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
          <span className="letter mt-15 absolute z-50 pt-20  text-center font-title2 text-[10rem] text-charcoal ">
            Kristine
          </span>
          <svg
            // width="300px"
            // height="100px"
            viewBox="0 0 65 65"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            className="mt-24 sm:h-[200px] "
          >
            <path
              d="M50.9 48.6c-.6-.6-1.7-.6-2.3 0c-.6.6-.4 1.7 0 2.3l10.6 10.6c.6.6 1.7.6 2.3 0c.6-.6.6-1.7 0-2.3L50.9 48.6"
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
              // opacity={0.3}
            ></ellipse>
            <path
              d="M6.1 3.8c-.6-.6-1.7-.6-2.3 0c-.6.6-.6 1.7 0 2.3l3.7 3.7c.6.6 1.7.6 2.3 0c.6-.6.6-1.7 0-2.3L6.1 3.8"
              fill="#f29a2e"
            ></path>
          </svg>
        </span>
        <br />
        <br />
        <p className="text-right font-body text-3xl font-medium  text-charcoal sm:text-xl">
          <TypeIt
            options={{
              startDelay: 4000,
              lifeLike: true,
            }}
          >
            and I'm a software engineer based in Tokyo, Japan.
          </TypeIt>
        </p>

        <div className="arrow"></div>
      </Format>
    </>
  );
};

export default Home;
