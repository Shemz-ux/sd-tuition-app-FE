import logo from "../assets/SK-tuition-logo.png";

export function Navbar(){
    return (
    <nav className="navbar bg-body-black mb-3">
        <div className="d-flex container-fluid">
            <img src={logo} alt="logo" style={{ width: "130px", height: "auto" }} />
            <button className="btn ms-auto" type="submit">Login</button>
        </div>
      </nav>
      )
}
