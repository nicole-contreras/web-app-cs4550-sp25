import Database from "../../../src/Kambaz/Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = {
    _id: uuidv4(),
    user: userId,
    course: courseId,
  };

  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}
