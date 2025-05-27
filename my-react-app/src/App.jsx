import { BrowserRouter as Router, Route, Routes,  Navigate } from "react-router";
import Contact from "./assets/Pages/Contact";
import Layout from './assets/components/Layout.jsx';
import Home from './assets/Pages/Home.jsx';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<h2>About Page</h2>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>  
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
