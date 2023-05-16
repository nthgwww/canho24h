import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../services/category";
import { formatVietnameseToString } from "../../utills/Common/formatVietnameseToString";

const notActive = "hover:bg-slate-600 h-full px-4 bg-slate-900";
const active = "hover:bg-slate-600 h-full px-4 bg-slate-600";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetCategories();
      if (response?.data.err === 0) {
        setCategories(response.data.response);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="w-full flex justify-center items-center text-white h-[40px] bg-secondary1">
      <div className="max-w-1100 font-medium h-[40px] mx-auto flex items-center text-yellow-200 text-sm">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
          style={{ lineHeight: "40px" }} // Set the line-height to 40px
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div key={item.code} className="flex justify-center items-center">
                <NavLink
                  to={`${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                  style={{ lineHeight: "40px" }} // Set the line-height to 40px
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
