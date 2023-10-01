import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ParticlesBackground from "./particlesbackground";

const Datebyid = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://650af604dfd73d1fab094ac2.mockapi.io/attendance_sheet" + "/" + id, { method: "get" })
      .catch()
      .then((res) => { return res.json() })
      .then((res) => {

        if (res.a1 <= 100) {
          setData({ ...res, a1: '' })
        }
        else if (res.a2 <= 100) {
          setData({ ...res, a2: '' })
        }
        else if (res.a3 <= 100) {
          setData({ ...res, a3: '' })
        }
        else {
          setData(res)
        }
      });
  }, []);

  const handleClassA = () => {
    if (data.a1 < 100) {
      data.a1 = '';
    }
    if (data.a2 < 100) {
      data.a2 = '';
    }
    if (data.a3 < 100) {
      data.a3 = '';
    }
    if (!(data.a1 || data.a2 || data.a3) == '') {
      return (
        <>
          <h4 className="text-white py-2">Attendance of class A </h4>
          <div className="justify-content-center m-3">
            <textarea className="my-3 form-control customtextcolor" value={data.a1} placeholder="Absent roll no. of class 1" id="mybox" rows="2"></textarea>
            <textarea className="my-3 form-control customtextcolor" value={data.a2} placeholder="Absent roll no. of class 2" id="mybox" rows="2"></textarea>
            <textarea className="my-3 form-control customtextcolor" value={data.a3} placeholder="Absent roll no. of class 3" id="mybox" rows="2"></textarea>
          </div>

        </>
      )
    }
  }
  const handleClassB = () => {
    if (data.b1 < 100) {
      data.b1 = '';
    }
    if (data.b2 < 100) {
      data.b2 = '';
    }
    if (!(data.b1 || data.b2) == '') {
      return (
        <>
          <h4 className="text-white py-3">Attendance of class B </h4>
          <div className="justify-content-center m-3">
            <textarea className="my-3 form-control customtextcolor" value={data.b1} placeholder="Absent roll no. of class 1" id="mybox" rows="2"></textarea>
            <textarea className="my-3 form-control customtextcolor" value={data.b2} placeholder="Absent roll no. of class 2" id="mybox" rows="2"></textarea>
          </div>
        </>
      )
    }
  }
  const handleDelete = () => {
    fetch("https://650af604dfd73d1fab094ac2.mockapi.io/attendance_sheet" + "/" + id, { method: "delete" })
      .then(() => { navigate('/AttendanceList') });
  }


  var presentNoa = data.countera;
  var presentNob = data.counterb;

  var percentageOfA = parseInt((presentNoa * 100) / 195) + '%';
  var percentageOfB = parseInt((presentNob * 100) / 128) + '%';

  const handleAvgClassA = () => {
    if (!(data.a1 || data.a2 || data.a3) == '') {
      return (
        <>
          <b>Attendance of class A in average</b>
          <div class="progress my-2">
            <div class="progress-bar" style={{ width: percentageOfA }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              {percentageOfA}
            </div>
          </div>
        </>
      )
    }
  }
  const handleAvgClassB = () => {
    if (!(data.b1 || data.b2) == '') {
      return (
        <>
          <b>Attendance of class B in average</b>
          <div class="progress my-2">
            <div class="progress-bar" style={{ width: percentageOfB }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              {percentageOfB}
            </div>
          </div>
        </>
      )
    }
  }
  return (
    <div className="p-5">
      <ParticlesBackground />
      <div className="row">
        <div className="col">
          <div>
            <h2 className="text-white">{data.date}</h2>
          </div>
        </div>
        <div className="col">
          <div className="card  text-bg-dark p-3">
            {handleAvgClassA()}
            {handleAvgClassB()}
          </div>
        </div>
      </div>
      <div>
        {handleClassA()}
        {handleClassB()}
      </div>
      <div className="row p-4">
        <div className="col-1"></div>
        <div className="col-1">
          <span className="btn btn-primary" onClick={() => { navigate('/AttendanceList') }}>
            &#8701;
          </span>
        </div>
        <div className="col-3"></div>
        <div className="col-1">
          <div className="btn btn-primary" onClick={() => { navigate('/DateEdit/' + id) }}>
            Edit
          </div>
        </div>
        <div className="col-3"></div>
        <div className="col-1">
          <div className="btn btn-danger" onClick={() => { handleDelete() }}>
            Delete
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
};

export default Datebyid;
