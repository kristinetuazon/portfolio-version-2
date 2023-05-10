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
    anime.timeline({ loop: false }).add({
        targets: ".letter",
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 100 * (i + 1),
      })
      // .add({
      //   targets: ".ml9",
      //   opacity: 0,
      //   duration: 1000,
      //   easing: "easeOutExpo",
      //   delay: 1000,
      // });
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
        <div className="m-5">
          <p className="text-left font-heading text-6xl tracking-wide text-charcoal">
            <TypeIt
              options={{
                startDelay: 1000,
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
          <h1 className="font-body-regular text-right text-5xl text-charcoal">
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
      </Format>
    </>
  );
};

export default Home;
