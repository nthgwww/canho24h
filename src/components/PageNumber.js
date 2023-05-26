import React,{memo} from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const notActive = ' w-[46px] h-[48px]  flex justify-center items-center hover:bg-gray-300 hover:text-black rounded-md'
const active = 'w-[46px] h-[48px] bg-slate-800 text-white  flex justify-center items-center hover:bg-opacity-90  hover:text-white rounded-md '
const PageNumber = ({ text, currentPage, icon, setCurrentPage, type}) => {

  const navigate = useNavigate()
  const location = useLocation()
  const [paramsSearch] = useSearchParams()
  let entries = paramsSearch.entries()

  const append = ( entries ) => {
    let params = []
    paramsSearch.append('page', +text)
    for(let entry of entries){
      params.push(entry)
    }
    // console.log(params)
    let a = {}
    params?.map(item => {a =  { ...a, [item[0]] : item[1]}})
    return a
  }

  const handleChangePage = () => {
    if(!(text==='...')){
      // console.log(append(entries))
      setCurrentPage (+text) 
      navigate({
        pathname:location.pathname,
        search: createSearchParams(append(entries)).toString()
      });
      }
  }
  return (
    <div className={+text === +currentPage ? `${active}${text === '...' ? 'cursor-text' : 'cursor-pointer'}` : `${notActive} ${text === '...' ?'cursor-text':'cursor-pointer'}`}
      onClick={handleChangePage}  
    >
        {icon || text}
    </div>
  )
}

export default memo(PageNumber)