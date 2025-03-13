// import { Button, Col, Container, Form, FormLabel, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import * as db from "../../Database"; 

// export default function AssignmentEditor() {
//     const { cid, aid } = useParams(); 

//     const assignment = db.assignments.find((a) => a._id === aid && a.course === cid);

//     if (!assignment) {
//         return <h3 className="text-center text-danger">Assignment not found</h3>;
//     }

//     return (
//       <div id="wd-assignments-editor">
//         <Container className="mt-4" style={{ maxWidth: '50%' }}>
//         <h2>Edit Assignment</h2>
//       <Form>
//         {/* Assignment Name */}
//         <Form.Group className="mb-3">
//           <Form.Label>Assignment Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             defaultValue={assignment._id} 
//           />
//         </Form.Group>

//         {/* Description */}
//         <Form.Group className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={6}
//             name="description"
//             defaultValue={assignment.description || "No description available"} 
//           />
//         </Form.Group>

//         {/* Points */}
//         <Form.Group as={Row} className="mb-3">
//         <FormLabel as="legend" column sm={2}>Points</FormLabel>
//         <Col>
//           <Form.Control
//             type="number"
//             name="points"
//             defaultValue={assignment.pts} 
//           />
//           </Col>
//         </Form.Group>

//         {/* Assignment Group */}
//         <Form.Group as={Row} className="mb-3">
//         <FormLabel as="legend" column sm={2}>Assignment Group</FormLabel>
//         <Col>
//           <Form.Select
//             name="assignmentGroup"
//             defaultValue={assignment.group || "ASSIGNMENTS"}
//           >
//             <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             <option value="QUIZZES">QUIZZES</option>
//             <option value="PROJECTS">PROJECTS</option>
//           </Form.Select>
//           </Col>
//         </Form.Group>

//         {/* Display Grade As */}
//         <Form.Group as={Row} className="mb-3">
//         <FormLabel as="legend" column sm={2}>Display Grade As</FormLabel>
//         <Col>
//           <Form.Select
//             name="displayGradeAs"
//             defaultValue={assignment.gradeType || "Percentage"} 
//           >
//             <option value="Percentage">Percentage</option>
//             <option value="Points">Points</option>
//             <option value="Complete/Incomplete">Complete/Incomplete</option>
//           </Form.Select>
//           </Col>
//         </Form.Group>

//         {/* Submission Type */}
//         <Form.Group as={Row} className="mb-3">
//         <FormLabel as="legend" column sm={2}>Submission Type</FormLabel>
//         <Col>
//           <Form.Select
//             name="submissionType"
//             defaultValue={assignment.submissionType || "Online"} 
//           >
//             <option value="Online">Online</option>
//             <option value="External Tool">External Tool</option>
//           </Form.Select>
//           </Col>
//         </Form.Group>

//         {/* Due Date & Availability */}
//         <Row className="mb-3 d-flex justify-content-center">
//             <Col sm={8}>
//                 <Form.Group>
//                 <Form.Label>Due Date</Form.Label>
//                 <Form.Control
//                     type="datetime-local"
//                     name="dueDate"
//                     defaultValue={assignment.due_date}
//                 />
//                 </Form.Group>
//             </Col>
//           </Row>
//           <Row className="mb-3 d-flex justify-content-center">
//             <Col sm={4}>
//                 <Form.Group>
//                 <Form.Label>Available From</Form.Label>
//                 <Form.Control type="datetime-local" name="availableFrom" defaultValue={assignment.available_from} />
//                 </Form.Group>
//             </Col>
//             <Col sm={4}>
//                 <Form.Group>
//                 <Form.Label>Until</Form.Label>
//                 <Form.Control type="datetime-local" name="availableUntil" defaultValue={assignment.until_date} />
//                 </Form.Group>
//             </Col>
//             </Row>

//         {/* Buttons */}
//         <div className="d-flex justify-content-end mt-3">
//           <Button variant="secondary" className="me-2">
//             Cancel
//           </Button>
//           <Button variant="danger">Save</Button>
//         </div>
//       </Form>
//         </Container>
//         </div>
//     );
// }


import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer) || { assignments: [] };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNew = aid === "new";
  const existingAssignment = assignments.find((a: { _id: string | undefined; course: string | undefined; }) => a._id === aid && a.course === cid);

  const [assignment, setAssignment] = useState(
    isNew
      ? { _id: uuidv4(), name: "", description: "", points: 100, due: "", available: "", course: cid }
      : existingAssignment
  );

  if (!assignment) {
    return <h3 className="text-center text-danger">Assignment not found</h3>;
  }

  const handleSave = () => {
    if (isNew) {
      dispatch(addAssignment(assignment)); // Create new assignment
    } else {
      dispatch(updateAssignment(assignment)); // Update existing assignment
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <Container className="mt-4" style={{ maxWidth: "50%" }}>
        <h2>{isNew ? "Create Assignment" : "Edit Assignment"}</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control
              type="text"
              value={assignment.title}
              onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              value={assignment.description}
              onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={6}>
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={assignment.due}
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" className="me-2" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
