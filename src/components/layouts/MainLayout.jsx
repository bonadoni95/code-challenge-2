import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: 70 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
