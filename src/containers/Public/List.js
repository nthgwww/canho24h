import React from 'react'
import { Button, Item } from '../../components'

const List = () => {
  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md'>
        <div className='flex items-center justify-between'>
            <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
            <span>Cập nhật 1:07 12/05/2023</span>
        </div>
        <div className='flex items-center gap-1 my-2'>
            <span>Sắp xếp:</span>
            <Button bgColor='bg-gray-300' text={'Mặc định'}/>
            <Button bgColor='bg-gray-300' text={'Mới nhất'}/>
        </div>
        <div className='items'>
            <Item />
            {/* <Item />
            <Item /> */}
        </div>
    </div>
  )
}

export default List