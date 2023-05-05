import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function OrderPlace() {
  const { subpage } = useParams();
  const dealer = useLocation().state;
  const [price, setPrice] = useState("");
  const [numofmat, setNumOfMat] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { user } = useContext(UserContext);

  function handlePrice(ev) {
    const x = ev.target.value * dealer.price;
    setNumOfMat(ev.target.value);
    setPrice(x);
  }

  function placeOrder(ev) {
    ev.preventDefault();
    try {
      if (!window.confirm("Confirm your order? ")) {
        return;
      }
      axios.post("/order", {
        customer_name: user.name,
        dealer_name: dealer.name,
        d_cname: dealer.cname,
        num_of_mat: numofmat,
        amt: price,
      });
      //alert("Successful");
      setRedirect(true);
    } catch (e) {
      alert("Failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/materials"} />;
  }

  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center mb-8 font-bold capitalize underline">
        {subpage} orders
      </h1>
      <form className="max-w-md mx-auto text-center" onSubmit={placeOrder}>
        <p>Available Stocks: {dealer.stock}</p>
        <p className="text-lg font-sans">
          Give the number of materials you want to order:
        </p>
        <div className="flex flex-col justify-around mb-6">
          <input type="text" onChange={handlePrice} required />
          <span className="text-lg font-semibold">Price: Rs.{price}</span>
        </div>
        <button className="bg-tertiary text-lg text-white py-2 px-4 rounded-full">
          Place Order
        </button>
      </form>
    </div>
  );
}
