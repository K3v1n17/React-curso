import React, { memo } from 'react'

interface Props {
    subtitle:string;

    callmyAPi : () => void;
}
export const MysubTitle = memo (({subtitle, callmyAPi}:Props) => {
  console.log("My subtitle re-render");
  
  
    return (
    <> 
     <h6 className='text-2xl font-bold'> {subtitle}</h6>

     <button className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer' onClick={callmyAPi}> llamar a funcion </button>
    </>
  )
})
