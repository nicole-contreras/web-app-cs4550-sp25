import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAssignments = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

export const fetchAssignmentsForCourse = async (cid: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/courses/${cid}/assignments`);
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axios.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const deleteAssignment = async (aid: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${aid}`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const fetchAssignmentById = async (aid: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${aid}`);
  return response.data;
};
