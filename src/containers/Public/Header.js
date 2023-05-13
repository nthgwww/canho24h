import React, { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../utills/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../utills/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
    // eslint-disable-next-line
  }, []);

  // const goRegister = useCallback(() => {
  //   navigate(path.REGISTER);
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="w-full ml-409 bg-slate-900">
      <div className="max-w-1100 mx-auto flex items-center justify-between bg-slate-900">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[180px] h-[90px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-2">
          {!isLoggedIn && (
            <div className="flex items-center gap-2">
              <small className="text-gray-50 mr-2">
                Mặt bằng 24h xin chào!
              </small>
              <Button
                text={"Đăng ký"}
                textColor="text-black"
                bgColor="bg-white"
                onClick={() => goLogin(true)}
              />
              <Button
                text={"Đăng nhập"}
                textColor="text-black"
                bgColor="bg-white"
                onClick={() => goLogin(false)}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-2">
              <small className="text-gray-50 mr-2">Tên mày!</small>
              <Button
                text={"Đăng xuất"}
                textColor="text-black"
                bgColor="bg-white"
                onClick={() => dispatch(actions.logout())}
              />
            </div>
          )}
          <Button
            text={"Đăng tin mới"}
            textColor="text-black"
            bgColor="bg-secondary2"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
