import { useState, useEffect, useReducer, useCallback } from "react";
export const usePhotos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, nextPage] = useReducer((value) => value + 1, 1);

  const getPhotos = useCallback((currentPage) => {
    fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=15`)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, []);

  useEffect(() => {
    getPhotos(currentPage);
  }, [currentPage]);

  return {
    data,
    loading,
    nextPage,
  };
};
