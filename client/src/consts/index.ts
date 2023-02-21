export const QUERY_KEYS = {
  getTransactions: "GET_TRANSACTIONS",
};

export const inputInitialValues = {
  value: "",
  selector: 0,
};

export const selectVariants = [
  "Transaction ID",
  "Block number",
  "Sender address",
  "Recipient's address",
];

export const tableColumns = [
  "Block Number",
  "Transaction ID",
  "Sender address",
  "Recipient's address",
  "Block confirmations",
  "Date",
  "Value",
  "Transaction Fee",
];

export const initTransactionContextValues = {
  page: 0,
  filter: {},
  setPage: () => null,
  setFilter: () => null,
};
