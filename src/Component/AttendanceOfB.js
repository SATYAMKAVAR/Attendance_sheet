import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./particlesbackground";

const AttendanceOfB = () => {

    const [rno, setRno] = useState(401);
    const [data, setData] = useState({
        a1: "",
        a2: "",
        a3: "",
        b1: "",
        b2: "",
        date: "",
        countera: "",
        counterb: ""
    });
    const [counter, setCounter] = useState(2);
    const navigate = useNavigate();

    const handlePresent = () => { 
        setRno(rno + 1)   
        setCounter(counter + 1);
        setData({...data,counterb: counter});
    }
    const handleAbsent = () => {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        setRno(rno + 1);
        if (rno > 400 && rno < 500) {
            if (data.b1 == "") {
                setData({ ...data, b1: rno, date: today });
            }
            else {
                setData({ ...data, b1: data.b1 + "," + rno, date: today });
            }
        }
        if (rno > 500 && rno < 600) {
            if (data.b2 == "") {
                setData({ ...data, b2: rno, date: today });
            }
            else {
                setData({ ...data, b2: data.b2 + "," + rno, date: today });
            }
        }
    }
    const handleKeyDown = (e) => {
        if (e.key == 'ArrowRight') {
            handlePresent();
        }
        if (e.key == 'ArrowLeft') {
            handleAbsent();
        }
    }
    const handlesave = () => {

        fetch("https://attendance-sheet-api-qp6c.onrender.com", {
            method: "POST",
            body: new URLSearchParams(data),
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }).then(() => { navigate('/') })
    }

    return (
        <>
            <ParticlesBackground />
            <div tabIndex={0} onKeyDown={(e)=>{handleKeyDown(e)}} className="flex-column m-5 p-5">
                <div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-info mx-3" onClick={() => { setRno(401) }}>
                        Class 1
                    </button>
                    <button className="btn btn-outline-info mx-3" onClick={() => { setRno(501) }}>
                        Class 2
                    </button>
                </div>
                <div className="d-flex justify-content-center m-5">
                    <h1 className="text-white">{rno}</h1>
                </div>
                <div className="d-flex justify-content-center m-3">
                    <button className="btn btn-info mx-3" onClick={handlePresent}>
                        Present
                    </button>
                    <button className="btn btn-info mx-3" onClick={handleAbsent}>
                        Abesnt
                    </button>
                </div>
                <div className="justify-content-center m-3">
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label text-white"><b>Absent roll number </b></label>
                        <textarea className="my-3 form-control customtextcolor" value={data.b1} id="mybox" rows="2" placeholder="Absent roll no. of class 1" onChange={(e) => { setData({ ...data, b1: e.target.value }) }}></textarea>
                        <textarea className="my-3 form-control customtextcolor" value={data.b2} id="mybox" rows="2" placeholder="Absent roll no. of class 2" onChange={(e) => { setData({ ...data, b2: e.target.value }) }}></textarea>
                    </div>
                </div>
                </div>
            <div className="row pt-4">
                <div className="col-1"></div>
                <div className="col-1">
                    <div className="btn btn-info" onClick={() => { navigate('/') }}>
                        &#8701;
                    </div>
                </div>
                <div className="col-8"></div>
                <div className="col-1">
                    <div className="btn btn-info" onClick={handlesave}>
                        save
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            </div>
        </>
    )
};

export default AttendanceOfB;
