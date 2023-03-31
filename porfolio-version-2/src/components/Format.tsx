import React from "react";
import NavBar from "~/components/NavBar";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

const Format = (props: Props) => {
  const { children } = props;

  return (
    <>
      {/* <NavBar /> */}
      <main className="flex h-screen w-screen flex-col flex-wrap justify-center bg-white">
        <div className="m-5">{children}</div>
      </main>
    </>
  );
};

export default Format;
