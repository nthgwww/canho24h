import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'
import { Button, FormInput } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector(state => state.auth)
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  // console.log(location.state)
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(()=>{
    isLoggedIn && navigate('/')
  },[isLoggedIn])

  const handleSubmit = async () => {
    // console.log(payload)
    // const response = await apiRegister(payload)
    // console.log(response)
    let finalPayload = isRegister ? payload : {
      phone:payload.phone,
      password:payload.password
    }
    let invalids = validate(finalPayload);
    if(invalids === 0)
    isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload))
    // console.log(invalids)
  };
  
  // console.log(invalidFields)
  const validate = (payload) => {
    // console.log(payload)
    let invalids = 0;
    //chuyen object thanh mang
    let fields = Object.entries(payload);
    // console.log(fields)
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống ô này",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          console.log(typeof +item[1]);
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ!",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids
    // console.log(fields);
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Đăng kí tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5 ">
        {isRegister && (
          <FormInput setInvalidFields={setInvalidFields} invalidFields = {invalidFields}
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            type={"name"}
          />
        )}
        <FormInput setInvalidFields={setInvalidFields} invalidFields= {invalidFields}
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          type={"phone"}
        />
        <FormInput setInvalidFields={setInvalidFields} invalidFields= {invalidFields}
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          type={"password"}
        />
        <Button
          fullWidth
          text={isRegister ? "Đăng kí" : "Đăng nhập"}
          bgColor="bg-secondary2"
          textColor="text-black"
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?{" "}
            <span
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                })
              }}
              className="text-blue-500 hover:underline"
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-slate-900 hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu?
            </small>
            <small
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                })
              }}
              className="text-slate-900 hover:text-[red] cursor-pointer"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
