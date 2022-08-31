import React from 'react'

const Explorers = ({ user }) => {
    console.log(user.img)
    return (
        <div>
            <div class="col-lg-4 my-4">
                
                 <img src={user.img} className="bd-placeholder-img rounded" width="140" height="140" aria-label="Placeholder: 140x140"  />
                <h2>{user.username}</h2>
            </div>
        </div>
    )
}

export default Explorers
