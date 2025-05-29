import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router";
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/Pages/Home';
import Contact from './assets/Pages/Contact';
import Styles from './assets/css/Pages.module.css';

function App() {
  return (
    <Router>
      <div className={Styles.app}>
        <Header />
        <main className={Styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* Autres routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
