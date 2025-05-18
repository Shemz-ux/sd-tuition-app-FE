import { useNavigate } from "react-router-dom";
import AddChild from "./AddChild";
import { Navbar } from "./navbar";

function ChildProfile(){
    const navigate = useNavigate()

    return (
    <>
    <Navbar/>
    <div className="profile d-flex flex-column align-items-center" style={{ minHeight: "100vh" }}>
        <h1>Create child's profile</h1>
    <div className="w-75 w-md-50 w-lg-30 mt-3">
        <AddChild/>
        <div className="w-75 w-md-50 w-lg-30 mt-1 text-start">
            <button className="btn mb-2 mt-3 p-2" type="submit" onClick={()=>{navigate("/profile")}}>Add child</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default ChildProfile;