import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = await dao.enrollUserInCourse(userId, courseId);
    res.send(enrollment);
  });

  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  });

  app.get("/api/enrollments/:userId/", async (req, res) => {
    const { userId } = req.params;
    const courses = await dao.findCoursesForUser(userId);
    res.send(courses);
  });
}
