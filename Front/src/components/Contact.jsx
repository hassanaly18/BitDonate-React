import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Contact.css"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="banner">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT <span id="us">US</span></h2>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              rows="10"
              value={message}
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="btnwrapper">
              <button className="btn1 btn1--border btn1--primary btn1--animated" id="btn1" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
