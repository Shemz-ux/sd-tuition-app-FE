import { Navbar } from "./navbar";
import { PiStudent } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import profile from "../assets/SK avatar.png";

function HomePage(){
    return <>
            <Navbar/>
            <div className="welcome mb-3 mt-3">
                <div>
                    <img src={profile} alt="profile pic" style={{ width: "350px", height: "auto" }}/>
                    <button className="btn mb-3" type="submit">register</button>
                    </div>
                <h1>Hello, I am Shem.</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                
                <div className="my-background mt-3 mb-3">
                    <h3>My background</h3>
                    <ul className="a">
                        <li>Software Engineer</li>
                        <li>University</li>
                        <li>College</li>
                    </ul>    
                    </div>
            </div>

            <div className="my-approach mt-3 mb-3">
                <h3>My approach</h3>
                <div className="d-flex justify-content-center gap-5 flex-wrap mt-4">
                    <div className="w-25 text-center">
                        <p style={{ color: "#F0AE58" }}>01.</p>
                        <PiStudent size={100}/>
                        <h5>Student-led</h5>
                        <p>Encouraging individuals to step out of their comfort zones and explore new possibilities.</p>
                    </div>

                <div className="w-25 text-center">
                    <p style={{ color: "#F0AE58" }}>02.</p>
                    <BsPeople size={100}/>
                    <h5>Collaboration</h5>
                    <p>Promoting a spirit of partnership and cooperation to drive mutual success and collective growth.</p>
                </div>
                    
                <div className="w-25 text-center">
                    <p style={{ color: "#F0AE58" }}>03.</p>
                    <BsPeople size={100}/>
                    <h5>Collaboration</h5>
                    <p>Promoting a spirit of partnership and cooperation to drive mutual success and collective growth.</p>
                </div>

                <div className="w-25 text-center">
                    <p style={{ color: "#F0AE58" }}>04.</p>
                    <BsPeople size={100}/>
                    <h5>Collaboration</h5>
                    <p>Promoting a spirit of partnership and cooperation to drive mutual success and collective growth.</p>
                </div>
                    </div>
            </div>

            <div className="exam-board mt-3">
                <h3>Exam boards</h3>
                <div className="d-flex justify-content-center gap-5 flex-wrap mt-4">
                    <p>exam b1</p>
                    <p>exam b1</p>

                    </div>
                </div>

            <div className="exam-board mt-3 mb-3">
                <h3>Reviews</h3>
                <div className="d-flex justify-content-center gap-5 flex-wrap mt-4">
                    <div className="w-25 text-center">
                        <BsPeople size={100}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                    </div>
                </div>

        </>
}

export default HomePage;

