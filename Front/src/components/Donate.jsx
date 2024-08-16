import React from "react";
import { useState } from "react";
// import {Link} from "react-router-dom"

const Donate = () => {

  const [amount, setAmount] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false)

  return (
    <>
      <section className="donate">
        <form>
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
          <div>
            <label>Show your love for the Poor</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Donation Amount($USD)"
            />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter any message"
          />
          <button disabled={disableBtn} type="submit" className="btn">Donate {amount ? `$${amount}` : "$0"}</button>
        </form>
      </section>
    </>
  );
};

export default Donate;
