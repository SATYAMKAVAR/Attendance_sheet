import { Link, Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
                <div className="container-fluid ">
                    <div className="navbar-brand">Attendance sheet</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse d-flex navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to='/AttendanceList'>
                                <button className="btn btn-outline-primary">
                                    History
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;
