// import axios from "axios";
// import { useEffect, useState } from "react";

// const useToken = (user) => {
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     const getToken = async () => {
//       const email = user?.email;
      
//       if (email) {
//         const { data } = await axios.post("https://rocky-caverns-33077.herokuapp.com/signin", {
//           email,
//         });
//         setToken(data.getToken);
//         localStorage.setItem("token", data.getToken);
//       }
//     };
//     getToken();
//   }, [user]);
//   return [token];
// };

// export default useToken;