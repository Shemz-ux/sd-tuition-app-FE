import { useNavigate } from "react-router-dom";

function AddOptional(){
    const navigate = useNavigate()
    
    return (<div className="d-flex flex-row justify-content-center align-items-center gap-3"
        style={{ minHeight: "100vh" }}>
        <div className="optional p-5 mt-3">
            Add child's details +
            </div>
        <div className="optional p-5 mt-3" onClick={()=>navigate("/profile")}>
                Complete later
            </div>
    </div>)
}

export default AddOptional;