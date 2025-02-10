import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
export default function AssignmentIcons() {
  return (
    <span className="me-1 position-relative">
      <BsGripVertical className="me-2 fs-3" /> 
      <MdOutlineAssignment className="me-2 fs-3" style={{ color: "green" }} />
      {/* <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" /> */}
    </span>);}