import React, { useEffect, useState } from 'react'
import { PageNumber } from '../../components'
import { useSelector } from 'react-redux'
import icons from "../../utills/icons";
// import { text } from '../../utills/constant';
import { useSearchParams } from 'react-router-dom';

const {GrFormNextLink, GrFormPreviousLink } = icons

const Pagination = ({page}) => {
    const {count, posts} = useSelector(state => state.post)
    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isHideEnd, setIsHideEnd] = useState(false)
    const [isHideStart, setIsHideStart] = useState(false)
    const [searchParams] = useSearchParams();

    useEffect(() => {
        let page = searchParams.get('page')
        page && +page !== currentPage && setCurrentPage(+page)
        !page && setCurrentPage(1) 
    },[searchParams])

    useEffect(() => {
        // so phan trang lam tron bang tong / posts
        // let maxPage = Math.floor(count / (posts && posts.length ? posts.length : 0));
        let maxPage = Math.ceil(count / +process.env.REACT_APP_LIMIT_POSTS)
        // console.log(currentPage)
        let end = (currentPage + 1) > maxPage ? maxPage : (currentPage + 1)
        let start = (currentPage - 1) <=0  ? 1 : (currentPage - 1)       
        let temp =[]
        for(let i=start; i<=end; i++)
            temp.push(i)
            setArrPage(temp)
            currentPage  >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false)
            currentPage  <= 2  ? setIsHideStart(true) : setIsHideStart(false)
    },[count, posts, currentPage])  
    // console.log(arrPage)

  return (
    <div className='mt-2 flex items-center justify-center gap-2'>
        {!isHideStart && <PageNumber  icon={<GrFormPreviousLink />} setCurrentPage= {setCurrentPage} type='end' text={1} />}
        {!isHideStart && <PageNumber  text={'...'} />}
        {arrPage.length > 0 && arrPage.map(item => {
            return (
                <PageNumber
                 key={item} 
                 text={item}
                 setCurrentPage= {setCurrentPage}
                 currentPage={currentPage}
                />
            )
        })}  
        {!isHideEnd && <PageNumber  text={'...'} />}
        {!isHideEnd && <PageNumber  icon={<GrFormNextLink />} setCurrentPage= {setCurrentPage} type='end' text={Math.floor(count / posts?.length + 1)} />}
    </div>
  )
}

export default Pagination