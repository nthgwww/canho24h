import React, {useCallback} from "react";
import logo from "../../assets/logo.png";
import { Button } from '../../components';
import icons from '../../utills/icons';
import { useNavigate } from 'react-router-dom';
import { path } from "../../utills/constant";

const { AiOutlinePlusCircle } = icons

const Header = () => {
  const navigate = useNavigate()
  const goLogin = useCallback(()=>{
    navigate(path.LOGIN)
    // eslint-disable-next-line
  },[])
  return (
    <div className="w-full ml-409 bg-slate-900">
  <div className="w-1100 mx-auto flex items-center justify-between bg-slate-900">
    <img src={logo} alt="logo" className="w-[180px] h-[90px] object-contain" />
    <div className="flex items-center gap-2">
      <small className="text-gray-50 mr-2">Mặt bằng 24h xin chào!</small>
      <Button
        text={'Đăng ký'}
        textColor='text-black'
        bgColor='bg-white'
        onClick={goLogin}
      />
      <Button
        text={'Đăng nhập'}
        textColor='text-black'
        bgColor='bg-white'
        onClick={goLogin}
      />
      <Button
        text={'Đăng tin mới'}
        textColor='text-black'
        bgColor='bg-secondary2'
        IcAfter={AiOutlinePlusCircle}
      />
    </div>
  </div>
</div>
  );
};

export default Header;
