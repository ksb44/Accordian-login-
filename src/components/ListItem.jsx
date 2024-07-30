import React, { useState } from 'react'

const ListItem = ({item,showItem,setShowItem}) => {

    const handleClick=()=>{
     setShowItem()
    }
  return (
    <div className='w-1/2 m-auto border-b-4 my-4'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
      <h1 className='' >{item.name}</h1>
      <span >v</span>
      </div>
      <div>
        {showItem && <p className=''>{item.age}</p> }
      </div>
    </div>
  )
}

export default ListItem
