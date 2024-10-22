import './App.css'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ResourcesPage from "./pages/ResourcesPage"
import BlogPage from "./pages/BlogPage"
import { useDispatch, useSelector } from 'react-redux'
import { setIsBurgerOpen } from './redux/navigationSlicer'
import HomeRefinancePage from './pages/HomeRefinancePage'
import HomePurchasePage from './pages/HomePurchasePage'
import VeteranLoansPage from './pages/VeteranLoansPage'
import HlocPage from './pages/HlocPage'

function App() {

  const navigate = useNavigate()
  const route = useSelector(state => state.routing.route)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(setIsBurgerOpen(false))
    window.scrollTo(0, 0)
    if (route === "Home") {
      navigate("/")
    } else if (route === "About") {
      navigate("/about")
    } else if (route === "Resources") {
      navigate("/resources")
    } else if (route === "Blog") {
      navigate("/blog")
    } else if (route === "Home Refinance") {
      navigate('/home-refinance')
    } else if (route === "Home Purchase") {
      navigate('/home-purchase')
    } else if (route === "Veteran Loans") {
      navigate('/veteran-loans')
    } else if (route === "Heloc") {
      navigate('/hloc')
    } else {
      navigate("/")
    }
  }, [route])

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/home-refinance' element={<HomeRefinancePage />} />
        <Route path='/home-purchase' element={<HomePurchasePage />} />
        <Route path='/veteran-loans' element={<VeteranLoansPage />} />
        <Route path='/hloc' element={<HlocPage />} />
      </Routes>
    </div>
  )
}

export default App