import React, { useCallback, useState } from 'react'
import { Mytitle } from './ui/Mytitle'
import { MysubTitle } from './ui/MysubTitle'

export const MemoHook = () => {
   
const [title, setTitle] = useState("hola")
const [subtitle, setSubtitle] = useState("Mundo")


const handleMyAPIcall = useCallback(() => {

  console.log("llamando a API -", subtitle);
}, [subtitle])

  return (
    <div className="bg-gradient flex flex-col gap-4">
         <h1 className='text-2xl font-thin text-white'> Memo app </h1>


       <Mytitle title={title} />

       <MysubTitle subtitle={subtitle} callmyAPi={handleMyAPIcall} />

     <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' 
       onClick={() => setTitle('hello' + new Date().getTime())} >
          Cambiar título
     </button>

      <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' 
      onClick={ () => setSubtitle('world')}
    >
        cambiar subtitulo
      </button>

    </div>
  )
}
