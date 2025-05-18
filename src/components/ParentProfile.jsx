import AddChild from "./AddChild";
import { Navbar } from "./navbar";

function ParentProfile(){
    return (
        <>
        <Navbar/>
        <div className="profile d-flex flex-column align-items-center" style={{ minHeight: "100vh" }}>
            <h1>Parent profile</h1>
            <div className="w-75 w-md-50 w-lg-30 mt-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <form class="row g-4 mt-3">
                    <div class="col-md-6 ">
                        <label htmlFor="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control form-control-lg transparent-input" id="firstName" placeholder="Enter first name" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control form-control-lg transparent-input" id="lastName" placeholder="Enter first name" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label htmlFor="email" class="form-label">Email</label>
                        <input type="email" class="form-control form-control-lg transparent-input" id="email" placeholder="Enter your email" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label htmlFor="mobile" class="form-label">Mobile</label>
                        <input type="integer" class="form-control form-control-lg transparent-input" id="mobile" placeholder="Enter your mobile" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label htmlFor="city" class="form-label">City</label>
                        <input type="text" class="form-control form-control-lg transparent-input" id="city" placeholder="Enter your city" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                        </form>
                </div>
                <div className="w-75 w-md-50 w-lg-30 mt-3 text-start">
                    <button className="btn mb-2 mt-3 p-2" type="submit">Save changes</button>
                    </div>

                <div className="w-75 w-md-50 w-lg-30 mt-4 text-start">
                    <div className="mt-3">
                    <h1>Child's details</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <AddChild/>
                        <div className="w-75 w-md-50 w-lg-30 mt-1 text-start">
                            <button className="btn mb-2 mt-3 p-2" type="submit">Save changes</button>
                            </div>
                        </div>
                    </div>

                <div className="add-child p-3 mt-3">
                    add child +
                </div>

                <div className="delete-account mt-5" style={{ color: "red" }}>
                delete account
                </div>
        </div>
        </>
)
}

export default ParentProfile;