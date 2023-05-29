import React from "react";
import NavBar from "~/components/NavBar";
import { useState } from "react";
import OpenNav from "./OpenNav";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

const Format = (props: Props) => {
  const { children } = props;

  const [openNav, setOpenNav] = useState<boolean>(true);

  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center bg-neutral1">
      {openNav ? (
        <NavBar openNav={openNav} setOpenNav={setOpenNav} />
      ) : (
      
        <OpenNav openNav={openNav} setOpenNav={setOpenNav} />
      )}
        <div className="m-5 mt-16">{children}</div>
      </main>
    </>
  );
};

export default Format;
