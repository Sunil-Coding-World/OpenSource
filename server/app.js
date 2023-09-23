import {config} from "dotenv";
import express from "express";
import cors from "cors";
// import bodyParser from 'body-parser';



config({
    path:"./config/config.env"
})

const app = express();  

app.use(cors());
//middleware
// app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))


import course from "./routes/courseRoutes.js"
import user from "./routes/userRoutes.js"
import enroll from "./routes/enrollRoutes.js"

app.use(course);
app.use(user);
app.use(enroll);

export default app; 