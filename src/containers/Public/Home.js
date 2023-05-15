import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Navigation from "./Navigation";
import { Navigation, Search } from "./index";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full border border-red-500">
      <Header />
      <Navigation />
      <Search />
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start ">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
