import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbPresentationAnalytics, TbUsers } from "react-icons/tb";
import { RiBuilding4Line, RiUser2Line } from "react-icons/ri";
import {
  MdOutlineStarBorderPurple500,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const menus = [
    { name: "dashboard", link: "/", icon: AiOutlineDashboard },
    { name: "analytics", link: "/analytics", icon: IoAnalyticsOutline },
    { name: "sales", link: "/sales", icon: TbPresentationAnalytics },
    {
      name: "companies",
      link: "/companies",
      icon: RiBuilding4Line,
      margin: true,
    },
    { name: "users", link: "/users", icon: RiUser2Line },
    { name: "employees", link: "/employees", icon: TbUsers },
    {
      name: "packages",
      link: "/packages",
      icon: MdOutlineStarBorderPurple500,
      margin: true,
    },
    { name: "admin", link: "/admin", icon: MdOutlineAdminPanelSettings },
    { name: "support", link: "/support", icon: BiSupport },
  ];

  return (
    <section className="fixed flex gap-6 z-50">
      <div
        className={`bg-white min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 h-[70px] flex items-center justify-between">
          {open ? (
            <div className="w-[100px] duration-500">
              <img src="/assets/logo.png" alt="CalendQ Logo" />
            </div>
          ) : (
            <div className="duration-500"></div>
          )}

          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
