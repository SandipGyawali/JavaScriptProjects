import { useInfiniteQuery } from "react-query";
import { getData } from "../api/axios";
import { Fragment, useEffect, useRef } from "react";
import Post from "./Post";
import { v4 as uuid } from "uuid";
import { useInView } from "react-intersection-observer";

function Infinite() {
  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("posts", ({ pageParam = 1 }) => getData(pageParam), {
    getNextPageParam: (lastPae, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage;
    },
  });
  const { ref, inView } = useInView({ threshold: 1 });

  // adding the scroll event.
  useEffect(() => {
    if (inView) {
      hasNextPage && fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage]);

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((group) => (
        <Fragment key={uuid()}>
          {group.map((result) => (
            <Post post={result} key={uuid()} />
          ))}
        </Fragment>
      ))}
      <div ref={ref}>
        {hasNextPage && isFetchingNextPage ? "Fetching..." : "No more data"}
      </div>
    </>
  );
}

export default Infinite;
