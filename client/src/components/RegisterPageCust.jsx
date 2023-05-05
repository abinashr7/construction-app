import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPageCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [redirect, setRedirect] = useState(false);

  function registerCustomer(ev) {
    ev.preventDefault();
    try {
      axios.post("/cregister", {
        name,
        email,
        password,
        phone,
        address,
      });
      alert("Registration successful. Now you're ready to login");
      setRedirect(true);
    } catch (e) {
      alert("Registration failed.");
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="mt-16 grow flex items-center justify-around">
      <div className="mb-64 p-10 border border-s-4 border-gray-500 rounded-2xl">
        <h1 className="text-4xl text-center mb-8 font-bold">
          Customer Registration
        </h1>
        <form className="max-w-md mx-auto" onSubmit={registerCustomer}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            required
          />
          <textarea
            rows="7"
            cols="30"
            placeholder="Your Address"
            className="resize-none"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
            required
          ></textarea>
          <button className="register-button font-semibold">REGISTER</button>
          <div className="text-center py-3 text-gray-700">
            Already a member?{" "}
            <Link to={"/login"} className="underline text-black font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
