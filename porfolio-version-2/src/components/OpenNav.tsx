import React from "react";
import NavBar from "./NavBar";

type Props = {
  setOpenNav: (state: boolean) => void;
  openNav: boolean;
};

const OpenNav = (props: Props) => {
  const { setOpenNav, openNav } = props;

  const handleClick = () => {
    openNav ? setOpenNav(false) : setOpenNav(true);
  };

  return (
    <>
    <div className="absolute z-[999] h-[100%] w-[100%] bg-orange">
      <p onClick={handleClick} className="right-0 bg-orange font-body text-[5rem] px-10 cursor-pointer">x</p>
      <div className="flex items-center justify-center flex-col">
      <ul className="flex flex-col w-[100%]">
        <p className="hover:bg-mint font-body text-[2rem] uppercase cursor-pointer px-28 py-5">Home</p>
        <p className="hover:bg-creme font-body text-[2rem] uppercase cursor-pointer px-28 py-5">Blog</p>
        <p className="hover:bg-coffee font-body text-[2rem] uppercase cursor-pointer px-28 py-5">Projects</p>
        <p className="hover:bg-pink font-body text-[2rem] uppercase cursor-pointer px-28 py-5">Contact</p>
      </ul>
      </div>
    </div>
    <NavBar setOpenNav={setOpenNav} openNav={openNav}/>
    </>
  );
};

export default OpenNav;
