import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useGames = (props) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchGames();
  });

  const fetchGames = async () => {
    try {
      const res = await apiClient.get("/games");
      setGames(res.data.results);
    } catch (err) {
      setError(err.message);
    }
  };

  return { games, error, isLoading };
};

export default useGames;
