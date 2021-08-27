import Image from "react-bootstrap/Image";
import MenuBar from "../MenuBar/MenuBar"
import "./intro.scss"

function Intro() {
  return (
    <div className="intro" id="intro">
      <MenuBar />
      <div className="item">
        <div className="row">
          <div className="column">Connect with Me</div>
        </div>
        <div className="row">
          <div className="column"><Image src="src/Images/GitHub-Mark-64px.png" /></div>
          <div className="column"><Image src="src/Images/LI-In-Bug.png" /></div>
          <div className="column">Image</div>
        </div>
      </div>
    </div>
  )
}

export default Intro;