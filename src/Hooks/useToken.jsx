import React, { useEffect, useState } from 'react';
const useToken = user => {
    // console.log(user,'555');
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {

            const email = user?.email
            const currentUser = { email: email, role: "user" }
            // console.log(user?.email);
            if (email) {
                fetch(`http://localhost:5000/users/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        setToken(data.getToken);
                        localStorage.setItem('token', data.getToken);
                        console.log('token', data);
                    })
                // console.log(data.getToken);
                // setToken(data.getToken);
                // localStorage.setItem('token', data.getToken);

            }

        }
        getToken()
    }, [user])
    return [token]
};

export default useToken;