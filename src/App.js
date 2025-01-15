import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Corporate from "./pages/CorporatePage";

function App() {
  return (
    <div className="home-container">
      <Header />
 
      <Routes>
        <Route   path="/" element={<Home />} />
        <Route   path="/services" element={<Services/>} />
        <Route   path="/contact" element={<ContactUs/>} />
        <Route   path="/corporate" element={<Corporate/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
