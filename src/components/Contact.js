import React from 'react'
import { text } from '../utills/dataContact'
import Button from './Button'

const Contact = () => {
  return (
    <div className='bg-secondary1 text-white rounded-md shadow-md w-3/5 p-4 mt-4 gap-6 flex flex-col justify-center items-center'>
      <img src={text.image} alt='thumnail' className='w-full h-48 object-contain'/>
      <p>{text.content}</p>
      <div className='flex items-center justify-around w-full'>
        {text.contacts.map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-center justify-center'>
              <span className='text-yellow-400 font-semibold'>{item.text}</span>
              <span className='text-[18px]  font-semibold'>{item.phone}</span>
              <span className='text-[18px]  text-blue-400 font-semibold'>{item.zalo}</span>
            </div>
          )
        })}
      </div>
      <Button 
        text='Gửi liên hệ'
        bgColor='bg-blue-400'
        textColor='text-white'
        px='px-6'
      />
    </div>
  )
}

export default Contact