import React from 'react';
import "./styles.css";
import {add,sub,multiply,division} from "./Cal"

const custom={color:"Red",border:"1px solid blue"};
export default function Heading() {
  return (
    <div>
      <h1 className='heading'>Hello CodeSandbox</h1>
      <h2 style={custom}>Start editing to see some magic happen!</h2>
      <p className='paragraph'>The universe is a vast and awe-inspiring expanse that encompasses everything we know and beyond. It is a collection of galaxies, stars, planets, and countless celestial bodies, stretching across unimaginable distances. Originating approximately 13.8 billion years ago with the Big Bang, the universe has been expanding ever since, with galaxies moving away from one another. Within this boundless space, there are phenomena both familiar and mysterious, from the gravity that governs planetary orbits to the enigmatic dark matter and dark energy that influence the cosmos at a scale beyond our understanding. The universe is not only a physical entity but also a realm of endless discovery, inviting scientists and philosophers alike to ponder its origins, its structure, and its ultimate fate. As we look to the stars, we are reminded of our small place in an ever-evolving cosmos, constantly learning more about the vastness that surrounds us.</p>
    <ul>
        <li>{add(5,6)}</li>
        <li>{sub(23,6)}</li>
        <li>{multiply(12,6)}</li>
        <li>{division(51,6)}</li>
    </ul>
    </div>
  );
}