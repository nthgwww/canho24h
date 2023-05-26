import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Navigation from "./Navigation";
import { Navigation, Search } from "./index";
import { Infor, Contact } from '../../components';
import * as actions from '../../store/actions'

const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
  },[])
  return (
    <div className="w-full flex gap- flex-col items-center h-full ">
      <Header />
      <Navigation />
      <Search />
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start ">
        <Outlet />
      </div>
      <Infor/>
      <Contact />
      <div className="h-[300px]">
          alo
      </div>
    </div>
  );
};

export default Home;
