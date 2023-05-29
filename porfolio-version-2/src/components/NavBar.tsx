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
    <div className="flex justify-between p-5">
      <p onClick={handleClick} className="navbar font-body font-medium absolute left-0 px-5">{"<> kristine codes </>"}</p>
    </div>
  );
};

export default NavBar;
