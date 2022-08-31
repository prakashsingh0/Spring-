import React from "react";
import "./style_header.css";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
        <div class="container-fluid" id="header1">
          <a class="navbar-brand" href="#">Spring</a>
          <button class="btn bg-red" type="button">Logout</button>
        </div>
      </nav>
    </>
  )
}

export default Header
