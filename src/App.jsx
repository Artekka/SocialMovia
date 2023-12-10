import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Login from './components/Login'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<p>Main page text goes here hehehe</p>}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Router>
      </div>
  )
}

export default App