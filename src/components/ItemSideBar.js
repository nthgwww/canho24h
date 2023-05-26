import React, {memo} from 'react'
import icons from '../utills/icons'
import { formatVietnameseToString } from '../utills/Common/formatVietnameseToString'
import { Link } from 'react-router-dom'
// import * as actions from '../store/actions'
// import { useDispatch } from 'react-redux'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'


const {MdOutlineNavigateNext} = icons

const ItemSideBar = ({title, content, isDouble, type}) => {
  // const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)


  const formatContent = () => {
    const oddEl = content?.filter((item, index)=>index%2 !== 0 )
    const evenEl = content?.filter((item, index)=>index%2 === 0 )
    const formatContent = oddEl?.map((item,index)=>{
      return{
        right: item,
        left:evenEl?.find((item2, index2)=>index2 === index )
      }
    })

    return formatContent
  }

  // console.log(formatContent())
  const handleFilterPosts = (code) =>{
      navigate({
        pathname: location.pathname,
        search: createSearchParams({
          [type]: code,
        }).toString()
      });
  }

  return (
    <div className='p-4 rounded-md bg-slate-900 text-white w-full'>
        <h3 className='text-lg font-semibold mb-4'>{title}</h3>
        {!isDouble && <div className='flex flex-col gap-2'>
          {content?.length > 0 && content.map(item => {
            return (
              <Link to={`${formatVietnameseToString(item.value)}`} key={item.code} className='flex gap-2 items-center cursor-pointer hover:text-yellow-400 border-b border-dashed border-gray-500 pb-1'>
                <MdOutlineNavigateNext size={14} color='white' />
                <p>{item.value}</p>
              </Link>
          )
          })}
        </div>}
        {isDouble && <div className='flex flex-col gap-2'>
          {content?.length > 0 && formatContent(content).map((item, index) => {
            return (
              <div key={index} className=''>
                <div className='flex items-center justify-around'>
                  <div 
                    onClick={()=> handleFilterPosts(item.left.code)}
                    className='flex flex-1 border-b border-gray-500 border-dashed items-center cursor-pointer hover:text-yellow-400  pb-1'>
                    <MdOutlineNavigateNext size={14} color='white' />
                    <p>{item.left.value}</p>
                  </div>
                  <div 
                     onClick={()=> handleFilterPosts(item.right.code)}
                    className='flex flex-1 border-b border-gray-500 border-dashed items-center cursor-pointer hover:text-yellow-400  pb-1'>
                    <MdOutlineNavigateNext size={14} color='white' />
                    <p>{item.right.value}</p>
                </div>
                </div>
              </div>
          )
          })}
        </div>}
    </div>
  )
}

export default memo(ItemSideBar)