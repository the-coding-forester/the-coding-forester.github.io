import "./banner.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

function Banner() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Engineer", "Web Developer"],
      backDelay: 1500,
    });
  }, [])

  return (
    <div className="banner" id="banner" role="img" aria-label="forest canopy from below">
      <div className="item">
        <h2>Hello, I'm</h2>
        <h1>Stephanie Moore</h1>
        <h3>Full-Stack <span ref={textRef}></span></h3>
      </div>
    </div>
  )
}

export default Banner;