import { Formik } from "formik";
import { Header, PageCarousel, Search, TransactionsTable, Footer } from "../../components";
import { inputInitialValues } from "../../consts";
import { useTransactions } from "../../hooks/useTransactions";
import styles from './styles.module.scss';

export const TransactionsPage = () => {
  const { loadTransactions } = useTransactions();

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <br />
        <br />
        <div className={styles.content}>

          <Formik initialValues={inputInitialValues} onSubmit={loadTransactions}>
            <Search />
          </Formik>
          <TransactionsTable />

          <PageCarousel />

        </div>
      </div>

      <Footer />
    </>
  );
}