import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (options, processData) => {
    try {
      const response = await fetch(options.url, {
        headers: options?.headers ?? {},
        method: options?.method ?? "GET",
        body: options.body ? JSON.stringify(options.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      processData(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { sendRequest, isLoading, error };
};

export default useHttp;
