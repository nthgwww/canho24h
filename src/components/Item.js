import React, { memo, useState } from "react";
import icons from "../utills/icons";
import {useNavigate, Link } from "react-router-dom";
import { formatVietnameseToString } from "../utills/Common/formatVietnameseToString";

const indexs = [0,1,2,3]
const { MdStarRate, AiOutlineHeart, AiFillHeart, BsFillBookmarkHeartFill } =
icons;

const Item = ({images, user, title, star, description, attributes, address, id}) => {
  // console.log(images)
  // images && console.log(JSON.parse(images))
  const navigate = useNavigate();
  const [isHoverHeart, setIsHoverHeart] = useState(false)
  const handleStar = (star) =>{
    let stars = []
    for(let i=1; i<+star; i++){
      stars.push(<MdStarRate color="yellow" className="star-item" size={24} />)
    }
    return stars
  }
  return (
    <div className="w-full flex border-t border-red-600 py-4">
      <Link to={`detail/${formatVietnameseToString(title)}/${id}`} className="w-2/5 flex flex-wrap  items-center relative gap-[2px] cursor-pointer">
        {images.length > 0 && images.filter((i, index)=>indexs.some(i=>i===index))?.map((i, index)=>{
          return (
            <img key={index} src={i} alt="preview" className="w-[100px] h-[130px] object-cover"/>
            )    
        })}
        <span className="bg-overlay-30 text-white px-2 rounded-md absolute left-1 bottom-1">{`${images.length} ảnh`}</span>
        <span className="text-white absolute right-8 bottom-1 bg-overlay-30 rounded-md" onMouseEnter={()=>setIsHoverHeart(true)} onMouseLeave={()=>setIsHoverHeart(false)}>
          {isHoverHeart ? <AiFillHeart color="red" size={24}/> : <AiOutlineHeart size={24}/>}
        </span>
      </Link>  
      <div className="w-3/5">
        <div className="flex justify-between gap-4 w-full">
          <div className=" items-start  font-medium text-slate-700">
            {handleStar(+star).length > 0 && handleStar(+star).map((star, number)=>{
              return(
                <span key={number}>{star}</span>
              )
            })}
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsFillBookmarkHeartFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-around gap-2">
          <span className="font-bold flex-3 whitespace-nowrap overflow-hidden text-ellipsis text-slate-700">{attributes?.price}</span>
          <span className="flex-1">{attributes?.acreage}</span>
          <span className="flex-3 whitespace-nowrap overflow-hidden text-ellipsis text-slate-900 text-sm">{`${address.split(',')[address.split(',').length - 2]},${address.split(',')[address.split(',').length-1]}`}</span>
        </div>
        <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden">
          {description}
        </p>
        <div>
          <div className="flex items-center my-3 justify-between">
            <div className="flex items-center gap-1">
              <img
                className="w-[30px] h-[30px] object-cover rounded-[50%]"
                alt="avatar"
                src="https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=apYgDs9tYQiwn7pcDOGbNg"
              />
              <p>{user?.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="bg-yellow-400 text-white p-1 rounded-md text-xs"
              >
                {`Gọi${user?.phone}`}
              </button>
              <button
                type="button"
                className="bg-blue-400 text-xs text-white rounded-md p-1 "
              >
                Nhắn zalo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
