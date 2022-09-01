import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Wrapper from "./Wrapper";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <main className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <Wrapper sidebarOpen={open}>
        <Navbar />
        {children}
      </Wrapper>
    </main>
  );
};

export default Layout;
