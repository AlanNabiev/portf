import "./experience.css";
import { AiOutlineDownload } from "react-icons/ai";
import resume from '../props/Nabiev Alan Web fullstack & Blockchain developer.pdf'

const Experience = () => {
  return (
    <div id="experience" className="container members-container">
      <h1 className="member-txt">Development experience</h1>

      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Mycelium Lab</h1>
          <h3 className="position">Place of work</h3>
          <h4 className="about">
            <p>
            In the Mycelium team, I work on the company's DeFi products. 
            </p>
            <p>
            Also, I am the main Vue.js Frontend, web3 developer & reviewer in the team & solidity developer. 
            </p>
          </h4>
          <a href="https://www.mycelium.team/" target="blank" className="contact-member">
            <span>Check</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">1inch Grant Foundation</h1>
          <h3 className="position">Grant program</h3>
          <h4 className="about">
            In the 1 inch Grant Foundation, I work on the company's DeFi product as the Angular Frontend, web 3 developer.
          </h4>
          <a href="https://1inch.io/ru/foundation-grant-program/" target="blank" className="contact-member">
            <span>Check</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Vitex</h1>
          <h3 className="position">Hackathon</h3>
          <h4 className="about">
            In the Vitex, I work on the company's DeFi product as the Vue Frontend, web 3 developer. As part of the 11th round of gitcoin hackathons.
          </h4>
          <a href="https://gitcoin.co/hackathons" target="blank" className="contact-member">
            <span>Check</span>
          </a>
        </div>
      </div>
      <div className="download">
      <h2>For mor info</h2>
      <a href={resume} download className="download" target={"blank"}>
        <AiOutlineDownload className="social" />
        Download resume
      </a>
      </div>
    </div>
  );
};

export default Experience;
