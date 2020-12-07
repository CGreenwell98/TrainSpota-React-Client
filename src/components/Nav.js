import "../styles/nav.css";
import {Link} from "react-router-dom";

function Nav() {
    return (
      <nav>
        <h1>Project</h1>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/user/sign-in"><li>Sign-In</li></Link>
        </ul>
      </nav>
    );
  }
  
  export default Nav;