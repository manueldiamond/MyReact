import React from 'react'
import rlogo from '../../assets/react.svg'

export default function Navbar(){
  return (
    <div className='headr flex' >
    
     <img src={rlogo}/>
     <p>my travel journal</p>
    </div>
  )
}