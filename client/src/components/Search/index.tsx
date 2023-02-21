import { useFormikContext } from "formik";
import { useState } from "react";
import styles from "./styles.module.scss";
import openArrow from "../../assets/openArrow.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { selectVariants } from "../../consts";
import { SearchValues } from "../../types/transactions.types";
import { useTransactions } from "../../hooks/useTransactions";
import { Triangle } from "react-loader-spinner";

export const Search = () => {
  const { values, handleChange, setFieldValue, submitForm } =
    useFormikContext<SearchValues>();
  const { isFetching } = useTransactions();

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const toggleSelector = () => setIsSelectorOpen((prev) => !prev);

  const selectValue = (idx: number) => () => {
    setFieldValue("selector", idx);
    setIsSelectorOpen(false);
  };

  return (
    <div className={styles.content}>
      <div className={styles.bordered}>
        <input
          className={styles.input}
          placeholder="Search..."
          value={values.value}
          onChange={handleChange}
          name="value"
        />

        <div className={styles.selector}>
          {selectVariants[values.selector]}
          <img
            src={openArrow}
            onClick={toggleSelector}
            className={isSelectorOpen && styles.rotate}
          />
        </div>
        {isSelectorOpen && (
          <ul className={styles.selectionList}>
            {selectVariants.map((i, idx) => {
              if (idx !== values.selector)
                return (
                  <li key={`selector-${idx}`} onClick={selectValue(idx)}>
                    {i}
                  </li>
                );
            })}
          </ul>
        )}
      </div>

      <button type="submit" onClick={submitForm} className={styles.button}>
        {isFetching ? (
          <Triangle height="30" width="30" color="#fff" />
        ) : (
          <img src={searchIcon} />
        )}
      </button>
    </div>
  );
};
