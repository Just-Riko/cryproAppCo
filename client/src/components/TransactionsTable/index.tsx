import { useTransactions } from "../../hooks/useTransactions";
import { NoTransactions, Spinner, TableHeader, Transaction } from "../";
import styles from "./styles.module.scss";

export const TransactionsTable = () => {
  const { data, isLoading, isError } = useTransactions();

  if (isLoading) {
    return <Spinner />
  }

  if (!data?.success || isError || data.data.pages === 0) {
    return <NoTransactions />
  }

  return (
    <>
    <TableHeader />
    <div className={styles.table}>
      {data?.data.data.map(i => <Transaction key={i.transactionId} data={i} currentBlock={data.data.currentBlock} />)}
    </div>
    </>
    
  );
}