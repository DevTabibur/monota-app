import React, { useEffect, useState } from "react";


const useToken = (user, userName) => {
  // console.log(user,'555');
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const displayName = (await userName) || user?.displayName;
      // console.log(userName);
      const email = user?.email;

      const currentUser = {
        email: email,
        displayName: displayName,
        photoURL: user?.photoURL,
      };


      if (email) {
        fetch(`https://glacial-cove-96112.herokuapp.com/users/${email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            setToken(data.getToken);
            localStorage.setItem("token", data.getToken);
          });
        // console.log(data.getToken);
        // setToken(data.getToken);
        // localStorage.setItem('token', data.getToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
