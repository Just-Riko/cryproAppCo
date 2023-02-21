import axios from "axios";
import cron from "node-cron";
import { APP_BASE_URL } from "../consts";

export const job = cron.schedule(
  "*/5 * * * *",
  () => {
    axios.post(`${APP_BASE_URL}api/v1/crypto/load-block`);
  },
  {
    scheduled: false,
  }
);
