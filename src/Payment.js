import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import '..css/Payment.css';
// import CheckOutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
// import axios from '../components/axios';
import { db } from './firebase';
import { PriceCheck } from '@mui/icons-material';
// import { SettingsPowerRounded } from '@mui/icons-material';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?totals=${Math.round(
          getBasketTotal(basket) * 100
        )}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log('The secret is >>>>', clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .cofirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });
        history.replace('/orders');
      });
  };

  const handleChange = (event) => {
    //Listen for changes in the CardElement and display any errors as the customer types in his or her card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };
  return;
  <div className="payment">
    <div className="payment__container">
      <h1>Checkout {<Link to="/checkout">{basket.length} items</Link>}</h1>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <p>{user?.email}</p>
        <p>123 Street</p>
        <p>Kansas city, KA</p>
      </div>
    </div>

    <div className="payment__section">
      <div className="payment__title">
        <h3>Review items and Delivery Address</h3>
      </div>
      <div className="payment__items">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  </div>;
}

db.collection('users');
export default Payment;
