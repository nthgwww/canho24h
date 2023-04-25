import React from 'react'
import { Button, FormInput } from '../../components'

const Login = () => {
  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-2xl mb-3'>Đăng nhập</h3>
      <div className='w-full flex flex-col gap-5 '>
        <FormInput label={"SỐ ĐIỆN THOẠI"}/>
        <FormInput label={"MẬT KHẨU"} />
        <Button fullWidth text={'Đăng nhập'} bgColor='bg-secondary2' textColor='text-black' />
      </div>
      <div className='mt-7 flex items-center justify-between'>
        <small className='text-slate-900 hover:text-[red] cursor-pointer' >Bạn quên mật khẩu?</small>
        <small className='text-slate-900 hover:text-[red] cursor-pointer' >Tạo tài khoản mới</small>
      </div>
    </div>
  )
}

export default Login