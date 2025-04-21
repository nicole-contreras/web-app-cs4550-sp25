// import { Link } from "react-router-dom";
// import { Row, Col, Card, Button } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import * as enrollmentsClient from "../Enrollments/client";
// import * as coursesClient from "../Courses/client";
// import EnrollmentButton from "../Enrollments/EnrollmentButton";


// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addCourse,
//   deleteCourse,
//   updateCourse,
//   enrollInCourse,
//   unenrollFromCourse,
// }: {
//   courses: any[]; 
//   course: any; 
//   setCourse: (course: any) => void; 
//   addCourse: (course: any) => void;
//   deleteCourse: (course: any) => void; 
//   updateCourse: (course: any) => void; 
//   enrollInCourse: (userId: string, courseId: string) => void;
//   unenrollFromCourse: (userId: string, courseId: string) => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer); 
//   const [showAllCourses, setShowAllCourses] = useState(false);
//   const [enrollments, setEnrollments] = useState<
//     { user: string; course: string }[]
//   >([]);
//   const [allCourses, setAllCourses] = useState([]);

//   const toggleShowCourses = () => {
//     setShowAllCourses(!showAllCourses);
//   };

//   const fetchEnrollments = async () => {
//     try {
//       const enrollments = await enrollmentsClient.getEnrollmentsForCurrentUser();
//       setEnrollments(enrollments);
//     } catch (error) {
//       console.error("Error fetching enrollments:", error);
//     }
//   };

//   const fetchAllCourses = async () => {
//     try {
//       const courses = await coursesClient.fetchAllCourses();
//       setAllCourses(courses);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };

//   if (showAllCourses) {
//     fetchAllCourses();
//     courses = allCourses;
//     fetchEnrollments();
//   }

//   if (enrollments.length == 0) {
//     fetchEnrollments();
//     fetchAllCourses();
//   }

