import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  var isActive = searchParams.get('filter') === 'active'
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />

      <button onClick={() => {setSearchParams({filter:'active'})}}>Active Users</button>  
      <button onClick={() => { setSearchParams({}) }}>Reset Filters</button>  
      {isActive ? (
        <h2>Showing Active users</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </div>
  )
}

export default Users