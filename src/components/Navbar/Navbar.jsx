import { HiOutlineMenuAlt2, HiSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-[70px] sticky z-30 top-0 flex items-center px-10 shadow-sm ">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-[#FAFAFB] flex items-center border-[1px] border-[#e6ebf1] rounded-lg py-2 px-2 ml-4">
            <HiSearch color="#A5B0BF" />
            <input
              type="text"
              className="bg-transparent pl-2 outline-none font-medium text-base"
            />
          </div>
        </div>
        <div>
          <div className="w-10 h-10 bg-gray rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
