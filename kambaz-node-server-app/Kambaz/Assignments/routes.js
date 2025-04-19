import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAssignments();
    res.json(assignments);
  });

  app.get("/api/assignments/:aid", (req, res) => {
    const assignment = dao.findAssignmentById(req.params.aid);
    res.json(assignment);
  });

  app.get("/api/courses/:cid/assignments", (req, res) => {
    const assignments = dao.findAssignmentsForCourse(req.params.cid);
    res.json(assignments);
  });

  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    dao.deleteAssignment(req.params.aid);
    res.sendStatus(200);
  });

  app.put("/api/assignments/:aid", (req, res) => {
    const updated = dao.updateAssignment(req.params.aid, req.body);
    res.json(updated);
  });
}
