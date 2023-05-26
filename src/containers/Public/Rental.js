import React, {useEffect, useState} from "react";
import { text } from "../../utills/constant";
import { Province, RelatedPost } from "../../components";
import { List, Pagination } from "./index";
import ItemSideBar from "../../components/ItemSideBar";
import { useSelector, useDispatch} from 'react-redux'
import { formatVietnameseToString } from "../../utills/Common/formatVietnameseToString";
import { useLocation } from "react-router-dom";
import * as actions from '../../store/actions'

const Rental = () => {
  const {prices, areas, categories} = useSelector(state=>state.app)
  const [categoryCurrent, setCategoryCurrent] = useState([])
  const [categoryCode, setCategoryCode] = useState('none')
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(()=>{
    const category = categories?.find(item => `/${formatVietnameseToString(item.value)}` === location.pathname)
    console.log(category)
    setCategoryCurrent(category)
    if (category) {
      setCategoryCode(category.code)
    }
  },[location])

  useEffect(()=>{
    dispatch(actions.getPostsLimit)
  },[location])

  console.log(categoryCode)

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{categoryCurrent?.header}</h1>
        <p className="text-base text-gray-700">{categoryCurrent?.subheader}</p>
      </div>
      <Province />
      <div className="w-[100%] flex gap-4">
        <div className="w-[70%]">
          <List categoryCode={categoryCode}/>
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSideBar isDouble={true} type='priceCode' content={prices} title ='Xem theo giá'/>
          <ItemSideBar isDouble={true} type='areaCode' content={areas} title ='Xem theo diện tích'/>
          <RelatedPost />
        </div>
      </div>
    </div>
  );
}

export default Rental