import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

// const listVariant = {
//   initial: {
//     x: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       staggerChildren: 0.15,
//     },
//   },
// };

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef(null);

  // ✅ نحط observer على الفورم نفسه
  // const isInView = useInView(formRef, {
  //  margin: "-100px",
  // triggerOnce: true,
  // amount: 0.2,
  // });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(() => {
        setSuccess(true);
        setError(false);

        // ✅ reset form بعد الإرسال
        formRef.current.reset();

        // message تختفي بعد 3 ثواني
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setSuccess(false);

        setTimeout(() => setError(false), 3000);
      });
  };

  return (
    <div className="contact">
      <div className="cSection">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          // variants={listVariant}
          // initial="initial"
          // animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 
          // variants={listVariant}
           className="cTitle">
            Let&apos;s keep in touch
          </motion.h1>

          <motion.div
          //  variants={listVariant}
            className="formItem">
            <label>Name</label>
            <input
              type="text"
              name="user_username"
              placeholder="John Doe"
              required
            />
          </motion.div>

          <motion.div 
          // variants={listVariant} 
          className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
              required
            />
          </motion.div>

          <motion.div 
          // variants={listVariant}
           className="formItem">
            <label>Message</label>
            <textarea
              rows={6}
              name="user_message"
              placeholder="Write your message..."
              required
            />
          </motion.div>

          <motion.button 
          // variants={listVariant}
           className="formButton">
            Send
          </motion.button>

          {success && <span className="success">Message sent ✅</span>}
          {error && <span className="error">Something went wrong ❌</span>}
        </motion.form>
      </div>

      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;