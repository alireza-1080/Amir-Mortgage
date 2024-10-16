import './App.css'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import { useDispatch, useSelector } from 'react-redux'
import { setIsBurgerOpen } from './redux/navigationSlicer'

function App() {

  const navigate = useNavigate()
  const route = useSelector(state => state.routing.route)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(setIsBurgerOpen(false))
    if (route.toLowerCase() === "home") {
      navigate("/")
    } else if (route.toLowerCase() === "about") {
      navigate("/about")
    } else {
      navigate("/")
    }
  }, [route])

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App