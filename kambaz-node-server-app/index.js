import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";
import "dotenv/config";
 
import Hello from "./Hello.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";

const app = express();
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"
mongoose.connect(CONNECTION_STRING);
mongoose.connection.on("connected", () => {
  console.log("🧠 Connected to MongoDB:", mongoose.connection.name);
});

const allowedOrigins = [
  "http://localhost:5173",
  "https://a6--jovial-cactus-4ff90b.netlify.app",
];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

app.use(cors({
  origin: function (origin, callback) {
    console.log("🌍 CORS origin:", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// const sessionOptions = {
//   secret: process.env.SESSION_SECRET || "kambaz",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {},
// };
app.set("trust proxy", 1);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    sameSite: "none",  
    secure: true      
  }
};

// if (process.env.NODE_ENV === "production") {
//   sessionOptions.cookie = {
//     sameSite: "none",
//     secure: true,
//   };
//   sessionOptions.proxy = true;
// } else {
//   sessionOptions.cookie.sameSite = "lax";
//   sessionOptions.cookie.secure = false;
// }

app.use(session(sessionOptions));
app.use(express.json());

Hello(app);
Lab5(app);
QueryParameters(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);

const PORT = process.env.PORT || 4000;
app.use((req, res, next) => {
  console.log(`📥 Received ${req.method} ${req.url}`);
  next();
});
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
