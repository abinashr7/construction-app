import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MaterialsSales() {
  const [users, setUsers] = useState([]);
  const { subpage } = useParams();
  const url = "/" + subpage + "/placeorder";

  useEffect(() => {
    axios
      .post("/materials", {
        material: subpage,
      })
      .then(({ data }) => {
        setUsers(data);
      });
  }, [subpage]);

  return (
    <div>
      <div className="mt-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold capitalize">{subpage} dealers</h1>
        <p className="text-gray-600">
          (Select your desired dealer to place the order)
        </p>
      </div>
      {users.map((user) => {
        return (
          <div className="mt-8 mb-8 flex flex-col items-center">
            <Link
              state={user}
              to={url}
              className="text-center bg-gray-200 rounded-xl hover:bg-gray-300 hover:rounded-3xl px-20 py-10"
            >
              <h1 className="text-xl font-bold">{user.cname}</h1>
              <h3 className="font-semibold text-blue-700">{user.address}</h3>
              <p className="text-lg">
                Stocks left: <span className="font-semibold">{user.stock}</span>
              </p>
              <p className="text-lg">
                Price: <span className="font-semibold">Rs.{user.price}</span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
