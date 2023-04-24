import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import platforms from "../../data/platforms";
import ms from "ms";

const apiClient = new APIClient("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initilData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
