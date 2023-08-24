import { useRef } from "react";
import emailjs from "emailjs-com";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Main from "./mobil/contactMainTemplate.component";
import "./contact.styles.css";

const ContactMain = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  const [input, setInput] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [state, setState] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ehmxvcj",
        "template_prjwrin",
        form.current,
        "eXg2lKPPYwfs0dXJY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      {isMobile && (
        <form ref={form} onSubmit={sendEmail} className="inputContainerMobil">
          <label>Name</label>
          <Main
            classNameItem="wordInputMobil"
            name="name"
            type="text"
            valueName={input.name}
            onChange={handleInputChange}
          />
          <label>Subject</label>
          <Main
            classNameItem="wordInputMobil"
            name="subject"
            type="text"
            valueName={input.subject}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <Main
            classNameItem="wordInputMobil"
            name="email"
            type="email"
            valueName={input.email}
            onChange={handleInputChange}
          />
          <label>Your message</label>
          <textarea
            className="textInputMobil"
            rows="5"
            name="message"
            type="text"
            valueName={input.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="messageButton">
            Send me a message
          </button>
        </form>
      )}
      {isDesktopOrLaptop && (
        <form ref={form} onSubmit={sendEmail} className="inputContainerDesktop">
          <label>Name</label>
          <Main
            classNameItem="wordInputDesktop"
            name="name"
            type="text"
            valueName={input.name}
            onChange={handleInputChange}
          />
          <label>Subject</label>
          <Main
            classNameItem="wordInputDesktop"
            name="subject"
            type="text"
            valueName={input.subject}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <Main
            classNameItem="wordInputDesktop"
            name="email"
            type="email"
            valueName={input.email}
            onChange={handleInputChange}
          />
          <label>Your message</label>
          <textarea
            className="textInputDesktop"
            rows="5"
            name="message"
            type="text"
            valueName={input.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="messageButton">
            Send me a message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactMain;
