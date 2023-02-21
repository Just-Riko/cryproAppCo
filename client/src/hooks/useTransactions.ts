import { useQuery, useQueryClient } from "react-query";
import { useEffect, useContext } from "react";
import { transactionsService } from "../services/transactionsService";
import { formatSearchFilters } from "../utils";
import { QUERY_KEYS } from "../consts";
import {
  ITransactionsResponse,
  SearchValues,
} from "../types/transactions.types";
import { TransactionsContext } from "../context";

export const useTransactions = () => {
  const { page, setPage, filter, setFilter } = useContext(TransactionsContext);
  const client = useQueryClient();

  const changePage = async (page: number) => {
    if (isFetching) return;
    setPage(page - 1);
  };

  const fetchTransactions = async () => {
    return transactionsService.getTransactions(page, filter);
  };

  const { data, refetch, isLoading, isError, isFetching } = useQuery<
    ITransactionsResponse | undefined
  >(QUERY_KEYS.getTransactions, fetchTransactions);

  const loadTransactions = async (values: SearchValues) => {
    await client.cancelQueries(QUERY_KEYS.getTransactions);
    setPage(0);
    const filter = formatSearchFilters(values);
    setFilter(filter);
  };

  useEffect(() => {
    refetch();
  }, [filter, page]);

  return {
    page,
    setPage,
    loadTransactions,
    data,
    isLoading,
    isError,
    isFetching,
    changePage,
  };
};
