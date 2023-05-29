import React from "react";

type Props = {
  setOpenNav: (state:boolean) => void;
  openNav: boolean
};

const NavBar = (props: Props) => {
  const { setOpenNav, openNav } = props;

  const handleClick = () => {
    openNav? setOpenNav(false): setOpenNav(true)
  };

  return (
    <div className="flex justify-between bg-neutral2 p-5">
      <p onClick={handleClick} className="navbar font-body font-medium text-[1.5rem]">{"<> kristine codes </>"}</p>
    </div>
  );
};

export default NavBar;
