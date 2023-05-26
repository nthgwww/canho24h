import React,{memo} from 'react'
import { text } from '../utills/dataInfor'
import icons from '../utills/icons'
import {Button} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../utills/Common/formatVietnameseToString'
 
const { MdStarRate }  = icons
const star = [1,2,3,4,5]

const Infor = () => {

  const {categories} = useSelector(state =>state.app)


  return (
    <div className='mt-4 justify-center items-center flex gap-1 flex-col border w-3/5 bg-yellow-400 rounded-md shadow-md text-slate-700 p-4 '>
      <h3 className='font-bold text-slate-900 text-lg uppercase'>{text.title}</h3>
      <p className='text-center my-4 text-gray-700'>
        {text.description}
        <span className='text-link'>
          {categories?.length > 0 && categories.map(item =>{
            return (
              <Link to={`/${formatVietnameseToString(item.value)}`} key={item.code} className='text-red-800 font-medium hover:text-red-500'>
                {`${item.value.toLowerCase()}, `}
              </Link>
            )
          })}
        </span>
        {text.description2}
      </p>
      <div className='flex items-center justify-between w-4/5'>
        {text.statistic.map((item, index)=>{
          return(
            <div className='flex flex-col items-center justify-between'>
              <h4 className='font-bold text-slate-900 text-lg'>{item.value}</h4>
              <p className='text-slate-700'>{item.name}</p>
            </div>
          )  
        })}
      </div>
      <h3 className='font-bold text-lg py-2 text-slate-800'>{text.price}</h3>
      <div className='flex items-center justify-center gap-1'>
        {star.map(item=>{
          return (
            <span key={item}>
              <MdStarRate size={24} color='red'/>
            </span>
          )
        })}
      </div>
      <p className='italic text-gray-700 text-center'>{text.comment}</p>
      <span className=' text-gray-800'>{text.author}</span>
      <h3 className='font-bold text-lg py-2 text-slate-800'>{text.question}</h3>
      <p>{text.answer}</p>
      <Button text='Đăng tin ngay' bgColor='bg-secondary1' textColor='text-white ' px='px-2'/>
      <div className='h-12'> 

      </div>
    </div>
  )
}

export default memo(Infor)