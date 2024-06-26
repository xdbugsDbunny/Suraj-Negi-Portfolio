import React, { useRef, useState } from "react";
import Circles from "../Components/Circles";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../Utils/variants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const SERVICE_ID = process.env.EMAIL_SERVICE_ID;
  const TEMPLATE_ID = process.env.TEMPLATE_ID;
  const USER_ID = process.env.USER_ID;

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID);
      toast.success("Email sent successfully!", {
        position: "top-center",
      });
      form.current.reset();
    } catch (error) {
      setSending(false);
      console.error("Failed to send email:", error);
      toast.error("Failed to send email.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="h-full md:h-screen bg-primary/30">
      {sending && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
          <div
            className="loader ease-linear rounded-full border-2 border-[#1976d2] h-[5rem] w-[5rem] "
            role="status"
          ></div>
        </div>
      )}
      <div className="container mx-auto py-28 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h2 text-center mb-2 md:mt-8"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex-1 flex flex-col gap-2 sm:gap-4 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="input"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="input"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
            />
            <textarea
              placeholder="Message"
              name="message"
              className="textarea"
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
              type="submit"
              disabled={sending} // disable button while sending
            >
              <span
                className={`group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300 ${
                  sending ? "opacity-0" : ""
                }`}
              >
                Let's talk
              </span>
              <BsArrowRight
                className={`-translate-y-[150%] group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] ${
                  sending ? "opacity-0" : ""
                }`}
              />
            </button>
            <ToastContainer />
          </motion.form>
        </div>
        <Circles />
      </div>
    </div>
  );
};

export default Contact;
