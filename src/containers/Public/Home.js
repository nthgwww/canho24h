import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full border border-red-500">
      <Header />
      <Navigation />

      <div className="w-4/5 lg:w-3/5 flex flex-col items-start  mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
