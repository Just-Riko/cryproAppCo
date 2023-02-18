import { NODE_ENV, PORT, PRODUCTION_APP_URL } from "../config/environments";

export const APP_BASE_URL = NODE_ENV === "prod" ? PRODUCTION_APP_URL : `http://localhost:${PORT}/`;

export const gweiValueToEth = 0.000000001;
export const transactionsOnPage = 10;
export const etherScanApiLink = "https://api.etherscan.io/";