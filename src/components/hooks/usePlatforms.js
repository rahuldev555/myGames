import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import platforms from "../../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initilData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
