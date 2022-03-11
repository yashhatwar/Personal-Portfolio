import landingil from "../../assets/vectors/landingil.svg";
import gsap from "gsap";
import { useEffect } from "react";

import "./landingsection.css";

const Landingsection = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".main-heading", { opacity: 1, duration: 1.5 })
      .from(".main-heading", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      })

      .to(".sub-heading", {
        opacity: 1,
        duration: 1.5,
        delay: -1,
      })

      .from(".sub-heading", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      })

      .to(".landing-il", {
        opacity: 1,
        duration: 1.0,
        delay: -1.0,
      })
      .from(".landing-il", {
        y: 150,
        duration: 1.0,
        delay: -1.0,
      })

      .to(".navbar", {
        opacity: 1,
        duration: 1.5,
        delay: -0.75,
      });
  }, []);

  return (
    <section id="landing">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li className="nav-links">
              <a data-scroll href="#landing">
                Home
              </a>
            </li>
            <li className="nav-links">
              <a data-scroll href="#about">
                About
              </a>
            </li>
            <li className="nav-links">
              <a data-scroll href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-links">
              <a data-scroll href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-link contact">
              <a href="mailto:yashhatwar40@gmail.com">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="landing">
        <article>
          <h2 className="main-heading">
            Hey, I am<span className="orange"> Yash Hatwar</span>{" "}
          </h2>
          <h3 className="sub-heading">
            I am a <span className="green"> MERN Stack Developer</span>
          </h3>
        </article>
        <img src={landingil} alt="Landing Image" className="landing-il"></img>
        <a data-scroll href="#Projects" className="chevron">
          <div class="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </a>
      </main>
    </section>
  );
};

export default Landingsection;
