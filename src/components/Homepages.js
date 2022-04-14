import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepages = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>Homepages</div>
      <button onClick={()=>navigate('orderSummary', {replace: true})}>Place Order</button>
    </>
  )
}

export default Homepages