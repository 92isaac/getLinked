import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SharedLayout: React.FC = () => {
  return (
    <div className="bg-[#150E28] min-h-screen">
      <Navbar />
      <main className="pt-32 text-white">
        <Outlet />
        <ToastContainer />
      </main>
    </div>
  );
};

export default SharedLayout;
