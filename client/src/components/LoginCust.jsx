import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginCust() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);

  async function handleCustLogin(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/clogin", {
        email,
        password,
      });
      if (data != null) {
        setUser(data);
        //alert("Login successful");
        setRedirect(true);
      } else {
        alert("Email and Password doesn't match");
      }
    } catch (e) {
      alert("Login failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/materials"} />;
  }

  return (
    <div className="flex items-center justify-around border border-s-4 border-gray-500 rounded-3xl p-6 lg:ml-24 md:ml-14 sm:ml-6">
      <div>
        <h1 className="text-4xl text-center mb-8 font-bold">Customer Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleCustLogin}>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="login-button font-semibold">LOGIN</button>
          <div className="text-center py-3 text-gray-700">
            Don't have an account?{" "}
            <Link
              to={"/registerc"}
              className="underline text-black font-semibold"
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
