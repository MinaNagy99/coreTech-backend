import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./database/dbConnection.js";
import { init } from "./src/modules/index.routes.js";

dotenv.config();
const app = express();

dbConnection();
app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.API_PORT;
app.use(cors());
app.use(express.json());
init(app);

app.listen(process.env.PORT || port, () =>
  console.log(`app listening on port ${port}!`)
);
