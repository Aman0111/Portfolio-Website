import { FormEvent, useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";
import contactSvg from "../assets/contact_us.svg";

const profile = {
  name: "Aman Dixit",
  email: "dixitaman.nov.wwe@gmail.com",
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage(
        "EmailJS is not configured yet. Add the EmailJS environment variables and restart the dev server."
      );
      return;
    }

    try {
      const templateParams = {
        to_email: profile.email,
        to_name: profile.name,
        from_name: String(formData.get("from_name") || ""),
        reply_to: String(formData.get("reply_to") || ""),
        subject: String(formData.get("subject") || ""),
        message: String(formData.get("message") || ""),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      form.reset();
      setStatus("success");
      setStatusMessage("Message sent to Aman. Thank you for reaching out.");
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
      setStatusMessage(
        "The message could not be sent. Please try again or email Aman directly."
      );
    }
  }

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-main">
          <div className="contact-image">
            <img src={contactSvg} alt="Contact illustration" />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="from_name">Name</label>
              <input id="from_name" name="from_name" type="text" placeholder="Enter your name" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="reply_to">Email</label>
              <input id="reply_to" name="reply_to" type="email" placeholder="Enter your email" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Brief subject" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} placeholder="Write your message here" required />
            </div>
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && (
              <div className={`contact-status contact-status-${status}`}>
                {statusMessage}
              </div>
            )}
          </form>
        </div>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:dixitaman.nov.wwe@gmail.com" data-cursor="disable">
                dixitaman.nov.wwe@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918595604117" data-cursor="disable">
                +91-8595604117
              </a>
            </p>
            <h4>Location</h4>
            <p>Bengaluru, Karnataka, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/aman-dixit-1a999117a/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:dixitaman.nov.wwe@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aman Dixit</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
