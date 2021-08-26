import React from "react";
import Banner from "../Components/Banner/Banner";
import Intro from "../Components/Intro/Intro";
import MenuBar from "../Components/MenuBar/MenuBar";
import "./homepage.scss"

function HomePage() {

  return (
    <>
      <main>
        <div className="homepage">
          <MenuBar />
          <div className="sections">
            <Banner />
            <Intro />
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage;