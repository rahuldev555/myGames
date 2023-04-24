import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../../data/genres";
import APIClient from "../../services/api-client";

const apiClient = new APIClient("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
