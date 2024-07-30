import { useState } from 'react'
import './App.css'
import { list } from './constants'
import ListItem from './components/ListItem'

function App() {

  const [showItem,setShowItem]=useState(0)
  
  return (
    <>
    <div className=''>
{
  list.map((item, index) => {
    return (
      <ListItem 
      key={index} 
      item={item} 
      showItem={index==showItem?true:false}
      setShowItem={()=>setShowItem(index)} />
    )

  })
}

    </div>
    </>
  )
}

export default App