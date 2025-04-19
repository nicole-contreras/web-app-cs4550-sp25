import Database from "../../../src/Kambaz/Database/index.js";

const assignments = Database.assignments;

export const findAssignments = () => assignments;

export const findAssignmentById = (aid) =>
  assignments.find((a) => a._id === aid);

export const findAssignmentsForCourse = (cid) =>
  assignments.filter((a) => a.course === cid);

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  assignments.push(newAssignment);
  return newAssignment;
};

export const deleteAssignment = (aid) => {
  const index = assignments.findIndex((a) => a._id === aid);
  if (index !== -1) assignments.splice(index, 1);
};

export const updateAssignment = (aid, updated) => {
  const index = assignments.findIndex((a) => a._id === aid);
  assignments[index] = { ...assignments[index], ...updated };
  return assignments[index];
};
