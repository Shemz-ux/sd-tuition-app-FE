import { Link } from "react-router-dom";
import logo from "../assets/SK-tuition-logo.png";

export function Navbar(){
    return (
    <nav className="navbar bg-body-black">
        <div className="d-flex container-fluid">
            <Link to="/">
                <img className="logo" src={logo} alt="logo" style={{ width: "130px", height: "auto" }} />
                </Link>
            <button className="btn ms-auto" type="submit">Login</button>
        </div>
      </nav>
      )
}
