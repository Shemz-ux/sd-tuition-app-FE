import { Navbar } from "./navbar";
import { PiStudent } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import profile from "../assets/SK avatar.png";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { RxLapTimer } from "react-icons/rx";
import { ImConnection } from "react-icons/im";
import { FaChalkboardTeacher } from "react-icons/fa";
import aniOne from "../assets/Ani 1.jpg";

function HomePage(){
    return <div id="home">
            <Navbar/>
            <div className="welcome mb-5 mt-0 container">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <div className="pic mt-5">
                            <img src={profile} alt="profile pic" style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} />
                            </div>
                        {/* needs conditional logic here to verify if logged in or not */}
                        <Link to="/register" className="mt-5">
                            <button className="btn mb-3 mt-4" type="submit">Register</button>
                            </Link>
                        </div>
                        
                    <div className="col-md-8 mt-5">
                        <h1>Hello, I am Shem.</h1>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        
                            <div className="my-background mt-5 mb-3">
                                <h3>My background</h3>
                                <ul className="a">
                                <li>Software Engineer</li>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <li>University</li>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <li>College</li>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <li>College</li>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <li>College</li>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <li>College</li>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="my-approach mt-3 mb-3">
                <h2>My approach</h2>
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

            <div className="exam-board mt-5">
                <h2>Our sessions</h2>
                <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
                    <div className="w-25 text-center m-3">
                        <ImConnection  className="mb-3"size={80}/>
                        <h5>Online</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    <div className="w-25 text-center m-3">
                        <RxLapTimer className="mb-3"size={80}/>
                        <h5>60 - 90mins</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    <div className="w-25 text-center m-3">
                        <FaChalkboardTeacher className="mb-3"size={80}/>
                        <h5>Interactive</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>

            <div className="exam-board mt-5 mb-3">
                <h2>Reviews</h2>
                <div className="d-flex justify-content-center gap-5 flex-wrap mt-4">
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        {stars()}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        {stars()}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        {stars()}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        {stars()}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        {stars()}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="w-25 text-center m-3">
                        <BsPeople size={100}/>
                        {stars()}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                    </div>
                    <div className="d-flex flex-column align-items-center mt-5">
                        <a className="back-up text-decoration-none text-reset" href="#home">back to top</a>
                        </div>

                </div>

        </div>
}

function stars(){
    return (
        <div className="m-2">
            <IoStarSharp size={20} style={{color: "#F0AE58"}}/>
            <IoStarSharp size={20} style={{color: "#F0AE58"}}/>
            <IoStarSharp size={20} style={{color: "#F0AE58"}}/>
            <IoStarSharp size={20} style={{color: "#F0AE58"}}/>
            <IoStarSharp size={20} style={{color: "#F0AE58"}}/>
            </div>
    )
}

export default HomePage;

