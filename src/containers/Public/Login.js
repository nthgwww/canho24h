import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { Button, FormInput } from '../../components'
import { useLocation } from 'react-router-dom'

const Login = () => {
  const location = useLocation()

  const [isRegister, setIsRegister] = useState(location.state?.flag)
  // console.log(location.state)
  useEffect(() => { 
    setIsRegister(location.state?.flag)
   },[location.state?.flag])

  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Đăng kí tài khoản' : "Đăng nhập"}</h3>
      <div className='w-full flex flex-col gap-5 '>
        {isRegister && <FormInput label={'HỌ TÊN'} />}
        <FormInput label={"SỐ ĐIỆN THOẠI"}/>
        <FormInput label={"MẬT KHẨU"} />
        <Button 
          fullWidth 
          text={isRegister ? 'Đăng kí' : 'Đăng nhập'}
          bgColor='bg-secondary2' 
          textColor='text-black' />
      </div>
      <div className='mt-7 flex items-center justify-between'>
        {isRegister ? <small>Bạn đã có tài khoản? <span onClick={() => { setIsRegister(false) }} className='text-blue-500 hover:underline'>Đăng nhập ngay</span></small>
        : <>
        <small className='text-slate-900 hover:text-[red] cursor-pointer' >Bạn quên mật khẩu?</small>
        <small onClick={()=>{setIsRegister(true)}} className='text-slate-900 hover:text-[red] cursor-pointer' >Tạo tài khoản mới</small>
        </>}
      </div>
    </div>
  )
}

export default Login