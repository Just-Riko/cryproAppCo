import joi from "joi";

export const joiTransactionRequest = joi.object().keys({
  transactionId: joi.string(),
  s: joi.string(),
  r: joi.string(),
  blockNumber: joi.number(),
});
