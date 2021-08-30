import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Image from "react-bootstrap/Image";

import MenuBar from "../MenuBar/MenuBar"

import GitHubLogo from '../../Images/GitHub-Mark-64px.png';
import LinkedInLogo from '../../Images/LI-In-Bug.png';
import StackOverflowLogo from '../../Images/StackOverflow.png';


import "./intro.scss"

function Intro() {
  return (
    <div className="intro" id="intro">
      <MenuBar />
      <div className="item">
        <Row>
          <Col>Connect with Me</Col>
        </Row>
        <Row><br /></Row>
        <Row>
          <Col>
            <a href="https://github.com/the-coding-forester">
              <Image className="image" src={GitHubLogo} alt="GitHub Icon" />
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/the-coding-forester/">
              <Image className="image" src={LinkedInLogo} alt="LinkedIn Icon" />
            </a>
          </Col>
          <Col>
            <a href="https://stackoverflow.com/users/15086797/the-coding-forester">
              <Image className="image" src={StackOverflowLogo} alt="LinkedIn Icon" />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Intro;