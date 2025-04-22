import { v4 as uuidv4 } from "uuid";
import Database from "../../../src/Kambaz/Database/index.js";

// Enroll a user in a course
export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = {
    _id: uuidv4(),
    user: userId,
    course: courseId,
  };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const before = Database.enrollments.length;
  Database.enrollments = Database.enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
  const after = Database.enrollments.length;
  return { deletedCount: before - after };
}

export function findCoursesForUser(userId) {
  const { courses, enrollments } = Database;
  return courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
}

export function findUsersInCourse(courseId) {
  const { users, enrollments } = Database;
  return users.filter((user) =>
    enrollments.some(
      (enrollment) =>
        enrollment.course === courseId && enrollment.user === user._id
    )
  );
}
