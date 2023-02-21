import { Router } from "express";
import { cryptoController } from "../../controllers/crypto.controller";
import { isPageValid } from "../../middlewares/isPageValid.middleware";
import { trySend } from "../../middlewares/trySend.middleware";
import { validateTransactionRequest } from "../../middlewares/validateByJoi.middleware";

export const cryptoRouter: Router = Router();

cryptoRouter.get(
  "/get-transactions/:page",
  validateTransactionRequest,
  isPageValid,
  trySend(cryptoController.getTransactions)
);

cryptoRouter.post("/load-block/", trySend(cryptoController.loadBlock));
