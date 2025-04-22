import { useState } from "react";
import { FormControl } from "react-bootstrap";


const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

      const [module, setModule] = useState({
        id: "CS1234",
        name: "Module 1",
        description: "Intro to Express",
        course: "CS5610"
      });
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
 
      
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <hr />
        <h3>Module Object (5.2.3.4)</h3>

        <h4>Modifying Properties</h4>

        <a id="wd-update-module-name"
        className="btn btn-success mb-2"
        href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
        </a>
        <FormControl className="w-75 mb-3"
        id="wd-module-name"
        value={module.name}
        onChange={(e) =>
            setModule({ ...module, name: e.target.value })}
        />

        <a id="wd-update-module-description"
        className="btn btn-success mb-2"
        href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
        </a>
        <FormControl className="w-75 mb-3"
        id="wd-module-description"
        value={module.description}
        onChange={(e) =>
            setModule({ ...module, description: e.target.value })}
        />

        <hr />
        <h4>Retrieving Objects</h4>
        <a id="wd-retrieve-module" className="btn btn-primary mb-2"
        href={`${MODULE_API_URL}`}>
        Get Module
        </a>

        <h4>Retrieving Properties</h4>
        <a id="wd-retrieve-module-name" className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}>
        Get Module Name
        </a>

    </div>
);}
