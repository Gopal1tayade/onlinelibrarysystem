import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addbooks } from "../Redux/bookReducer.js";

const UseEffect = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  useEffect(() => {
 
    if (!books || books.length === 0) {
      const fetchbooks = async () => {
        try {
          const response = await fetch("https://www.freetestapi.com/api/v1/books");
          if (!response.ok) throw new Error("Failed to fetch books");
          const data = await response.json();
          dispatch(addbooks(data));
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchbooks();
    } else {
    
      setLoading(false);
    }
  }, [dispatch]); 

  return { error, loading };
};

export default UseEffect;
