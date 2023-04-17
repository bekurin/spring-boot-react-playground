import { useSearchParams } from "react-router-dom"

export interface Pagination {
    page: number,
    size: number
}

export interface Paginate {
    page: number,
    size: number
}

export const usePaginate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paginate = {
    page: parseInt(searchParams.get("page") || "0"),
    size: parseInt(searchParams.get("size") || "20"),
  };

  const setPaginate = (paginate: Paginate) => {
    Object.entries(paginate).map(([key, value]) => {
      searchParams.set(key, `${value}`);
    });
    setSearchParams(searchParams);
  };

  return {
    paginate,
    setPaginate,
  };
};