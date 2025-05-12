import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from "react-router";
import Layout from './assets/components/Layout.jsx';
import Home from './assets/Pages/Home.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<h2>About Page</h2>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>  
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
