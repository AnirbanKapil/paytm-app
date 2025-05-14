import React from 'react'

function ActiveUsers({users}) {
    console.log(users)
  return (
    <div className='m-2'>
        {users.map((user)=>(
           <h1 className='text-3xl font-semibold'>{user.firstname} {user.lastname}</h1>
        ))}
    </div>
  )
}

export default ActiveUsers