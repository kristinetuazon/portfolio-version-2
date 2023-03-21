import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Kristine/Software Developer</title>
        <meta name="description" content="A portfolio" />
        <link rel="icon" href="/dango_icon.svg" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-black ">
        
      </main>
    </>
  );
};

export default Home;
