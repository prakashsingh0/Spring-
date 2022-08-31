import React from 'react'
import './sidenav.css'
// import download from 'download.jpg'

const Userdash = ({ }) => {
const user_n = "user_name";
const user_id='user@gmail.com';

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
            <div class="col-lg-4 my-4 justify-content-center">
                <svg class="bd-placeholder-img rounded-circle text-inherit" width="140" height="140" xmlns="{download}" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                {/* <h2>{user.username}</h2> */}
            </div>
                <div className="userId">
                    <span className="fs-4">{user_n}</span>
                    <span>{user_id}</span>
                </div>
                <nav>
                    <div id="info">
                        <div>Post</div>
                        <div>Friend</div>
                    </div>
                </nav>

                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            {/* <svg className="bi me-2" width="16" height="16">
                                <use xlink:href="#home"></use>
                            </svg> */}
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">

                            friend
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">

                            Inbox
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">

                            Notifications
                        </a>
                    </li>

                </ul>
                <hr id="bottom" />
                <div className="btn " id="button">

                    <button id="btn1" type="button" className="btn btn-light">Setting</button>

                    <button id="btn2" type="button" className="btn btn-danger">Logout</button>
                </div>
            </div>
        </>
    );




}

export default Userdash

