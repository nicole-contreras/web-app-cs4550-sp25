import { Navigate, Route, Routes } from "react-router";
import Account from "./Account"
import Dashboard from "./Dashboard/Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";


export default function Kambaz(){
    return (
        <div id="wd-kambaz">
          <KambazNavigation />
            <div className="wd-main-content-offset p-3">
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={            
                      <ProtectedRoute><Dashboard/>
                            </ProtectedRoute>} />
                <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={db.courses} /></ProtectedRoute>} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />

              </Routes>
          </div>
      </div>
    );
}