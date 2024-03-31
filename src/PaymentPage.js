import React, { useState } from 'react';

function PaymentPage() {
  // State to store input values
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  // Dummy submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page

    // Here you would typically integrate with a payment processor
    console.log('Payment Info:', { cardNumber, expiryDate, cvv, nameOnCard });
    alert('Payment processing is not implemented in this demo.');
  };

  return (
    <div className="paymentPage">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card Number"
            maxLength="16"
            required
          />
        </div>
        <div className="formGroup">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>
        <div className="formGroup">
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            maxLength="3"
            required
          />
        </div>
        <div className="formGroup">
          <label>Name on Card</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="Name as it appears on your card"
            required
          />
        </div>
        <button type="submit" className="submitBtn">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;