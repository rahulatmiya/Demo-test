import React from 'react';
import "./styles.css";
const name = "Rahul";              // Assign "Rahul" to name

const DateComponent = () => {
    const currentDate = new Date();  // Create the Date object
    const year = currentDate.getFullYear();  // Get the full year
  
    return (
        <div className="Date">
          <footer>
          <h5> create by {name} </h5>
          <h6> copyright {year} </h6>
          </footer>
        </div>
      );
  };

export default DateComponent ;

