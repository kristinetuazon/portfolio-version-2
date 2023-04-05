import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Format from "~/components/Format";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
            hello, my name is
          </p>
          <br />
          <br />
          <h1 className="text-center font-title2 text-[200px] text-charcoal">
            Kristine
          </h1>
          <br />
          <br />
          <h1 className="text-right font-body-regular text-5xl text-charcoal">
            and I'm a software engineer based in Tokyo, Japan.
          </h1>
        </div>
      </Format>
    </>
  );
};

export default Home;
