import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Account() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  const [persons, setPersons] = useState([]);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/login");
    setUser(null);
  }

  async function myOrders() {
    const { data } = await axios.post("/myorders", {
      userdata: user.name,
    });
    setPersons(data);
  }

  useEffect(() => {
    myOrders();
  });

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  if (!ready) {
    return "Loading..";
  }

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  function linkClasses(type = null) {
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
    if (type === subpage) {
      classes += " bg-tertiary text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  }

  return (
    <div className="grow">
      <nav className="w-full flex mt-8 justify-center gap-4 mb-10">
        <Link className={linkClasses("profile")} to={"/account"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          My Profile
        </Link>
        <Link className={linkClasses("orders")} to={"/account/orders"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          My Orders
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          <h4 className="font-semibold">
            Logged in as {user.name} ({user.email})
          </h4>
          <button
            onClick={logout}
            className="bg-tertiary text-white py-2 px-4 rounded-full mt-3"
          >
            Logout
          </button>
        </div>
      )}
      {subpage === "orders" && (
        <div>
          {!!persons &&
            persons.map((person) => {
              return (
                <div className="mt-8 mb-8 flex flex-col items-center">
                  <div className="text-center bg-gray-300 rounded-3xl px-20 py-10">
                    <h1 className="text-xl font-bold">{person.name}</h1>
                    {person.addr && (
                      <p className="text-lg">
                        Address:{" "}
                        <span className="font-semibold text-blue-700">
                          {person.addr}
                        </span>
                      </p>
                    )}
                    {person.mail && (
                      <p className="text-lg">
                        E-mail:{" "}
                        <span className="font-semibold">{person.mail}</span>
                      </p>
                    )}
                    {person.ph && (
                      <p className="text-lg">
                        Phone:{" "}
                        <span className="font-semibold text-blue-700">
                          {person.ph}
                        </span>
                      </p>
                    )}

                    <p className="text-lg">
                      Number of Materials ordered:{" "}
                      <span className="font-semibold">{person.no}</span>
                    </p>
                    <p className="text-lg">
                      Price:{" "}
                      <span className="font-semibold">Rs.{person.amt}</span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
