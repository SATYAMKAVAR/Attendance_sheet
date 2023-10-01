import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticlesBackground from "./particlesbackground";

const Dateall = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://650af604dfd73d1fab094ac2.mockapi.io/attendance_sheet")
            .then((res) => { return res.json() })
            .then((res) => { setData(res) })
    }, [])
    
    const formateddate = data.map((data) => {
        return (
            <div className="col-md-3 p-3">
                <div className="card customcard border borer-light">
                    <div className="card-header row">
                        <h5 className="card-title col">
                            {data.date}
                        </h5>
                        <h5 className="text-end col">
                            {(!(data.a1 || data.a2 || data.a3) == '')&& "Class A"}
                            {(!(data.b1 || data.b2) == '')&& "Class B"}
                        </h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Click below for show Attendance of this date : {data.date}</p>
                        <Link className="btn btn-outline-light" to={'/Datebyid/' + data.id}>click here</Link>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <>
            <ParticlesBackground />
            <div className="row py-4">
                {formateddate}
            </div>
            <div className="btn btn-primary" onClick={() => { navigate('/') }}>
                &#8701;
            </div>
        </>
    )
};

export default Dateall;
