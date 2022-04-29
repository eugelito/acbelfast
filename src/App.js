import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Squads from "./components/Squads";
import Fixtures from "./components/fixtures/Fixtures";
import Results from "./components/results/Results";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./ScrollToTop";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/squads" element={<Squads />}></Route>
            <Route path="/fixtures" element={<Fixtures />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </div>
      <Footer />
      {/* <MessengerCustomerChat
        pageId="101276042354044"
        appId="1878284095675307"
        htmlRef=""
      /> */}
    </Router>
  );
}

export default App;
