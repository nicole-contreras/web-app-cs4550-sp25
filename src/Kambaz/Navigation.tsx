import { Link } from "react-router-dom";

export default function KambazNavigation(){
    return(
        <div id="wd-kambaz-navigation">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
            <Link to="/Kambaz/Account" id="ws-account-link">Account</Link><br />
            <Link to="/Kambaz/Dashboard" id="ws-dashboard-link">Dashboard</Link><br />
            <Link to="/Kambaz/Courses" id="ws-course-link">Courses</Link><br />
            <Link to="/Kambaz/Calendar" id="ws-calendar-link">Calendar</Link><br />
            <Link to="/Kambaz/Inbox" id="ws-inbox-link">Inbox</Link><br />
            <Link to="/Labs" id="ws-labs-link">Labs</Link><br />
        </div>
    );
}