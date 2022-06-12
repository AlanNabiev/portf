import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
          That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
        
      </h1>
      <div className="social-links">
        <a href="mailto:alannabiev2001@gmail.com" target={"blank"}>
          <AiOutlineMail className="social" />
        </a>
        <a href="https://github.com/AlanNabiev" target={"blank"}>
          {" "}
          <AiOutlineGithub className="social" />
        </a>
        <a href="https://t.me/alandev23">
          {" "}
          <FaTelegramPlane className="social" />
        </a>

        <a href="http://twitter.com/#!/aldev23" target={"blank"}>
          <AiOutlineTwitter className="social" />
        </a>

        <a href="https://instagram.com/n.a2k1?igshid=YmMyMTA2M2Y=" target={"blank"}>
          <AiOutlineInstagram className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
