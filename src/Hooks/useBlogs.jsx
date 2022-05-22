import React, { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data', data);
        setBlogs(data);
      });
  }, []);
  return [blogs, setBlogs];
};

export default useBlogs;
