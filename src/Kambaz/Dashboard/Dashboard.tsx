import { Link } from "react-router";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
                        <img src="./images/reactjs.jpeg" width={200} />
                        <div>
                            <h5>CS1234 React JS</h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer
                    </p>
                    <Link to="/Kambaz/Courses/1234/Home">
                        <button>Go</button>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3500/Home" className="wd-dashboard-course-link">
                        <img src="./images/Bluebell_color.png" width={200} />
                        <div>
                            <h5>CS3500 OOD</h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Object-Oriented Design
                    </p>
                    <Link to="/Kambaz/Courses/3500/Home">
                        <button> Go </button>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2301/Home" className="wd-dashboard-course-link">
                        <img src="./images/Grapefizz_color.png" width={200} />
                        <div>
                            <h5>ACCT2301</h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Managerial Accounting
                    </p>
                    <Link to="/Kambaz/Courses/3500/Home">
                        <button> Go </button>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/101/Home" className="wd-dashboard-course-link">
                        <img src="./images/Lilac_color.png" width={200} />
                        <div>
                            <h5>CAT101</h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Intro to Catology 
                    </p>
                    <Link to="/Kambaz/Courses/3500/Home">
                        <button> Go </button>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3201/Home" className="wd-dashboard-course-link">
                        <img src="./images/Grassland_color.png" width={200} />
                        <div>
                            <h5>ORGB3201</h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Organizational Behavior
                    </p>
                    <Link to="/Kambaz/Courses/3500/Home">
                        <button> Go </button>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2301/Home" className="wd-dashboard-course-link">
                        <img src="./images/Grapefizz_color.png" width={200} />
                        <div>
                            <h5>ACCT2301</h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Managerial Accounting
                    </p>
                    <Link to="/Kambaz/Courses/3500/Home">
                        <button> Go </button>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2301/Home" className="wd-dashboard-course-link">
                        <img src="./images/Terrcotta_color.png" width={200} />
                        <div>
                            <h5>NTFLX2101</h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Netflix Classics
                    </p>
                    <Link to="/Kambaz/Courses/3500/Home">
                        <button> Go </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
