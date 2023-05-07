import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { apiRegister } from '../../services/auth'
import { Button, FormInput } from '../../components'
import { useLocation } from 'react-router-dom'
import * as actions from '../../store/actions'
import { useDispatch } from 'react-redux'

const Login = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [payload, setPayload] = useState({
    phone:'',
    password:'',
    name:''
  })
  // console.log(location.state)
  useEffect(() => { 
    setIsRegister(location.state?.flag)
   },[location.state?.flag])

  const handleSubmit = async () => {
    console.log(payload)
    // const response = await apiRegister(payload)
    dispatch(actions.register(payload))
    // console.log(response)
  }

  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Đăng kí tài khoản' : "Đăng nhập"}</h3>
      <div className='w-full flex flex-col gap-5 '>
        {isRegister && <FormInput label={'HỌ TÊN'} value={payload.name} setValue={setPayload} type={'name'}/>}
        <FormInput label={"SỐ ĐIỆN THOẠI"} value={payload.phone} setValue={setPayload} type={'phone'} />
        <FormInput label={"MẬT KHẨU"} value={payload.password} setValue={setPayload} type={'password'} />
        <Button 
          fullWidth 
          text={isRegister ? 'Đăng kí' : 'Đăng nhập'}
          bgColor='bg-secondary2' 
          textColor='text-black' 
          onClick={handleSubmit}
          />
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