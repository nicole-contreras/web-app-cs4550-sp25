import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollUser, unenrollUser } from "../Enrollments/reducer";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const dispatch = useDispatch();

  const courses = useSelector((state: any) => state.courseReducer.courses);
  const currentUser = useSelector((state: any) => state.accountReducer?.currentUser) || {};
  const enrollments = useSelector((state: any) => state.enrollmentsReducer?.enrollments || []);

  console.log("📢 Redux enrollments state:", enrollments);

  // Local state for controlled form inputs
  const [course, setCourse] = useState({
    _id: "",
    name: "",
    description: "",
  });

  const [showAllCourses, setShowAllCourses] = useState(false); // Toggle enrollments

  const handleAddCourse = () => {
    if (currentUser.role !== "FACULTY") {
      console.log("Only faculty can add courses!");
      return;
    }

    const newCourse = {
      _id: uuidv4(),
      name: course.name || "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: course.description || "New Description",
    };

    dispatch(addCourse(newCourse));

    const newEnrollment = {
      _id: uuidv4(),
      user: currentUser._id,
      course: newCourse._id,
    };

    dispatch(enrollUser(newEnrollment));

    // Reset form fields
    setCourse({ _id: "", name: "", description: "" });
  };

  const handleUpdateCourse = () => {
    if (course._id) {
      dispatch(updateCourse(course));
      setCourse({ _id: "", name: "", description: "" }); // Reset form
    }
  };

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some((e: any) => e.user === currentUser._id && e.course === courseId);

  const handleEnrollmentToggle = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenrollUser({ user: currentUser._id, course: courseId }));
    } else {
      dispatch(enrollUser({ _id: uuidv4(), user: currentUser._id, course: courseId }));
    }
  };

  const displayedCourses = showAllCourses ? courses : courses.filter((c) => isEnrolled(c._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <div className="d-flex justify-content-between align-items-center">
        <h5>New Course</h5>
        <Button className="btn btn-primary" onClick={toggleShowAllCourses}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </Button>
      </div>

      {currentUser.role === "FACULTY" && (
        <>
          <button className="btn btn-primary float-end" onClick={handleAddCourse}>Add</button>
          <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse}>Update</button>
          <br />
          <FormControl
            placeholder="Course Name"
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            placeholder="Course Description"
            value={course.description}
            as="textarea"
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img variant="top" src="./images/reactjs.jpeg" width="100%" height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>

                    <Button
                      className={`btn ${isEnrolled(course._id) ? "btn-danger" : "btn-success"} float-end`}
                      onClick={() => handleEnrollmentToggle(course._id)}
                    >
                      {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                    </Button>

                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger float-end"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setCourse(course)}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
