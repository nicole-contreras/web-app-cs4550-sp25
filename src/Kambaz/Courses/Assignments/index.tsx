import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControls from "../Modules/ModulesControls";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentIcons from "./AssignmentIcons";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        {/* <input placeholder="Search for Assignments"
           id="wd-search-assignment" />
    <button id="wd-add-assignment-group">+ Group</button>
    <button id="wd-add-assignment">+ Assignment</button> */}
        <AssignmentControls /><br /> <br />
        {/* <h3 id="wd-assignments-title">
      ASSIGNMENTS 40% of Total <button>+</button> </h3>
      
    <ul id="wd-assignment-list">
      <li className="wd-assignment-list-item">
        <a href="#/Kambaz/Courses/1234/Assignments/123"
           className="wd-assignment-link" >
          A1 - ENV + HTML
        </a> <br />
        Multiple Modules | <b>Not Available until</b> May 6 at 12:00 am | <b> Due</b> May 13 at 11:59PM | 100 pts
       </li>
      <li className="wd-assignment-list-item">
      <a href="#/Kambaz/Courses/1234/Assignments/123"
           className="wd-assignment-link" >
          A2 - CSS + BOOTSTRAP
          </a> <br />
        Multiple Modules | <b>Not Available until</b> May 13 at 12:00 am | <b> Due</b> May 20 at 11:59PM | 100 pts
       </li>
      <li className="wd-assignment-list-item">
      <a href="#/Kambaz/Courses/1234/Assignments/123"
           className="wd-assignment-link" >
          A1 - JAVASCRIPT + REACT
          </a> <br />
        Multiple Modules | <b>Not Available until</b> May 20 at 12:00 am | <b> Due</b> May 27 at 11:59PM | 100 pts
       </li>
    </ul>
  </div> */}
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

            {/* Assignment 1 */}
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <Row>
                  <Col xs={1}><AssignmentIcons /></Col>
                  <Col className="ms-0 ps-0"> 
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link" >
                      A1
                    </a>
                    <LessonControlButtons />
                    <div className="mt-1">
                      <small>
                        <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> May 6 at 12:00 am | <b> Due</b> May 13 at 11:59PM | 100 pts
                      </small>
                    </div>
                  </Col>
                  </Row>
                </ListGroup.Item>
            {/* Assignment 2 */}
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <Row>
                  <Col xs={1}><AssignmentIcons /></Col>
                  <Col className="ms-0 ps-0"> 
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link" >
                    A2
                    </a>
                    <LessonControlButtons />
                    <div className="mt-1">
                      <small>
                        <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> May 13 at 12:00 am | <b> Due</b> May 20 at 11:59PM | 100 pts
                      </small>
                    </div>
                  </Col>
                  </Row>
                </ListGroup.Item>
            </ListGroup>

            {/* Assignment 3 */}
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <Row>
                  <Col xs={1}><AssignmentIcons /></Col>
                  <Col className="ms-0 ps-0"> 
                  <a href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link" >
                    A3
                    </a>
                    <LessonControlButtons />
                    <div className="mt-1">
                      <small>
                        <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> May 20 at 12:00 am | <b> Due</b> May 27 at 11:59PM | 100 pts
                      </small>
                    </div>
                  </Col>
                  </Row>
                </ListGroup.Item>
            </ListGroup>
          </ListGroup>
      </ListGroup.Item>
      
      {/* <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              LESSON 1 </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              LESSON 2 </ListGroup.Item>
          </ListGroup>
              </ListGroup.Item> */}
      </ListGroup> 
    </div>
  );
  }
  