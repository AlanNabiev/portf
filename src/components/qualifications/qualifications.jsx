import "./qualifications.css";
import { settings } from '../../constants/slider'
import Slider from 'react-slick'
function Qualifications() {

  return (
    <div id="qualifications" className="qualifications-box container">
          <h2>Qualifications</h2>
          <Slider as="div" className="qualifications-container" {...settings}>
            <div className="qualifications-container-item">
              <div className="js"></div>
              <p>
              JS & TS
              </p>
            </div>
            <div className="qualifications-container-item">
              <div className="node"></div>
              <p>
              Node js
              </p>
            </div>
            <div className="qualifications-container-item">
              <div className="vue"></div>
              <p>
              Vue
              </p>
            </div>
            <div className="qualifications-container-item">
              <div className="react"></div>
              <p>
              React
              </p>
            </div>
            <div className="qualifications-container-item">
              <div className="angular"></div>
              <p>
              Angular
              </p>
            </div>
            <div className="qualifications-container-item">
              <div className="solidity"></div>
              <p>
              Solidity
              </p>
            </div>
            <div className="qualifications-container-item">
              <div className="w3"></div>
              <p>
              Web3 js
              </p>
            </div>
            <div className="qualifications-container-item">
              <div className="ethers"></div>
              <p>
              Ethers js
              </p>
            </div>
        </Slider>
      </div>
  );
}
export default Qualifications;
