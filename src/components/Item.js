import React, { memo, useState } from "react";
import icons from "../utills/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/07/01/z2586437677263-c7b08e2701e2c6399015a3b2302908af_1625128934.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/07/01/z2586437677263-c7b08e2701e2c6399015a3b2302908af_1625128934.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/07/01/z2586437677263-c7b08e2701e2c6399015a3b2302908af_1625128934.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/07/01/z2586437677263-c7b08e2701e2c6399015a3b2302908af_1625128934.jpg",
];

const { MdStarRate, AiOutlineHeart, AiFillHeart, BsFillBookmarkHeartFill } =
  icons;

const Item = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false)
  return (
    <div className="w-full flex border-t border-red-600 p-4">
      <div className="w-2/5 flex flex-wrap  items-center relative gap-[2px] cursor-pointer">
        <img src={images[0]} alt="preview" className="w-[100px] h-[120px] object-cover"/>
        <img src={images[1]} alt="preview" className="w-[100px] h-[120px] object-cover"/>
        <img src={images[2]} alt="preview" className="w-[100px] h-[120px] object-cover"/>
        <img src={images[3]} alt="preview" className="w-[100px] h-[120px] object-cover"/>
        <span className="bg-overlay-30 text-white px-2 rounded-md absolute left-1 bottom-2">4 ảnh</span>
        <span className="text-white absolute right-9 bottom-2 bg-overlay-30 rounded-md" onMouseEnter={()=>setIsHoverHeart(true)} onMouseLeave={()=>setIsHoverHeart(false)}>
          {isHoverHeart ? <AiFillHeart color="red" size={24}/> : <AiOutlineHeart size={24}/>}
        </span>
      </div>  
      <div className="w-3/5">
        <div className="flex justify-between gap-4 w-full">
          <div className=" items-start  font-medium text-slate-700">
            <MdStarRate color="yellow" className="star-item" size={24} />
            <MdStarRate color="yellow" className="star-item" size={24} />
            <MdStarRate color="yellow" className="star-item" size={24} />
            <MdStarRate color="yellow" className="star-item" size={24} />
            <MdStarRate color="yellow" className="star-item" size={24} />
            CHO THUÊ CĂN HỘ HOẶC VĂN PHÒNG LÀM VIỆC
          </div>
          <div className="w-[10%] flex justify-end">
            <BsFillBookmarkHeartFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-around">
          <span className="font-bold text-slate-700">4 triệu/tháng</span>
          <span>45m²</span>
          <span>Quận 7, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-500 ">
          CHDV mới khai trương trống 4 phòng full nội thất tất cả phòng có ban
          công thoang mát, vị trí gần chợ Tân Mỹ, xung quanh nhiều tiện ích ăn
          uống, rất thuận…
        </p>
        <div>
          <div className="flex items-center my-3 justify-between">
            <div className="flex items-center gap-1">
              <img
                className="w-[30px] h-[30px] object-cover rounded-[50%]"
                alt="avatar"
                src="https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=apYgDs9tYQiwn7pcDOGbNg"
              />
              <p>Đặng Tiến Sĩ</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="bg-yellow-400 text-white p-1 rounded-md text-xs"
              >
                Call 0377444879
              </button>
              <button
                type="button"
                className="bg-blue-400 text-white rounded-md px-1 "
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
