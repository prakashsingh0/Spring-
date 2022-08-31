import React from 'react'
import Userlikes from './Userlikes'

const ulike = (props) => {
  return (
    <div>
      <div className='container d-flex'>
        {props.ulike.map((ulike) => {
          return (
            <Userlikes users={ulike} />
          );
        })}

      </div>
    </div>
  )
}

export default ulike
