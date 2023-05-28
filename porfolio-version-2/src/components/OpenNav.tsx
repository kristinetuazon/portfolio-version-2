import React from "react";
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
    <div className="absolute z-[999] h-[100%] bg-orange p-20">
      <ul className="flex flex-col gap-y-20">
        <p>Home</p>
        <p>Blog</p>
        <p>Projects</p>
        <p>Contact</p>
      </ul>
    </div>
  );
};

export default OpenNav;
