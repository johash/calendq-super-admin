const SideMenuItem = ({ text, icon }) => {
  return (
    <div className="w-full h-[40px] pl-6 flex items-center mb-3 hover:text-blue transition-all ease-in duration-300 cursor-pointer">
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-medium text-sm text-[#455560] hover:text-blue transition-all ease-in duration-300">
          {text}
        </span>
      </div>
    </div>
  );
};

export default SideMenuItem;
