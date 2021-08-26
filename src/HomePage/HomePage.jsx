import React from "react";
import Banner from "../Components/Banner/Banner";
import Intro from "../Components/Intro/Intro";
import "./homepage.scss"

function HomePage() {

  return (
    <>
      <main>
        <div className="homepage" id="homepage">
          <Banner />
          <Intro />
        </div>
      </main>
    </>
  )
}

export default HomePage;