import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import axios from "axios";
import fs from "fs";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
// app.use(morgan("dev"));
const PORT = process.env.PORT || 3001;
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
const corsOptions = {
  origin: true,
  methods: ["*"], // Allow all methods
  credentials: true,
};
// middleware
// we have use body parser here to see the output in console
app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(cookieParser());
// app.use(express.static("./client/build"));
// app.get("*", (request, response) => {
//   response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

// app.get("/", async (request, response) => {
//   response.send("Cookies cleared and APIs working");
// });


app.listen(PORT, () => {
  console.log(`connection is on :: >> ${PORT}`);
});
