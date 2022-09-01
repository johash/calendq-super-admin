const Wrapper = ({ children, sidebarOpen }) => {
  return (
    <div
      className={`w-full ${
        sidebarOpen ? "pl-[288px]" : "pl-[64px]"
      } duration-500`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
