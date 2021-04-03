import "./SignIn.css";
import SignInForm from "./SignInForm";
import Nav from "../nav/Nav";

function SignIn() {
  return (
    <div>
      <Nav />
      <div className="page">
        <div className="page-left">
          <SignInForm />
        </div>
        <div className="page-right"></div>
      </div>
    </div>
  );
}

export default SignIn;
