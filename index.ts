import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

// TODO: 1. Prepend /api to all routes, register the indexRouter to the main app 

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});