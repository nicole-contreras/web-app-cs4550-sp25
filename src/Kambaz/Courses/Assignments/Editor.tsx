import { Button, Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as db from "../../Database"; 

export default function AssignmentEditor() {
    const { cid, aid } = useParams(); 

    const assignment = db.assignments.find((a) => a._id === aid && a.course === cid);

    if (!assignment) {
        return <h3 className="text-center text-danger">Assignment not found</h3>;
    }

    return (
      <div id="wd-assignments-editor">
        <Container className="mt-4" style={{ maxWidth: '50%' }}>
        <h2>Edit Assignment</h2>
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={assignment._id} 
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="description"
            defaultValue={assignment.description || "No description available"} 
          />
        </Form.Group>

        {/* Points */}
        <Form.Group as={Row} className="mb-3">
        <FormLabel as="legend" column sm={2}>Points</FormLabel>
        <Col>
          <Form.Control
            type="number"
            name="points"
            defaultValue={assignment.pts} 
          />
          </Col>
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group as={Row} className="mb-3">
        <FormLabel as="legend" column sm={2}>Assignment Group</FormLabel>
        <Col>
          <Form.Select
            name="assignmentGroup"
            defaultValue={assignment.group || "ASSIGNMENTS"}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="PROJECTS">PROJECTS</option>
          </Form.Select>
          </Col>
        </Form.Group>

        {/* Display Grade As */}
        <Form.Group as={Row} className="mb-3">
        <FormLabel as="legend" column sm={2}>Display Grade As</FormLabel>
        <Col>
          <Form.Select
            name="displayGradeAs"
            defaultValue={assignment.gradeType || "Percentage"} 
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </Form.Select>
          </Col>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group as={Row} className="mb-3">
        <FormLabel as="legend" column sm={2}>Submission Type</FormLabel>
        <Col>
          <Form.Select
            name="submissionType"
            defaultValue={assignment.submissionType || "Online"} 
          >
            <option value="Online">Online</option>
            <option value="External Tool">External Tool</option>
          </Form.Select>
          </Col>
        </Form.Group>

        {/* Due Date & Availability */}
        <Row className="mb-3 d-flex justify-content-center">
            <Col sm={8}>
                <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="datetime-local"
                    name="dueDate"
                    defaultValue={assignment.due_date}
                />
                </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3 d-flex justify-content-center">
            <Col sm={4}>
                <Form.Group>
                <Form.Label>Available From</Form.Label>
                <Form.Control type="datetime-local" name="availableFrom" defaultValue={assignment.available_from} />
                </Form.Group>
            </Col>
            <Col sm={4}>
                <Form.Group>
                <Form.Label>Until</Form.Label>
                <Form.Control type="datetime-local" name="availableUntil" defaultValue={assignment.until_date} />
                </Form.Group>
            </Col>
            </Row>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-3">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
        </Container>
        </div>
    );
}
