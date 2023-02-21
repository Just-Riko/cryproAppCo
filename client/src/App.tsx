import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { TransactionsContext } from "./context";
import { TransactionsPage } from "./pages";
import { ITransactionsFilter } from "./types/transactions.types";

function App() {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState<ITransactionsFilter | undefined>({});
  const providerValue = { page, setPage, filter, setFilter };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        keepPreviousData: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TransactionsContext.Provider value={providerValue}>
        <TransactionsPage />
      </TransactionsContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
