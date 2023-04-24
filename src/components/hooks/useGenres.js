import APIClient from "../../services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../../data/genres";

const apiClient = new APIClient("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
