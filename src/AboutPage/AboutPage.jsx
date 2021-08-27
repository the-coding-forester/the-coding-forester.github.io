import React from "react";
import MenuBar from "../Components/MenuBar/MenuBar"
import "./aboutpage.scss"

function AboutPage() {
  const about = (
    <div className="about">
      <br />
      <p>
        I am a full-stack developer proficient in Javascript, HTML, CSS and complimentary tools and libraries.
        In August 2021, I completed a immersive software engineering program based in JavaScript working on real world
        projects and studying material written by experts 50-60 hours a week for 5 months. During this time and in the
        months proceeding the program I earned several certifications centered around programming in addiction to graduating
        from the bootcamp.
      </p>
      <br />
      <p>
        Additionally I have a decade of various experiences in leadership and in training. I spent three years in forestry where I
        gained experience with complex systems and breaking down large compound problems to solve challenges and make improvements.
        In my professional experience I have trained at least 3 dozen people for various positions not including volunteers I have
        educated and trained for distinct tasks or to achieve specific goals.
      </p>
      <br />
      <p>
        I enjoy being challenged and love the variety in how I am tested as a developer. I find the complexity of programming similar
        to that of managing 2100 acres of diverse land, there are always unique situations you want to manage for and research and
        collaboration are often your friends. Whether it is building an entire full-stack application (for the first time) or writing
        and implementing a management plan to to restore a endangered sunflower population (also for the first time), I have proven
        myself up to the challenge.
      </p>
    </div>
  )

  return (
    <div className="aboutpage" id="aboutpage">
      <MenuBar />
      {about}
    </div>
  )
}

export default AboutPage;