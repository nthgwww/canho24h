import React,{memo} from 'react'

const FormInput = ({label}) => {
  return (
    <div>
        <label htmlFor='phone' className='text-xs'>{label}</label>
        <input 
        type='text'
        id='phone'
        className='outline-none bg-slate-200 p-2 rounded-md w-full'/>
    </div>
  )
}

export default memo(FormInput)