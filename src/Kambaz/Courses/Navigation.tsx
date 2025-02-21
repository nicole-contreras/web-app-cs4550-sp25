import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams(); // Get course ID from URL

  // Find the current course based on cid
  const course = courses.find((course: any) => course._id === cid);

  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
  ];

  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link.path);
        return (
          <ListGroup.Item
            key={link.path}
            as={Link}
            to={link.path}
            className={`list-group-item border border-0 bg-white ${
              isActive ? " list-group-item active border border-0 text-black" : "text-danger"
            }`}
          >
            {link.label}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
