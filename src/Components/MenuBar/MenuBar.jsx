import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./menubar.scss"

function MenuBar() {

  return (
    <div className="menubar" id="menubar">
      <Navbar variant="dark" expand="md" >
        <Navbar.Brand href="/">the-coding-forester</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/137Lq4LTOyBtMZnwQ-Qo6TG3imWV4lSyi/view?usp=sharing">Resume/PDF</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="https://github.com/the-coding-forester">Projects/GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default MenuBar;