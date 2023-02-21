import { tableColumns } from "../../consts";
import globalStyles from "../../styles/table.styles.module.scss";
import styles from "./styles.module.scss";

export const TableHeader = () => {
  return (
    <div className={styles.header}>
      <ul className={globalStyles.list}>
        {tableColumns.map((i) => (
          <li key={`table-column-${i}`} className={styles.listElement}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};
