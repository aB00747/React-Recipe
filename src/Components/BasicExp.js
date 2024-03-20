import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Map from "./ExampleComp/Map";
// import About from "./ExampleComp/About";
// import Contact from "./ExampleComp/Contact";

export default function BasicExp() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link className="Link-style" to="/Map">Map</Link>
            </li>
            <li>
              <Link className="Link-style" to="/about">About</Link>
            </li>
            <li>
              <Link className="Link-style" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}
