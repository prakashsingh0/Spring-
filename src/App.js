import React from "react";
import Dashbord from "./spring/Dashbord";
import Explorer from "./spring/Explorer";
import Header from "./spring/Header";
import SearchBar from "./spring/searchbar";
import Userlikes from "./spring/Userlikes";

function App() {
  const userId=[{
    image:"img",
    name:"username",
    id:"email"
}]


  const explorer = [
    {
      sno: 1,
    img: "https://i.pinimg.com/564x/15/b2/dc/15b2dc15002acfc89527472308b306ea.jpg",
      username: "user"
    },
    {
      sno: 2,
      img:"./spring/download.jpg",
      username: "user2"
    },
    {
      sno: 3,
      img: "./download.jpg",
      username: "user3"
    },
    {
      sno: 4,
      img: "./download",
      username: "user4"
    }

  ]
  const ulike = [
    {
      sno: 1,
      img: "./download.jpg",
      username: "user"
    },
    {
      sno: 2,
      img: "./download.jpg",
      username: "user2"
    },
    {
      sno: 3,
      img: "./download.jpg",
      username: "user3"
    },
    {
      sno: 4,
      img: "./download.jpg",
      username: "user4"
    }
  ]

  return (

    <>
      <div className=""><Header />,

        <div className="row">

          <div className="col-6">
            <div className="row">
              <div className="col-5 text-center">
                <Dashbord userId={userId} />,
              </div>

              <div className="col color-bg">
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col d-flex">
                <Userlikes ulike={ulike} />
              </div>
            </div>
            <div className="row d-flex">
              <Explorer explorer={explorer} />,
            </div>

          </div>
        </div>

      </div>

    </>
  );
};


export default App;
