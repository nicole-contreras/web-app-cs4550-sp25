import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";

// Import your routes
import Hello from "./Hello.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
    credentials: true,
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz", 
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "lax",
    secure: false     
  },
};
if (process.env.NODE_ENV === "production") {
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
  sessionOptions.proxy = true;
}

if (process.env.NODE_ENV === "development") {
  sessionOptions.cookie.sameSite = "lax";
  sessionOptions.cookie.secure = false;
} else {
  sessionOptions.proxy = true; 
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN, 
  };
}

app.use(session(sessionOptions));

app.use(express.json());

Hello(app);
Lab5(app);
QueryParameters(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
