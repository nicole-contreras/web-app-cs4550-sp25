import { Button, Col, Container, Form, FormCheck, FormGroup, FormLabel, Row } from "react-bootstrap";

export default function AssignmentEditor() {
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
            defaultValue="A1"
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="description"
            defaultValue="At vero eos et accusamus et iusto odio dignissimos ducimus 
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
             et quas molestias excepturi sint occaecati cupiditate non provident, 
             similique sunt in culpa qui officia deserunt mollitia animi, id est 
             laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
              cumque nihil impedit quo minus id quod maxime placeat facere possimus,
               omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem 
               quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet 
               ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum 
               rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores 
               alias consequatur aut perferendis doloribus asperiores repellat"
          />
        </Form.Group>

        {/* Points */}
        <Form.Group as={Row} className="mb-3">
        <FormLabel as="legend" column sm={2}>Points</FormLabel>
        <Col>
          <Form.Control
            type="number"
            name="points"
            defaultValue="100"
          />
          </Col>
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group as={Row} className="mb-3">
        <FormLabel as="legend" column sm={2}>Assignment Group</FormLabel>
        <Col>
          <Form.Select
            name="assignmentGroup"
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
            name="displayGradeAs">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </Form.Select>
          </Col>
        </Form.Group>

        {/* Submission Type (Dropdown) */}
        <Form.Group as={Row} className="mb-3">
        <FormLabel as="legend" column sm={2}>Submission Type</FormLabel>
        <Col>
          <Form.Select
            name="submissionType">
            <option value="Online">Online</option>
            <option value="External Tool">External Tool</option>
          </Form.Select>
          </Col>
        </Form.Group>

        {/* Submission Type */}
        <FormGroup className="mb-3">
                        <Col sm={{ span: 10, offset: 5 }}>
                            <FormLabel as="legend" column sm={5}>
                                Online Entry Options
                            </FormLabel>
                        </Col>
                        <Col sm={{ span: 10, offset: 5 }}>
                        <FormCheck type="checkbox" label="Text Entry" id="option-text-entry" />
                        <FormCheck type="checkbox" label="Website URL" id="option-website-url" />
                        <FormCheck type="checkbox" label="Media Recordings" id="option-media-recordings" />
                        <FormCheck type="checkbox" label="Student Annotation" id="option-student-annotation" />
                        <FormCheck type="checkbox" label="File Uploads" id="option-file-uploads" />
                    </Col>
                    </FormGroup>

        <Form.Group as={Row} className="mb-3 d-flex">
        <FormLabel as="legend" column sm={2}> Assign To </FormLabel>
        <Col>
            <Form.Group>
                <Form.Label><b>Assign To </b></Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Everyone"
                    rows={1}
                />
            </Form.Group>
        </Col>
        <Row className="mb-3 d-flex justify-content-center">
            <Col sm={8} className = " justify-content-center">
                <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="datetime-local"
                    name="dueDate"
                />
                </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3 d-flex justify-content-center">
            <Col sm={4}>
                <Form.Group>
                <Form.Label>Available From</Form.Label>
                <Form.Control type="datetime-local" name="availableFrom" />
                </Form.Group>
            </Col>
            <Col sm={4}>
                <Form.Group>
                <Form.Label>Until</Form.Label>
                <Form.Control type="datetime-local" name="availableUntil" />
                </Form.Group>
            </Col>
            </Row>
        </Form.Group>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-3">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
        {/* <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
            <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
            </td>
            <td>
                <input id="wd-points" value={100} />
            </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="wd-display-grade-as">Display Grade</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="POINTS">Points</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                        <option value="Online">Online</option>
                    </select>
                </td>
            </tr>
            <tr>
                <br />
            
            </tr>
            <tr>
                <br />
                <td align="left">
                    <form id="wd-submission-type">
                        Online Entry Options <br/>
                        <input type="checkbox" id="wd-text-entry" name="textentry" value="Text Entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" id="wd-website-url" name="website url" value="Website URL" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" id="wd-media-recording" name="media" value="Media Recording" />
                        <label htmlFor="wd-media-recording">Media Recording</label><br />
                        <input type="checkbox" id="wd-student-annotation" name="student annotation" value="Student Annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" id="wd-file-upload" name="fileuploads" value="File Uploads" />
                        <label htmlFor="wd-media-recording">File Uploads</label><br />
                    </form>
                </td>
            </tr> <br />
            <tr>
                <td align="right">
                    Assign To
                </td>
            </tr>
            <tr>
                <br />
                <td align="right">
                    <input type="text" id="wd-assign-to" defaultValue="Everyone"></input>
                </td>
            </tr> <br />
            <tr> <br />
                <td align="left">
                    <td align="left">Due</td>
                    <input type="date" id="wd-due-date" defaultValue="2026-01-01"></input>
                </td>
            </tr><br />
            <tr><br />
                <td>
                    Available from
                </td>
                <td align="left">
                    Until
                </td>
            </tr>
            <tr>< br/>
                <td align ="left">
                    <input type="date" id="wd-available-from" defaultValue="2026-01-01"></input>
                </td>
                <td align="left">
                    <input type="date" id="wd-available-until" defaultValue="2026-01-01"></input>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                <hr />
                </td>
            </tr>
            <tfoot>
                <td colSpan={2} />
                <td align="left">
                    <button>Cancel</button> <button>Save</button>
                </td>
            </tfoot>
        </table>  */}
        </Container>
        </div>
    );
}