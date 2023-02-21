import * as dotenv from "dotenv";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV as string;
export const PORT = process.env.PORT as string;
export const PRODUCTION_APP_URL = process.env.PRODUCTION_APP_URL as string;
export const MONGO_URL = process.env.MONGO_URL as string;
export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY as string;
export const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY as string;