//   const isEnrolled = (courseId: string) =>
//     enrollments.some(
//       (enrollment) =>
//         enrollment.user === currentUser._id && enrollment.course === courseId
//     );

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       {currentUser.role === "FACULTY" && (
//         <>
//           <h5>
//             New Course
//             <button
//               className="btn btn-primary float-end"
//               id="wd-add-new-course-click"
//               onClick={(event) => {
//                 event.preventDefault();
//                 addCourse(course);
//               }}
//             >
//               {" "}
//               Add{" "}
//             </button>
//             <button
//               className="btn btn-warning float-end me-2"
//               onClick={(event) => {
//                 event.preventDefault();
//                 updateCourse(course);
//               }}
//               id="wd-update-course-click"
//             >
//               Update
//             </button>
//           </h5>
//           <br />
//           <FormControl
//             value={course.name}
//             className="mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <FormControl
//             value={course.description} 
//             as="textarea"
//             rows={3}
//             onChange={(e) =>
//               setCourse({ ...course, description: e.target.value })
//             }
//           />
//           <br />
//         </>
//       )}
//       {currentUser.role === "STUDENT" && (
//         <Button
//           className="float-end"
//           variant="primary"
//           onClick={toggleShowCourses}
//         >
//           {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
//         </Button>
//       )}
//       <h2 id="wd-dashboard-published">Published Courses</h2> <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {courses.map((course) => (
//             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//                {/* <Card>
//                 <Link
//                   to={`/Kambaz/Courses/${course._id}/Home`}
//                   className="wd-dashboard-course-link text-decoration-none text-dark"
//                 >
//                   <Card.Img
//                     src="/images/react.png"
//                     variant="top"
//                     width="100%"
//                     height={160}
//                   />
//                   <Card.Body className="card-body">
//                     <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                       {course.name}{" "}
//                     </Card.Title>
//                     <Card.Text
//                       className="wd-dashboard-course-description overflow-hidden"
//                       style={{ height: "100px" }}
//                     >
//                       {course.description}{" "}
//                     </Card.Text>
//                     <Button variant="primary"> Go </Button>
                    
                     
//                     {currentUser.role === "FACULTY" && (
//                       <>
//                         <button
//                           onClick={(event) => {
//                             event.preventDefault();
//                             deleteCourse(course._id);
//                           }}
//                           className="btn btn-danger float-end"
//                           id="wd-delete-course-click"
//                         >
//                           Delete
//                         </button>
//                         <button
//                           id="wd-edit-course-click"
//                           onClick={(event) => {
//                             event.preventDefault();
//                             setCourse(course);
//                           }}
//                           className="btn btn-warning me-2 float-end"
//                         >
//                           Edit
//                         </button>
//                       </>
//                     )}
//                     {currentUser.role === "STUDENT" && (
//                       <button
//                         onClick={(event) => {
//                           event.preventDefault();
//                           if (isEnrolled(course._id)) {
//                             unenrollFromCourse(currentUser._id, course._id);
//                           } else {
//                             enrollInCourse(currentUser._id, course._id);
//                           }
//                         }}
//                         className={`btn ${
//                           isEnrolled(course._id) ? "btn-danger" : "btn-success"
//                         } float-end`}
//                         id={
//                           isEnrolled(course._id)
//                             ? "wd-unenroll-course-click"
//                             : "wd-enroll-course-click"
//                         }
//                       >
//                         {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
//                       </button>
//                     )}
//                   </Card.Body>
//                 </Link>
//               </Card> */}
//               <Card>
//   <Card.Img src="/images/react.png" variant="top" width="100%" height={160} />
//   <Card.Body className="card-body">
//     <Card.Title>{course.name}</Card.Title>
//     <Card.Text>{course.description}</Card.Text>
//   </Card.Body>

//   <Card.Footer className="d-flex justify-content-between px-3 pb-2">
//     <Link to={`/Kambaz/Courses/${course._id}/Home`}>
//       <Button variant="primary">Go</Button>
//     </Link>

//     {currentUser.role === "FACULTY" && (
//       <div>
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             deleteCourse(course._id);
//           }}
//           className="btn btn-danger"
//         >
//           Delete
//         </button>
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             setCourse(course);
//           }}
//           className="btn btn-warning ms-2"
//         >
//           Edit
//         </button>
//       </div>
//     )}

//       {currentUser.role === "STUDENT" && (
//         <EnrollmentButton
//           courseId={course._id}
//           isEnrolled={isEnrolled(course._id)}
//           userId={currentUser._id}
//           onEnroll={async () => {
//             await enrollInCourse(currentUser._id, course._id);
//             await fetchEnrollments();
//           }}
//           onUnenroll={async () => {
//             await unenrollFromCourse(currentUser._id, course._id);
//             await fetchEnrollments();
//           }}
//         />
//       )}
//   </Card.Footer>
// </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getEnrollmentsForCurrentUser,
  createEnrollment,
  unenrollUserFromCourse,
} from "../Enrollments/client";
import * as coursesClient from "../Courses/client";
import EnrollmentButton from "../Enrollments/EnrollmentButton";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addCourse: (course: any) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: any) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrollments, setEnrollments] = useState<{
    user: string;
    course: string;
  }[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);

  const toggleShowCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await getEnrollmentsForCurrentUser();
      console.log("Fetched enrollments:", enrollments); // ← add this
      setEnrollments(enrollments);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };
  
  const fetchAllCourses = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const enrollInCourse = async (userId: string, courseId: string) => {
    await createEnrollment(userId, courseId);
  };

  const unenrollFromCourse = async (userId: string, courseId: string) => {
    await unenrollUserFromCourse(userId, courseId);
  };

  const isEnrolled = (courseId: string) =>
  Array.isArray(enrollments) &&
  enrollments.some(
    (enrollment) =>
      enrollment.user === currentUser._id && enrollment.course === courseId
  );

  useEffect(() => {
    fetchEnrollments();
  }, []);

  useEffect(() => {
    if (showAllCourses) {
      fetchAllCourses();
    }
  }, [showAllCourses]);

  const visibleCourses = showAllCourses ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={(event) => {
                event.preventDefault();
                addCourse(course);
              }}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={(event) => {
                event.preventDefault();
                updateCourse(course);
              }}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <br />
        </>
      )}

      {currentUser.role === "STUDENT" && (
        <Button
          className="float-end"
          variant="primary"
          onClick={toggleShowCourses}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </Button>
      )}

      <h2 id="wd-dashboard-published">Published Courses</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img src="/images/react.png" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between px-3 pb-2">
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                    <Button variant="primary">Go</Button>
                  </Link>

                  {currentUser.role === "FACULTY" && (
                    <div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning ms-2"
                      >
                        Edit
                      </button>
                    </div>
                  )}

                  {currentUser.role === "STUDENT" && (
                    <EnrollmentButton
                      courseId={course._id}
                      isEnrolled={isEnrolled(course._id)}
                      userId={currentUser._id}
                      onEnroll={async () => {
                        await enrollInCourse(currentUser._id, course._id);
                        await fetchEnrollments();
                      }}
                      onUnenroll={async () => {
                        await unenrollFromCourse(currentUser._id, course._id);
                        await fetchEnrollments();
                      }}
                    />
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
