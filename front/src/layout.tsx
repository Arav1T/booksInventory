import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-800">
      
      
      <Navbar />

      
      <main className="flex-1 overflow-x-hidden ">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
