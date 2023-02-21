import express, { Express } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { AppRouter } from "./routers";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import connectDB from "./config/database";
import bodyParser from "body-parser";
import { job } from "./cron";
import { PORT } from "./config/environments";

dotenv.config();

const app: Express = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const router = new AppRouter(app);
router.init();

// All errors from routes above will be handled here
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

job.start();
