// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
// import { useNavigate } from "react-router-dom"; 

// function Subtotal() {
//   const navigate = useNavigate(); 
//   const [{ basket }, dispatch] = useStateValue();

//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               {0}
//               Subtotal ({basket.length} items): <strong>0</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={0} 
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />

//       <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
//     </div>
//   );
// }

// export default Subtotal