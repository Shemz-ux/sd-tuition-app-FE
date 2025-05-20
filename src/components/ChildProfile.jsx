import { useNavigate } from "react-router-dom";
import AddChild from "./AddChild";
import { Navbar } from "./navbar";

function ChildProfile(){

    return (
    <>
    <Navbar/>
    <div className="profile d-flex flex-column align-items-center" style={{ minHeight: "100vh" }}>
        <h1>Create child's profile</h1>
        <AddChild/>
    </div>
    </>
    )
}

export default ChildProfile;