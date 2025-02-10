import { FaPlus } from "react-icons/fa6";
import { Button, Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
export default function AssignmentControls() {
 return (
   <div id="wd-assignment-controls" className="text-nowrap">
    <div className="position-relative mb-2 float-start">
        <CiSearch
          className="position-absolute"
          style={{
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            fontSize: "1.2rem",
          }}
        />
        <Form.Control
          placeholder="Search..."
          id="wd-search-assignment"
          style={{ paddingLeft: "35px" }}
        />
      </div>


     <Button variant="danger" className="me-1 float-end" id="wd-add-assignment">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
     <Button variant="secondary" className="me-1 float-end" id="wd-add-assignment-group">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
   </div>
);}
