import React, { FC } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

interface NavbarPageProps {}

const NavbarPage: FC<NavbarPageProps> = () => {
  return (
    <nav className="bg-white  fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between px-14">
          <div className="flex flex-row gap-x-1 items-center justify-start text-2xl text-primary">
            <div>
              <FaCartShopping />
            </div>
            <div className="font-semibold">MegaMart</div>
          </div>
          <div className="flex flex-row items-center gap-2 text-muted-foreground">
            <div className="text-sm">Welcome Back, Denson Patibang</div>
            <div className="text-xl">
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
