import React from 'react'
import './userlike.css'

const Userlikes = (users) => {
  return (
    <>
      <div>People you might like</div>
      <div class="col-lg-4 my-4">
        <svg class="bd-placeholder-img rounded-circle" width="80" height="80" xmlns={users.img} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h2>{users.username}</h2>
      </div>
    </>
  )
}

export default Userlikes
