import React from 'react'

interface Props
{
    title:string;
}


export const Mytitle = React.memo(({title}: Props) => {
  
console.log('My tittle re-render');

return <h1>{title}</h1>
  
})
