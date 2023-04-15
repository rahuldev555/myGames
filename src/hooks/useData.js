import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      const fetchData = async () => {
        try {
          const res = await apiClient.get(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          });
          setData(res.data.results);
          setLoading(false);
        } catch (err) {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        }
      };
      fetchData();
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
