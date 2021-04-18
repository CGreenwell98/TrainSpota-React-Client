import "./SignIn.css";
import SignInForm from "./SignInForm";
import Nav from "../nav/Nav";

function SignIn() {
  return (
    <div>
      <Nav />
      <div className="login-page">
        <div className="login-page-left">
          <SignInForm />
        </div>
        <div className="login-page-right"></div>
      </div>
    </div>
  );
}

export default SignIn;
