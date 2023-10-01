import Particles from "react-particles";
import { Link } from "react-router-dom";
import ParticlesBackground from "./particlesbackground";
import '../index.css'
const Attendancesheet = () => {
    
    return (
        <>
            <ParticlesBackground />
            <div className="p-5">
                <div className=" d-md-flex justify-content-around">
                    <div class="customcard card border border-light mt-5">
                        <div className="card-header">
                            <h5 className="card-title">
                                class A
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Click below for Attendance</p>
                            <Link to='/AttendanceOfA' class="btn btn-outline-light">Click here</Link>
                        </div>
                    </div>
                    <div class="customcard card border border-light mt-5">
                        <div className="card-header">
                            <h5 className="card-title">
                                class B
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Click below for Attendance</p>
                            <Link to='/AttendanceOfB' class="btn btn-outline-light">Click here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Attendancesheet;
