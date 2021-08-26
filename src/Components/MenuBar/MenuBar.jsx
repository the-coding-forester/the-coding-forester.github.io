import { useState } from "react";
import { Link } from "react-router-dom";
import "./menubar.scss"

function MenuBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  }

  return (
    <div className="menubar" id="menubar">
      <div className="wrapper">
        <div className="left">
          the-coding-forester
        </div>
        <div className="right">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon my-toggler"></span>
          </button>
          <div className={`navbar-collapse ${navbarOpen ? "expand" : "collapse"}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleToggle}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://docs.google.com/document/d/1hyRQUcwSJTePA45mAb2lu4Lobr2qTue38VIEBUrrBeE/edit?usp=sharing" className="nav-link" onClick={handleToggle}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={handleToggle}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                < a href="https://github.com/the-coding-forester" onClick={handleToggle}>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar;