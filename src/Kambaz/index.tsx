import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses";
import "./styles.css";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import * as enrollmentsClient from "./Enrollments/client";
import KambazNavigation from "./Navigation";


import { useEffect } from "react";
import { addCourse } from "./Courses/reducer";

export default function Kambaz() {

  const [courses, setCourses] = useState<any[]>([]);

  const [course, setCourse] = useState<any>({
    name: "New course",
    description: "New course description",
  });

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addCourse={addCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      enrollInCourse={enrollmentsClient.createEnrollment}
                      unenrollFromCourse={enrollmentsClient.unenrollUserFromCourse}
                    />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}