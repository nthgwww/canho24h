import React from "react";
import { text } from "../../utills/constant";
import { Province, RelatedPost } from "../../components";
import { List, Pagination } from "./index";
import ItemSideBar from "../../components/ItemSideBar";
import { useSelector } from 'react-redux'

const Homepage = () => {
  // const [params] = useSearchParams()
  // console.log(params)
  const {categories, prices, areas} = useSelector(state=>state.app) 
  // console.log(categories)
  // console.log(params.get('page'));
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-[100%] flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSideBar content ={categories} title ='Danh sách cho thuê'/>
          <ItemSideBar isDouble={true} type='priceCode' content={prices} title ='Xem theo giá'/>
          <ItemSideBar isDouble={true} type='areaCode' content={areas} title ='Xem theo diện tích'/>
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
