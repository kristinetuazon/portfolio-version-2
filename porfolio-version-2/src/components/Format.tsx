import React from "react";
import NavBar from "~/components/NavBar";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

const Format = (props: Props) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      <main className="h-screen w-screen flex flex-col justify-center items-center bg-neutral2">
        <div className="m-10">{children}</div>
      </main>
    </>
  );
};

export default Format;
