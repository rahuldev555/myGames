import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    const fetchGames = async () => {
      try {
        const res = await apiClient.get("/games", {
          signal: controller.signal,
        });
        setGames(res.data.results);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      }
    };
    fetchGames();
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
