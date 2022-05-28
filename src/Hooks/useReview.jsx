import React, { useEffect, useState } from 'react';

const useReview = () => {
  const [review, setReview] = useState([]);

    useEffect(() => {
        const url =`https://glacial-cove-96112.herokuapp.com/reviews`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setReview(data));
      }, []);
    return [review, setReview]
};

export default useReview;