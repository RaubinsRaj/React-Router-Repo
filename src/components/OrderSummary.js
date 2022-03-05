import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate= useNavigate()
  return (
      <>
    <div>OrderSummary</div>
    <button onClick={()=>navigate('/', {replace:true})}>GoBack</button>
    </>
  )
}
