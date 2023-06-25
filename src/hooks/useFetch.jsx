import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);

      const controller = new AbortController();
      const timeLimit = setTimeout(() => {
        controller.abort();
        json = null;
        setError('O servidor demorou para responder, tente mais tarde');
        throw new Error('O servidor demorou para responder, tente mais tarde');
      }, 5000);

      response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeLimit);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      setError(response.status);

      json = null;
    } finally {
      setData(json);
      setLoading(false);

      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
