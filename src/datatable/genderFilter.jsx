import React from 'react';
import '../App.css';


const Pagination = (props) => {
    console.log("props ", props);
    const genderOptions = ["Male", "Female", "Prefer to skip" ];

return (
  <div id="drop">
  <div className="dropdown">
  <button className="dropbtn">Filter by gender</button>
  <div className="dropdown-content">
  {
      
          genderOptions.map((col, index) => (
          <div key={index} className="dropdownOptions">
          <button type="text" placeholder="Search by gender" key={index} onClick={() => props.onColSearchUpdate(col) } value={col} >{col}</button>
          </div>
          )
          )
      }
  

  {/* <div className="dropdownOptions"><button type="text" placeholder="Search by gender" value={genderOptions[1]} >{genderOptions[1]}</button></div>
  <div className="dropdownOptions"><button type="text" placeholder="Search by gender" value={genderOptions[2]} >{genderOptions[2]}</button></div> */}

  </div>
</div>
</div>
)

        }
        export default Pagination