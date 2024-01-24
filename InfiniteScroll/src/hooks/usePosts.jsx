import { useEffect, useState } from "react";
import { getData } from "../api/axios";

const max_limit = 100;

function usePosts(pageNum = 1) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hastNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();

    getData(pageNum)
      .then((data) => {
        setResults((prev) => {
          return [...data, ...prev];
        });
        setHasNextPage(pageNum + 1 < max_limit);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setError({ message: err.message });
      });

    return () => controller.abort();
  }, [pageNum]);

  return { isLoading, isError, error, results, hastNextPage };
}

export default usePosts;
