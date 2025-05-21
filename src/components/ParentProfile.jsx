import { useEffect, useState } from "react";
import AddChild from "./AddChild";
import { Navbar } from "./navbar";
import { getParentById } from "../api";

function ParentProfile(){
    const [showChildForm, setShowChildForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [getParentInfo, setGetParentInfo] = useState(null)

    useEffect(()=>{
        setLoading(true)
        getParentById(1)
        .then((parentDetails)=>{
            setGetParentInfo(parentDetails)
            setLoading(false)
        })
        .catch((err)=>setError(err))
    }, [])

    if (loading) return <p>Loading...</p>;
    if (!getParentInfo) return <p>Parent data not available</p>;

    const { firstName, lastName, email, mobile, city, child = [] } = getParentInfo;
    const [childInfo] = child;

    return (
        <>
        <Navbar/>
        <div className="profile d-flex flex-column align-items-center" style={{ minHeight: "100vh" }}>
            <h1>Parent profile</h1>
            <div className="w-75 w-md-50 w-lg-30 mt-3">
            <p>Hello <span>{firstName}</span> welcome to your parent profile, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <form className="row g-4 mt-3">
                    <div className="col-md-6 ">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control form-control-lg transparent-input" id="firstName" placeholder="Enter first name"  value={firstName} required/>
                        <div className="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control form-control-lg transparent-input" id="lastName" placeholder="Enter first name" value={lastName} required/>
                        <div className="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" class="form-label">Email</label>
                        <input type="email" class="form-control form-control-lg transparent-input" id="email" placeholder="Enter your email" value={email} required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label htmlFor="mobile" class="form-label">Mobile</label>
                        <input type="integer" class="form-control form-control-lg transparent-input" id="mobile" placeholder="Enter your mobile" value={mobile} required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label htmlFor="city" class="form-label">City</label>
                        <input type="text" class="form-control form-control-lg transparent-input" id="city" placeholder="Enter your city" value="London" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                        </form>
                </div>
                <div className="w-75 w-md-50 w-lg-30 mt-3 text-start">
                    <button className="btn mb-2 mt-3 p-2" type="submit">Save changes</button>
                    </div>

                    {childDetails(childInfo.name, childInfo.school, childInfo.yearGroup, childInfo.currentGrade, childInfo.additionalInfo)}
                    {showChildForm && <AddChild/>}
                        <div className="add-child p-3 mt-3" onClick={()=> setShowChildForm(prev => !prev)}>
                            {showChildForm ? "Remove child -" : "Add child +"}
                            </div>

                <div className="delete-account mt-5" style={{ color: "red" }}>delete account</div>
        </div>
        </>
)
}

function childDetails(name, school, yearGroup, grade, info){
    return (
        <div className="w-75 w-md-50 w-lg-30 mt-4 text-start">
                    <div className="mt-3">
                    <h1>Child's details</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div>
                <form class="row g-3 mt-1">
                        <div class="col-12">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control form-control-lg transparent-input" id="name" placeholder="Child's name" value={name} required/>
                            <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                                Looks good!
                                </div>
                        </div>
                        <div class="col-12">
                            <label for="school" class="form-label">School</label>
                            <input type="text" class="form-control form-control-lg transparent-input" id="school" placeholder="Enter school" value={school} required/>
                            <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                                Looks good!
                                </div>
                        </div>
                        <div class="col-md-6">
                            <label for="yearGroup" class="form-label">Year group</label>
                            <select class="form-select form-select-lg mb-3 transparent-input" id="yearGroup" aria-label="Large select example" value={yearGroup}>
                                <option selected>Select year group</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                </select>
                        </div>
                        <div class="col-md-6">
                            <label for="currentGrade" class="form-label">Current grade <small style={{color: "#ffffff85"}}>(9-1 or A*-E)</small></label>
                            <input type="text" class="form-control form-control-lg  transparent-input" id="currentGrade" placeholder="Enter current grade" value={grade}/>
                            <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                                Looks good!
                                </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Additional info</label>
                            <textarea class="form-control transparent-input" id="exampleFormControlTextarea1" rows="5" placeholder="Any additional information. " value={info}></textarea>
                            </div>
                    </form>
                    <div className="w-75 w-md-50 w-lg-30 mt-1 text-start">
                                <button className="btn mb-2 mt-3 p-2" type="submit">Save Changes</button>
                                </div>
                    </div>
                        </div>
                    </div>
    )
}


export default ParentProfile;