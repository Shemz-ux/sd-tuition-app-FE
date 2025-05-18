import { Navbar } from "./navbar";

function Register(){
    return  (
    <>
        <Navbar/>
        <div className="d-flex flex-column align-items-center">
        <h1>Register</h1>
            <div className="w-75 w-md-50 w-lg-30 mt-3">
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
                <div className="w-75 w-md-50 w-lg-30 mt-5 text-center">
                    <button className="btn mb-2 mt-3 p-2" type="submit">Submit</button>
                    </div>
            </div>
         </>
    )
}

export default Register;