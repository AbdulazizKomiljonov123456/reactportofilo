import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCnjnInTHPh10TseXWHEywMg"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>komiljonov abdulaziz</span>
          </h2>
        </a>

        <a
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
          WhatsApp <span>+998 (88) 036-37-17</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/abdulaziz777360/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>abdulaziz777360</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
