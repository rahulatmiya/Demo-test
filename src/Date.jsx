import React from 'react';
import "./styles.css";
const name = "Rahul";              // Assign "Rahul" to name

const DateComponent = () => {
    const currentDate = new Date(2024,1,12,19);  // Create the Date object
    const year = currentDate.getFullYear();  // Get the full year
    const hours=currentDate.getHours();
    let greeting = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";
    console.log(greeting)
    let custom;
  
    if (greeting=="Good Morning")
        {custom.style="Red";}
  else if (greeting=="Good Afternoon")
    {custom.style="Green";} 
  else 
  { custom.style="Blue";}


    return (    
        <div className="Date">
            <header>
<h3 style={custom}>{greeting}</h3>
            </header>
          <footer>
          <h5 className="foot"> create by {name} </h5>
          <h6 className="foot"> copyright {year} </h6>
          </footer>
        </div>
      );
  };

export default DateComponent ;

