import express from "express";
import startConn from "./connection.js";
import bodyParser from 'body-parser';

// import { models } from "/models/index.js";
import cors from 'cors';
import route from "./route/index.js";

//  import { Course } from "./models";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

const dbConn = startConn();
console.log(dbConn.ping)
route(app);


export {dbConn , app} ;
