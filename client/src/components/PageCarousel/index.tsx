import { useTransactions } from "../../hooks/useTransactions";
import styles from "./styles.module.scss";
import Pagination from "react-js-pagination";
import { NextArrow, PrevArrow } from "./Arrows";

export const PageCarousel = () => {
  const { data, page, changePage } = useTransactions();

  if (!data || !data.success || !data.data.pages) {
    return null;
  }

  return <div className={styles.carousel}>
    <Pagination
      prevPageText={<PrevArrow active={page > 0} />}
      nextPageText={<NextArrow active={data.data.pages > page + 1} />}
      linkClassPrev={styles.nav}
      linkClassNext={styles.nav}
      linkClass={styles.button}
      activeLinkClass={styles.active}
      activePage={page + 1}
      itemsCountPerPage={10}
      totalItemsCount={data.data.count}
      pageRangeDisplayed={5}
      onChange={changePage}
      hideFirstLastPages
    />
  </div>
}