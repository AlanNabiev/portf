import "./about.css";
import Buttons from '../button/button';

const About = () => {
  return (
    <div id="about" className="container">
    <div className="about-container">

    <h2>
        <span>About Me</span> <br />
        <p>
          Since 2018, I started my journey as a frontend developer. When my knowledge was enough to write projects regardless of the framework and complexity, I became interested in the backend. And one day I got interested in defi apps. When my knowledge became enough to create defi apps, I became interested in how it works at a lower level - that's how I got acquainted with solidity.
        </p>
      </h2>

      <Buttons />
    </div>
    </div>
  );
};

export default About;
