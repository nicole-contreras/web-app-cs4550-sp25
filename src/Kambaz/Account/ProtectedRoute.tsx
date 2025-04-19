// import { useSelector } from "react-redux";
// import { Navigate, useParams } from "react-router-dom";

// export default function ProtectedRoute({ children }: { children: any }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const enrollments = useSelector((state: any) => state.enrollmentsReducer?.enrollments || []);
//   const { cid } = useParams(); 

//   // Redirect if user is not signed in
//   if (!currentUser) {
//     return <Navigate to="/Kambaz/Account/Signin" />;
//   }

//   // If the route has a course ID, check if the user is enrolled in that course
//   if (cid) {
//     const isEnrolled = enrollments.some((e: any) => e.user === currentUser._id && e.course === cid);
    
//     // Redirect to the Dashboard if the user is not enrolled in the course
//     if (!isEnrolled) {
//       return <Navigate to="/Kambaz/Dashboard" />;
//     }
//   }

//   return children;
// }


import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/Kambaz/Account/Signin" />;
}}
