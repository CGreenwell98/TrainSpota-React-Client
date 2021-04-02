import "./SignIn.css";
import SignInForm from "./SignInForm";

function SignIn() {
  return (
    <div className="page">
      <div className="page-left">
        <SignInForm />
      </div>
      <div className="page-right"></div>
    </div>
  );
}

export default SignIn;
