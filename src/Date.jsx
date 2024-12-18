import React from 'react';
import "./styles.css";
let name;
let nyear;
let year;

name = "Rahul";              // Assign "Rahul" to name
nyear = new Date();          // Get the current date and time
year = nyear.getFullYear();  // Get the current year
console.log(year);           // Output the current year, e.g., 2024

// document.getElementById("year").textContent = dateelements;


export default function Date() {
  return (
    <div className="Date">
      <footer>
      <h5> create by {name} </h5>
      <h6> copyright {year} </h6>
      </footer>
    </div>
  );
}
