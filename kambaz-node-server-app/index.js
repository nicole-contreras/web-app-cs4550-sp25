import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";

import Hello from "./Hello.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://a5--jovial-cactus-4ff90b.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
  cookie: {},
};

if (process.env.NODE_ENV === "production") {
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
  sessionOptions.proxy = true;
} else {
  sessionOptions.cookie.sameSite = "lax";
  sessionOptions.cookie.secure = false;
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
  console.log(` Server running on port ${PORT}`);
});
