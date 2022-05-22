import React, { useEffect, useState } from 'react';

const useReview = () => {
  const [review, setReview] = useState([]);

    useEffect(() => {
        const url =`http://localhost:5000/reviews`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setReview(data));
      }, []);
    return [review, setReview]
};

export default useReview;