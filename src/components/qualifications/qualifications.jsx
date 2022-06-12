import "./qualifications.css";

function Qualifications() {
  return (
    <div id="qualifications" className="container qualifications-outer-container">
      <div>
        <span className="quali-text">My Qualifications</span>
        <div className="qualifications-container">
          <div className="qualification">
            <div className="content html"></div>
            <h1>Javasrcipt & Typescipt</h1>
          </div>
          <div className="qualification">
            <div className="content css"></div>
            <h1>Node js</h1>
          </div>
          <div className="qualification">
            <div className="content javascript"></div>
            <h1>Vue</h1>
          </div>
          <div className="qualification">
            <div className="content bootstrap"></div>
            <h1>React</h1>
          </div>
          <div className="qualification">
            <div className="content react"></div>
            <h1>Angular</h1>
          </div>
          <div className="qualification">
            <div className="content c-plus-plus"></div>
            <h1>Solidity</h1>
          </div>
          <div className="qualification">
            <div className="content c-sharp"></div>
            <h1>Web3 js</h1>
          </div>
          <div className="qualification">
            <div className="content kotlin"></div>
            <h1>Ethers js</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Qualifications;
