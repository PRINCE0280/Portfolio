import { FaTelegramPlane } from "react-icons/fa";
import styles from "./Message.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const MessageForm = () => {
  const [state, handleSubmit] = useForm("xanedpqe");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);

    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  return (
    <div className={styles.container} id="message">
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Questions, Thoughts, Or Just Want To Say Hello?</p>
      </div>

      {state.succeeded && (
        <p className={styles.success}>Thanks for your message! I'll get back to you soon.</p>
      )}

      <div>
        <form className={styles.links} onSubmit={handleFormSubmit}>
          <div className={styles.link}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={styles.input}
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </div>

          <div className={styles.link}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={styles.input}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className={styles.link}>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              className={styles.input}
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>

          <div className={styles.link}>
            <textarea
              name="message"
              placeholder="Enter your message"
              className={`${styles.input} ${styles.textarea}`}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button className={styles.button} type="submit" disabled={state.submitting}>
            Send Message <FaTelegramPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
