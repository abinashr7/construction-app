import LoginCust from "./LoginCust";
import LoginDealer from "./LoginDealer";

export default function LoginPage() {
  return (
    <div className="grow flex items-center justify-around mt-32">
      <LoginCust />
      <LoginDealer />
    </div>
  );
}
