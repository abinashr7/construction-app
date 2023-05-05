import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import Layout from "./Layout";
import LoginPage from "./components/LoginPage";
import RegisterPageCust from "./components/RegisterPageCust";
import RegisterPageDealer from "./components/RegisterPageDealer";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Account from "./components/Account";
import Materials from "./components/Materials";
import MaterialsSales from "./components/MaterialsSales";
import About from "./components/About";
import OrderPlace from "./components/OrderPlace";
import ContactUs from "./components/ContactUs";
import LogoInfo from "./components/LogoInfo";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registerc" element={<RegisterPageCust />} />
          <Route path="/registerd" element={<RegisterPageDealer />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:subpage" element={<Account />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/materials/:subpage" element={<MaterialsSales />} />
          <Route path="/:subpage/placeorder" element={<OrderPlace />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/logo" element={<LogoInfo />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
