import useData from "./useData";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery) =>
  useQuery({
    query,
  });
useData(
  "/games",
  {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  },
  [gameQuery]
);

export default useGames;
