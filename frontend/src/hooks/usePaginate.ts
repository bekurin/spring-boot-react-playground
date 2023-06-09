import { useSearchParams } from "react-router-dom"
import { Paginate } from "../components/types";

export const usePaginate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paginate = {
    page: parseInt(searchParams.get("page") || "0"),
    size: parseInt(searchParams.get("size") || "20")
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