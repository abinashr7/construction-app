import house from "../images/house.png";

export default function IndexPage() {
  return (
    <div className="grow flex justify-between ml-20 mt-24">
      <div>
        <h1 className="font-bold text-5xl text-blue-600 mt-32 mb-5">
          Construct Your Building now!
        </h1>
        <p className="text-xl leading-7 text-slate-600 max-w-md">
          This is the site where you buy materials for constructing your
          building from the different dealers with affordable cost and safer
          delivery.
        </p>
      </div>
      <div className="mr-8">
        <img src={house} alt="" />
      </div>
    </div>
  );
}
