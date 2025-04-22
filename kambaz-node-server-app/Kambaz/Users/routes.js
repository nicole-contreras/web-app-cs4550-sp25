import * as dao from "./dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import * as courseDao from "../Courses/dao.js";

export default function UserRoutes(app) {
  const createUser = (req, res) => {};
  const deleteUser = (req, res) => {};

  const findAllUsers = async (req, res) => {
    const { role } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    const users = await dao.findAllUsers();
    console.log("Returning users:", users);

    res.json(users);
  };
  const findUserById = (req, res) => {};
  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates);
    const currentUser = dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already in use" });
      return;
    }
    const currentUser = dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };
  
  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };



  const createCourse = async (req, res) => {
    try {
      console.log("📥 Incoming POST /api/users/current/courses");
      console.log("➡️ req.body:", req.body);
  
      const currentUser = req.session["currentUser"];
  
      if (!currentUser) {
        return res.status(401).json({ error: "Not logged in" });
      }
  
      const newCourse = await courseDao.createCourse(req.body);
  
      const enrollment = await enrollmentsDao.enrollUserInCourse(
        currentUser._id,
        newCourse._id
      );
  
      res.json(newCourse);
    } catch (e) {
      res.status(500).json({ error: "Failed to create course", details: e.message });
    }
  };

  
  
  
  app.post("/api/users/current/courses", createCourse);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}