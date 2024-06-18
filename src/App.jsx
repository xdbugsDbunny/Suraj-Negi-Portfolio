import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Components/Transition";
import "./index.css";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div>
              <Transition />
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/work"
          element={
            <motion.div>
              <Transition />
              <Work />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div>
              <Transition />
              <About />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div>
              <Transition />
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/testimonials"
          element={
            <motion.div>
              <Transition />
              <Testimonials />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div>
              <Transition />
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
