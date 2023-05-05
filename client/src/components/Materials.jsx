import cement from "../images/cement.jpg";
import bricks from "../images/brick.jpg";
import sand from "../images/sand.jpg";
import gravels from "../images/gravels.jpg";
import rod from "../images/rod.jpg";
import pipe from "../images/pipe.jpg";
import { Link } from "react-router-dom";

export default function Materials() {
  return (
    <div>
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-4xl font-bold">Materials</h1>
        <p>(Select the material you want to buy)</p>
        <div className="mt-10 grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-2 gap-8 mb-10">
          <Link to={"/materials/cement"} className="flex h-72" id="cement">
            <img
              src={cement}
              alt="cement"
              rel="noreferrer"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute">
              <span className="text-white font-bold ml-2 text-2xl">Cement</span>
            </div>
          </Link>

          <Link to={"/materials/bricks"} className="flex h-72" id="bricks">
            <img
              src={bricks}
              alt="bricks"
              rel="noreferrer"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute left-auto top-auto">
              <span className="text-white font-bold ml-2 text-2xl ">
                Bricks
              </span>
            </div>
          </Link>

          <Link to={"/materials/sand"} className="flex h-72" id="sand">
            <img
              src={sand}
              alt="sand"
              rel="noreferrer"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute left-auto top-auto">
              <span className="text-white font-bold ml-2 text-2xl ">Sand</span>
            </div>
          </Link>

          <Link to={"/materials/gravels"} className="flex h-72" id="gravels">
            <img
              src={gravels}
              alt="gravels"
              rel="noreferrer"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute left-auto top-auto">
              <span className="text-white font-bold ml-2 text-2xl ">
                Gravels
              </span>
            </div>
          </Link>

          <Link to={"/materials/rod"} className="flex h-72" id="rod">
            <img
              src={rod}
              alt="rod"
              rel="noreferrer"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute left-auto top-auto">
              <span className="text-white font-bold ml-2 text-2xl ">Rods</span>
            </div>
          </Link>

          <Link to={"/materials/pipe"} className="flex h-72" id="pipe">
            <img
              src={pipe}
              alt="pipe"
              rel="noreferrer"
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute left-auto top-auto">
              <span className="text-white font-bold ml-2 text-2xl ">Pipes</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
