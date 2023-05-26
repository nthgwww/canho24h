import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'

const SideItem = ({title, price, image, createdAt}) => {

  const formatTime=(createdAt) =>{
    moment.locale('vn')
    return moment(createdAt).fromNow()
  }

  return (
    <div className='w-full flex items-center gap-2 py-2 border-b border-gray-300'>
        <img src={image[0]} alt='anh' className='w-[65px] h-[65px] object-cover rounded-md flex-none' />
        <div className='w-full flex-auto flex-col justify-between'>
            <h4 className='font-[8px] text-yellow-400 text-[14px]'>{`${title?.slice(0,45)}...`}</h4>
            <div className='flex items-center justify-between w-full'>
                <span className='font-medium text-green-700 text-sm'>{price}</span>
                <span className='text-gray-300 text-[10px]'>{formatTime(createdAt)}</span>
            </div>  
        </div>
    </div>
  )
}

export default SideItem