import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchGenres();
  });

  const fetchGenres = async () => {
    try {
      const res = await apiClient.get("/genres");
      setGenres(res.data.results);
    } catch (err) {
      setError(err.message);
    }
  };

  return { genres, error, isLoading };
};

export default useGenres;
