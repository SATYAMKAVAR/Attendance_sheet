import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ParticlesBackground from "./particlesbackground";

const AttendanceOfA = () => {

    const [rno, setRno] = useState(101);
    const [data, setData] = useState({
        a1: "",
        a2: "",
        a3: "",
        b1: "",
        b2: "",
        date: "",
        countera: "",
        counterb: ""
    })
    const [counter, setCounter] = useState(2);
    const navigate = useNavigate();
  
    const handleback = () => {
        setRno(rno - 1);
        setData({
            ...data.filter((rno) => {
                return (rno != rno);
            })
        });
    }

    const handlePresent = () => {
        setRno(rno + 1);
        setCounter(counter + 1);
        setData({ ...data, countera: counter });
    }
    // const handleDate = () => {

    //     var today = new Date();
    //     var dd = String(today.getDate()).padStart(2, '0');
    //     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     var yyyy = today.getFullYear();

    //     today = mm + '/' + dd + '/' + yyyy;
    //     setData({  ...data,date:  today  });
    // }
    const handleAbsent = () => {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        setRno(rno + 1);
        if (rno > 100 && rno < 200) {
            if (data.a1 == "") {
                setData({ ...data, a1: rno,date: today });
            }
            else {
                setData({ ...data, a1: data.a1 + "," + rno, date: today });
            }
        }
        if (rno > 200 && rno < 300) {
            if (data.a2 == "") {
                setData({ ...data, a2: rno, date: today });
            }
            else {
                setData({ ...data, a2: data.a2 + "," + rno, date: today });
            }
        }
        if (rno > 300 && rno < 400) {
            if (data.a3 == "") {
                setData({ ...data, a3: rno, date: today });
            }
            else {
                setData({ ...data, a3: data.a3 + "," + rno, date: today });
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
        })
            .then(() => { navigate('/') });
    }
    return (
        <div>
            <ParticlesBackground />
            <div tabIndex={0} onKeyDown={(e)=>{handleKeyDown(e)}} className="d-flex flex-column m-5">
                <div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-info mx-3" onClick={() => { setRno(101) }}>
                            Class 1
                        </button>
                        <button className="btn btn-outline-info mx-3" onClick={() => { setRno(201) }}>
                            Class 2
                        </button>
                        <button className="btn btn-outline-info mx-3" onClick={() => { setRno(301) }}>
                            Class 3
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
                            Absent
                        </button>
                    </div>
                    <div className="d-flex justify-content-center m-3">
                        </div>
                    <div className="justify-content-center m-3">
                        <div>
                            <label for="exampleFormControlTextarea1" className="form-label text-white"><b>Absent roll number</b></label>
                            <textarea className="my-3 form-control customtextcolor" value={data.a1} id="mybox" rows="2" placeholder="Absent roll no. of class 1" onChange={(e) => { setData({ ...data, a1: e.target.value }) }}></textarea>
                            <textarea className="my-3 form-control customtextcolor" value={data.a2} id="mybox" rows="2" placeholder="Absent roll no. of class 2" onChange={(e) => { setData({ ...data, a2: e.target.value }) }}></textarea>
                            <textarea className="my-3 form-control customtextcolor " value={data.a3} id="mybox" rows="2" placeholder="Absent roll no. of class 3" onChange={(e) => { setData({ ...data, a3: e.target.value }) }}></textarea>
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
                        <div className="btn btn-info" onHove onClick={handlesave}>
                            save
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
};

export default AttendanceOfA;
