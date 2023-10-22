import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import ContactHeader from "./Components/ContactSection/ContactHeader";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <Contact />
      </main>
    </div>
  );
};

export default App;
