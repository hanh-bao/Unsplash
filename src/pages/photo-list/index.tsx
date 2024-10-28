import { photoApis } from "@/apis/photos";
import { Loading, NoLoading } from "../loading/index";
import ErrorPage from "../error/index";
import { Photo } from "@/types/photo";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useDebounceCallback, useEventListener } from "usehooks-ts";
import GalleryPhoto from "./photo";
import { queryClient } from "@/configs/query";
import Masonry from "react-masonry-css";

const PhotoList = () => {
  const submenuRef = useRef<HTMLDivElement>(null);
  const {
    data,
    error,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery(
    {
      queryKey: ["photoList"],
      queryFn: (ctx) => {
        return photoApis.getPhotos({ page: ctx.pageParam });
      },
      getNextPageParam: (lastResult, __, lastPage) => {
        return (lastResult.response?.total || 0) > (lastPage + 1) * 15
          ? lastPage + 1
          : lastPage;
      },
      initialPageParam: 1,
    },
    queryClient
  );

  const debouncedFetch = useDebounceCallback(fetchNextPage, 100);

  const results = (data?.pages.flatMap((res) => res.response?.results) ||
    []) as Photo[];

  const handleScroll = () => {
    if (submenuRef.current) {
      const { scrollHeight } = submenuRef.current;

      if (window.scrollY + window.screen.height > scrollHeight) {
        debouncedFetch();
      }
    }
  };

  useEventListener("scroll", handleScroll);

  if (error) return "An error has occurred: " + error.message;

  const masonryBreakpoints = {
    default: 3, // Số cột mặc định
    1100: 2, // 2 cột khi chiều rộng màn hình <= 1100px
    700: 1, // 1 cột khi chiều rộng màn hình <= 700px
  };

  return status === "pending" ? (
    <Loading />
  ) : status === "success" ? (
    <div className="flex justify-center overflow-auto">
      <div className=" w-[85%]" ref={submenuRef}>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {results.map((res) => (
            <div key={res.id} className="break-inside-avoid">
              <GalleryPhoto {...res} />
            </div>
          ))}
        </Masonry>

        <div className="mt-7">
          {isFetching || isFetchingNextPage ? (
            <Loading />
          ) : !hasNextPage ? (
            <NoLoading />
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default PhotoList;
