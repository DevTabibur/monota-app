import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../SpinnerLoader/SpinnerLoader';
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe('pk_test_51L4JVuA39z7TXqPSg5UDBbSy1LBrOiJpXPYtM1YLg9fScUUnADN0zFqetXNg7HGkgO0go5P0CcXWw0SgZg5Hkps500SD41aRrD');

const Payment = () => {
    const { id } = useParams()
    const url = `https://glacial-cove-96112.herokuapp.com/payment/${id}`
    const { data: myOrder, refetch, isLoading } = useQuery(['myOrder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-amber-700 font-bold text-4xl sp-style">Hey, {myOrder?.userName
                    }</p>
                    <h2 className="sp-style text-2xl ">
                        Please Pay for purchasing :- <span className="text-blue-700"> {myOrder.productName}</span>
                    </h2>

                    <p className="text-xl sp-style font-bold">Please pay First: ${myOrder.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <PaymentForm myOrder={myOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;