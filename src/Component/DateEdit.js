import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ParticlesBackground from "./particlesbackground";

const DateEdit = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://attendance-sheet-api-qp6c.onrender.com" + "/" + id, { method: "get" })
            .then((res) => { return res.json() })
            .then((res) => { setData(res) });
    }, []);

    const handleClassA = () => {
        if (!(data.a1 || data.a2 || data.a3) == '') {
            return (
                <>
                    <h4 className="text-white py-2">Attendance of class A </h4>
                    <div className="justify-content-center m-3">
                        <div>
                            <label for="exampleFormControlTextarea1" className="form-label text-white"><b>Absent roll number</b></label>/
                            <textarea className="my-3 form-control customtextcolor" value={data.a1} id="mybox" rows="2" placeholder="Absent roll no. of class 1" onChange={(e) => { setData({ ...data, a1: e.target.value }) }} />
                            <textarea className="my-3 form-control customtextcolor" value={data.a2} id="mybox" rows="2" placeholder="Absent roll no. of class 2" onChange={(e) => { setData({ ...data, a2: e.target.value }) }} />
                            <textarea className="my-3 form-control customtextcolor" value={data.a3} id="mybox" rows="2" placeholder="Absent roll no. of class 3" onChange={(e) => { setData({ ...data, a3: e.target.value }) }} />
                        </div>
                    </div>
                </>
            )
        }
    }
    const handleClassB = () => {
        if (!(data.b1 || data.b2) == '') {
            return (
                <>
                    <h4 className="text-white pt-3">Attendance of class B </h4>
                    <div className="justify-content-center m-3">
                        <div>
                            <label for="exampleFormControlTextarea1" className="form-label text-white"><b>Absent roll number </b></label>
                            <textarea className="my-3 form-control customtextcolor" value={data.b1} id="mybox" rows="2" placeholder="Absent roll no. of class 1" onChange={(e) => { setData({ ...data, b1: e.target.value }) }} />
                            <textarea className="my-3 form-control customtextcolor" value={data.b2} id="mybox" rows="2" placeholder="Absent roll no. of class 2" onChange={(e) => { setData({ ...data, b2: e.target.value }) }} />
                        </div>
                    </div>
                </>
            )
        }
    }
    const handlesave = () => {

        fetch("https://attendance-sheet-api-qp6c.onrender.com" + "/" + id, {
            method: "put",
            body: new URLSearchParams(data),
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }).then(() => { navigate('/DateByid/' + id) })
    }
    return (
        <>
            <ParticlesBackground />
            <div className="p-5">
                {handleClassA()}
                {handleClassB()}
            </div>
            <div className="row pt-3">
                <div className="col-1"></div>
                <div className="col-1">
                    <div className="btn btn-primary" onClick={() => { navigate('/DateByid/' + id) }}>
                        &#8701;
                    </div>
                </div>
                <div className="col-8"></div>
                <div className="col-2">
                    <div className="btn btn-primary" onClick={handlesave}>
                        Save changes
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
};

export default DateEdit;
