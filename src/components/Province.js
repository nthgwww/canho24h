import React from "react";
import ProvinceBtn from "./ProvinceBtn";
import { location } from "../utills/constant";

const Province = () => {
  return <div className='flex items-center gap-5 justify-center py-5'>
  {location.map((item)=>{
    return (
      <ProvinceBtn key={item.id} image={item.image} name={item.name}/>
    )
  })}
</div>;
};

export default Province;
