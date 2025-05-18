import { Navbar } from "./navbar";

function AddChild(){
    return (
        <>
        <div className="mt-3">
            {/* <h1>Child's details</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
            <div>
            <form class="row g-3 mt-1">
                    <div class="col-12">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control form-control-lg transparent-input" id="name" placeholder="Child's name" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-12">
                        <label for="school" class="form-label">School</label>
                        <input type="text" class="form-control form-control-lg transparent-input" id="school" placeholder="Enter school" required/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="col-md-6">
                        <label for="yearGroup" class="form-label">Year group</label>
                        <select class="form-select form-select-lg mb-3 transparent-input" id="yearGroup" aria-label="Large select example">
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
                        <input type="text" class="form-control form-control-lg  transparent-input" id="currentGrade" placeholder="Enter current grade"/>
                        <div class="valid-feedback" style={{ color: "#F0AE58" }}>
                            Looks good!
                            </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Additional info</label>
                        <textarea class="form-control transparent-input" id="exampleFormControlTextarea1" rows="5" placeholder="Any additional information. "></textarea>
                        </div>
                </form>
            </div>
        </div>
        </>)
}

export default AddChild;