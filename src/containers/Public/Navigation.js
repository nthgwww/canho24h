import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { name: "Trang chủ", path: "home" },
  { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang" },
  { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
  { name: "Nhà cho thuê", path: "nha-cho-thue" },
  { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
];

const notActive = 'hover:bg-slate-600 h-full px-4 bg-slate-900'
const active = 'hover:bg-slate-600 h-full px-4 bg-slate-600'

const Navigation = () => {
  return (
    <div className="w-screen flex justify-center items-center text-white h-[40px] bg-secondary1">
      <div className="w-1100 h-[40px] mx-auto flex items-center text-yellow-200 text-sm">
        {nav?.length > 0 &&
          nav.map((item, index) => {
            return (
              <div key={index} className="flex justify-center items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? active : notActive
                  }
                  style={{ lineHeight: "40px" }} // Set the line-height to 40px
                >
                  {item.name}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;