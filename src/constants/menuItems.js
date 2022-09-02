import { AiOutlineDashboard } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbPresentationAnalytics, TbUsers } from "react-icons/tb";
import { RiBuilding4Line, RiUser2Line } from "react-icons/ri";
import {
  MdOutlineStarBorderPurple500,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export const menusItems = [
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
