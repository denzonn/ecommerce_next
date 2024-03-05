import Link from "next/link";
import React, { FC } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiBoxes } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoMdLogOut } from "react-icons/io";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="fixed z-20 h-full top-0 left-[2vw] pt-20 pb-8">
      <div className="bg-white h-full rounded-lg p-6">
        <div className="flex flex-col justify-between h-full">
          <ul className="flex flex-col text-muted-foreground space-y-4">
            <Link href={"/dashboard"}>
              <li className="flex flex-row gap-2 py-2 px-6 rounded-md items-center hover:bg-gray-50">
                <div>
                  <MdOutlineSpaceDashboard />
                </div>
                Dashboard
              </li>
            </Link>
            <Link href={"/dashboard/category"}>
              <li className="flex flex-row gap-2 py-2 px-6 rounded-md items-center hover:bg-gray-50">
                <div>
                  <BiCategory />
                </div>
                Category
              </li>
            </Link>
            <Link href={"/dashboard/product"}>
              <li className="flex flex-row gap-2 py-2 px-6 rounded-md items-center hover:bg-gray-50">
                <div>
                <CiBoxes />
                </div>
                Product
              </li>
            </Link>
            <Link href={"/dashboard/order"}>
              <li className="flex flex-row gap-2 py-2 px-6 rounded-md items-center hover:bg-gray-50">
                <div>
                <LiaShippingFastSolid />
                </div>
                Order
              </li>
            </Link>
          </ul>
          <Link href={"/dashboard"}>
            <li className="flex flex-row gap-2 py-2 px-6 rounded-md items-center hover:bg-red-500 hover:text-red-300 text-red-500">
              <div>
              <IoMdLogOut />
              </div>
              Logout
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
