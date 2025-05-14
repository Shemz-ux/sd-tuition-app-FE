import { Navbar } from "./navbar";

function ParentProfile(){
    return (
        <>
        <Navbar/>
        <div className="profile d-flex flex-column align-items-center" style={{ minHeight: "100vh" }}>
            <h1>Your profile</h1>
            <div className="w-75 w-md-50 w-lg-30 mt-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <form class="row g-3 mt-3">
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control form-control-lg is-valid transparent-input" id="firstName" value="Mark"/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-md-6">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control form-control-lg is-valid transparent-input" id="lastName" value="Gold"/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control form-control-lg is-valid transparent-input" id="email" placeholder="Enter your email"/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label for="mobile" class="form-label">Mobile</label>
                        <input type="integer" class="form-control form-control-lg is-valid transparent-input" id="mobile" placeholder="Enter your mobile"/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control form-control-lg is-valid transparent-input" id="city" placeholder="Enter your city"/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                        </form>
                </div>
                <div className="w-75 w-md-50 w-lg-30 mt-3 text-start">
                    <button className="btn mb-2 mt-3 p-2" type="submit">Save changes</button>
                    </div>
                <div className="add-child p-3 mt-3">
                    add child +
                </div>
        </div>
        </>
)
}

export default ParentProfile;