import { Col, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentIcons from "./AssignmentIcons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Link } from "react-router";

export default function Assignments() {
      const { cid } = useParams();

    return (
      <div id="wd-assignments">
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-assignments-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /><FaCaretDown
                className="position-absolute"
                style={{
                  top: "8%",
                  left: "30px",
                  transform: "translateY(-50%)",
                  fontSize: "1.2rem",
                }} />  ASSIGNMENTS <AssignmentControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
            {db.assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
                         <ListGroup.Item className="wd-lesson p-3 ps-1">
                          <Row>
                            <Col xs={1}><AssignmentIcons /></Col>
                             <Col className="ms-0 ps-0"> 
                             <Link 
                                to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} 
                                className="wd-assignment-link">
                                {assignment._id}
                              </Link>
                              {/* <a href="#/Kambaz/Courses/1234/Assignments/123"
                                 className="wd-assignment-link" >
                                 A1
                               </a> */}
                               <LessonControlButtons />
                               <div className="mt-1">
                                 <small>
                                   <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b>{assignment.Available} | <b> Due</b> {assignment.due}  | {assignment.pts}
                                 </small>
                               </div>
                             </Col>
                             </Row>
                          </ListGroup.Item>
            ))}              </ListGroup>

            </ListGroup.Item></ListGroup></div>)};
  