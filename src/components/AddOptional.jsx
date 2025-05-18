import { Link } from "react-router-dom";

function AddOptional(){
    return (<div className="d-flex flex-row justify-content-center align-items-center gap-3"
        style={{ minHeight: "100vh" }}>
        <div className="optional p-5 mt-3">
            Add child's details +
            </div>
        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="optional p-5 mt-3">
                Complete later
            </div>
                </Link>
    </div>)
}

export default AddOptional;