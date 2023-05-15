import React from "react";
import { SearchItem } from "../../components";
import icons from "../../utills/icons";

const { GrNext, GrFormLocation, FaMoneyBillWave, RiCrop2Fill, BsHouseHeartFill, FiDelete, GiMagnifyingGlass} = icons;

const Search = () => {
  return (
    <div className=" p-[10px] w-3/5 my-3 bg-secondary2 rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2 mt-2">
      <SearchItem IconBefore={<BsHouseHeartFill />} IconAfter={<FiDelete />} fontWeight text="Mặt bằng, căn hộ" />
      <SearchItem IconBefore={<GrFormLocation />} IconAfter={<GrNext />} text="Toàn quốc" />
      <SearchItem IconBefore={<FaMoneyBillWave/>} IconAfter={<GrNext />} text="Chọn giá" />
      <SearchItem IconBefore={<RiCrop2Fill />} IconAfter={<GrNext />} text="Chọn diện tích" />
      <button 
        type="button"
        className="outline-none font-medium flex items-center justify-center gap-2  py-2 px-4 w-full bg-secondary1 text-white text-sm rounded-lg"
      >
        <GiMagnifyingGlass />
          Tìm kiếm  
      </button>
    </div>
  );
};  

export default Search;
