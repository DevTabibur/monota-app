import React, { useEffect, useState } from 'react';

const useSingleParts = (id) => {
    const [singleParts, setSingleParts]  = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setSingleParts(data)
        })
    }, [])
  return [singleParts]
}

export default useSingleParts