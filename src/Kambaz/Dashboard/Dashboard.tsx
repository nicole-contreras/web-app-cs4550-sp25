import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router";

import * as db from  "../Database";



export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses  ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course : any) => (
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                        <Link to={`/Kambaz/Courses/${course._id}/Home`}
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="./images/reactjs.jpeg" width="100%" height={160}/>
                        <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                {course.description} </Card.Text>
                        <Button variant="primary">Go</Button>
                        </Card.Body>
                        </Link>
                        </Card>
                    </Col>
                    

                    /* {<Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                        <Link to="Kambaz/Courses/3500/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="./images/Bluebell_color.png" width="100%" height={160}/>
                        <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS 3500</Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        CS3500 OOD</Card.Text>
                        <Button variant="primary">Go</Button>
                        </Card.Body>
                        </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                        <Link to="Kambaz/Courses/S101/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="./images/Grassland_color.png" width="100%" height={160}/>
                        <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">SVS 101</Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Intro to Survival</Card.Text>
                        <Button variant="primary">Go</Button>
                        </Card.Body>
                        </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                        <Link to="/Kambaz/Courses/2301/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="./images/Grapefizz_color.png" width="100%" height={160}/>
                        <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ACCT2301</Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Managerial Accounting</Card.Text>
                        <Button variant="primary">Go</Button>
                        </Card.Body>
                        </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                        <Link to="/Kambaz/Courses/101/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="./images/Lilac_color.png" width="100%" height={160}/>
                        <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CAT101</Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Intro to Catology </Card.Text>
                        <Button variant="primary">Go</Button>
                        </Card.Body>
                        </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                        <Link to="/Kambaz/Courses/101/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="./images/Lilac_color.png" width="100%" height={160}/>
                        <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ORGB3201</Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Organizational Behavior </Card.Text>
                        <Button variant="primary">Go</Button>
                        </Card.Body>
                        </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                        <Link to="/Kambaz/Courses/2101/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="./images/Terrcotta_color.png" width="100%" height={160}/>
                        <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">NTFLX2101</Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Netflix Classics </Card.Text>
                        <Button variant="primary">Go</Button>
                        </Card.Body>
                        </Link>
                        </Card> }*/
                    // </Col>
                    ))}
                </Row>
            </div>
        </div>
        </div>
    );
}
