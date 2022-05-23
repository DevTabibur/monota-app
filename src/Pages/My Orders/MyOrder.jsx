import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import ShowAddedItems from '../ShowAddedItems/ShowAddedItems';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';
import './MyOrder';

const MyOrder = () => {
  const [user] = useAuthState(auth);
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
  const [items, setItems] = useState([]);
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      fetch(`http://localhost:5000/parts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const matched = items.filter((e) => e._id !== id);
            setItems(matched);
          } else {
            alert("nothing");
          }
        });
    }
  };

  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://rocky-caverns-33077.herokuapp.com/singleItem?email=${email}`;
      
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setItems(data);
      } catch (error) {

        if (error.response.status === 403 || error.response.status === 401) {
          // signOut(auth);
          // navigate("/signin");
        }
        toast.error(error.message, { toastId: "abc" });
      }
    };
    getItems();
  }, [user]);

  
  return (
    <>
      {/* {items.length ? (
        <Container className="py-5">
        <div className="section-title mb-4">
          <h2>Your Added Items</h2>
          <p className="mb-0">here you can find your own item.</p>
        </div>
        <Row>
          {items.map((item) => (
            <ShowAddedItems
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </Row>
      </Container>
      ) : (<SpinnerLoader/>)} */}

      <Container className="py-5">
        <div className="section-title mb-4">
          <h2>Your Added Items</h2>
          <p className="mb-0">here you can find your own item.</p>
        </div>
        <Row>
          {items.map((item) => (
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