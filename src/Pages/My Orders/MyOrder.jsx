import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import ShowAddedItems from '../ShowAddedItems/ShowAddedItems';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';
import './MyOrder';

const MyOrder = () => {
  const [user, loading3] = useAuthState(auth);
  const [signInWithEmailAndPassword, user1, loading, hookError] =
  useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, loading2, googleError] =
  useSignInWithGoogle(auth);

  // spinnerloader
  let loader ;
   if(loading || loading2){
    loader = <SpinnerLoader/>;
   }

  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      fetch(`https://glacial-cove-96112.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const matched = orders.filter((e) => e._id !== id);
            setOrders(matched);
          } else {
            alert("nothing");
          }
        });
    }
  };

  const getItems = async () => {
    const email = user?.email
    const url = `https://glacial-cove-96112.herokuapp.com/orders/${email}`
    console.log(url);
    try {
        const { data } = await axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(data, "data");
        setOrders(data);

    } catch (error) {
        // console.log(error);
        if (error.response.status === 403 || error.response.status === 401) {
            signOut(auth)
            navigate('/login')
        }
        // alert(error.message)
    }
}
getItems()

  
  return (
    <>
      <Container className="py-5">
        <div className="section-title mb-4">
          <h2>Your Added Items</h2>
          <p className="mb-0">here you can find your own item.</p>
        </div>
        <Row>
          {orders.map((item) => (
            <ShowAddedItems
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default MyOrder