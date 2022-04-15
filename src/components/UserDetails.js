import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  // without destructuring
  // const params = useParams()

  const {userId} = useParams()

  // With destructuring we can directly use userId. 
  //This is the userId which we used as path in Route
  // console.log(params)
  return (
    // <div>Details about the user { params.userId}</div>
    <div>Details about the user { userId}</div>
  )
}

export default UserDetails