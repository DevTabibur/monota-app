import React from 'react';
import './PurchaseForm.css';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { Col } from 'react-bootstrap';

const PurchaseForm = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    const handleCompletePurchase = (e) =>{
        e.preventDefault();
    }
  return (
    <>
     {/* onSubmit={handleSubmit(handleSubmitParam)} */}
      <Col>
          <div className="purchase-form">
              <form onSubmit={handleCompletePurchase}>
                  <label htmlFor="name">Name: </label>
                  <input type="text" value={user?.displayName} readOnly />
                  <br />
                  <label htmlFor="email">E-mail: </label>
                  <input type="email" value={user?.email} readOnly/> <br />
                  <label htmlFor="address">Address:</label>
                  <input type="text" placeholder='Address' required /> <br />
                  <label htmlFor="number">Phone Number: </label>
                  <input type="number" placeholder='Phone Number' /> <br />
                  <input type="submit" value="COMPLETE PURCHASE" />
              </form>
          </div>
      </Col>
    </>
  )
}

export default PurchaseForm