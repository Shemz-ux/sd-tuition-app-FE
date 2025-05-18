import { Link } from "react-router-dom";
import logo from "../assets/SK-tuition-logo.png";
import { FaUser } from "react-icons/fa";

export function Navbar(){
    return (
    <nav className="navbar bg-body-black">
        <div className="d-flex container-fluid">
            <Link to="/">
                <img className="logo" src={logo} alt="logo" style={{ width: "150px", height: "auto" }} />
                </Link>
            {/* needs conditional logic here to verify if logged in or not */}
            {/* <button className="btn ms-auto" type="submit">Login</button> */}
            <Link to="/profile" style={{cursor: "pointer"}}>
                <FaUser className="user-icon"size={30}/>
                </Link>
        </div>
      </nav>
      )
}
