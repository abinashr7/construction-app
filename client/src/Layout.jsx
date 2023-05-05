import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function Layout() {
  return (
    <div className="p-4 flex flex-col grow">
      <Navbar />
      <Outlet />
    </div>
  );
}
