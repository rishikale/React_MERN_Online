// This will be the layout of your router application
// where you will create a project layout assigning the paths to your perticular components

// for landing page or the first page of our application the path will be "/"
// react router provides An error page path as "*"

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";

function MainLayout() {
    
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainLayout;
