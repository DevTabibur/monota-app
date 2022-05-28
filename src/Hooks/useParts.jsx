import React, { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    const url = `https://glacial-cove-96112.herokuapp.com/parts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setParts(data);
      });
  }, []);
  return [parts, setParts];
};

export default useParts;
