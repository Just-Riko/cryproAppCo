import { ITransaction } from "../../types/transactions.types";
import { shortenStringTo12 } from "../../utils";
import styles from "./styles.module.scss";
import globalStyles from "../../styles/table.styles.module.scss";

interface IProps {
  data: ITransaction;
  currentBlock: number;
}

export const Transaction = ({ data, currentBlock }: IProps) => {
  return (
    <ul className={`${styles.transaction} ${globalStyles.list}`}>
      <li>{data.blockNumber}</li>
      <li>
        <a
          href={`https://etherscan.io/tx/${data.transactionId}`}
          target="_blank"
        >
          {shortenStringTo12(data.transactionId)}
        </a>
      </li>
      <li>{shortenStringTo12(data.s)}</li>
      <li>{shortenStringTo12(data.r)}</li>
      <li>{currentBlock - data.blockNumber}</li>
      <li>{new Date(data.timestamp * 1000).toLocaleDateString()}</li>
      <li>{data.value.toFixed(10)}</li>
      <li>{data.gas.toFixed(10)}</li>
    </ul>
  );
};
