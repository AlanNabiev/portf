import "./contact.css";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="mailto:alannabiev2001@gmail.com"
          className="contact "
          target={"blank"}
        >
          <AiOutlineMail className="icon" />
          <h2>
            Gmail <span>alannabiev2001@gmail.com</span>
          </h2>
        </a>

        <a
          href="https://instagram.com/n.a2k1?igshid=YmMyMTA2M2Y="
          className="contact "
          target={"blank"}
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            Instagram <span>@n.a2k1</span>
          </h2>
        </a>

        <a href="https://t.me/alandev23" target={"blank"} className="contact ">
          <FaTelegramPlane className="icon" />
          <h2>
            Telegram <span>@alandev23</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
