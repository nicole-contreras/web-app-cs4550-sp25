import { Link } from "react-router-dom";

export default function Profile(){
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
            <input defaultValue="123" placeholder="username" type="password" className="wd-password"/><br/>
            <input defaultValue="Alice" placeholder="First Name" className="wd-firstname"/><br/>
            <input defaultValue="Wonderland" placeholder="Last Name" className="wd-lastname"/><br/>
            <input defaultValue="03-25-2004" type="date" id="wd-dob"/><br/>
            <input defaultValue="alice@wonderland.com" type="email" id="wd-email"/><br/>
            <select defaultValue="FACULTY" id="wd-role">
                <option value="USER">User</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Admin</option>
                <option value="STUDENT">Student</option>
            </select><br/>
            <Link to="/Kambaz/Account/Signin">Sign Out</Link>
        </div>

    );
}