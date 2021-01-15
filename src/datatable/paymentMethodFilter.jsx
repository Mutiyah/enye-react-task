import React from 'react';
import '../App.css';


const Pagination = (props1) => {
    console.log("props ", props1);
    const paymentMethodOptions = ["money order", "paypal", "check", "cc"];
return (
  <div id="drop">
    <div className="dropdown">
    <button className="dropbtn2">Filter Payment Method</button>
    <div className="dropdown-content">
  {
          paymentMethodOptions.map((col, index) => (
         <div key={index} className="dropdownOptions">
          <button type="text" placeholder="Search by payment method" key={index} onClick={() => props1.onColSearchUpdate2(col) } value={col} >{col}</button>
          </div>
          )
          )
    }
  </div>
</div>
</div>
)
 }
export default Pagination