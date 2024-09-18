import './App.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setClientWidth } from './redux/clientWidthSlicer'
import Header from './components/Header/Header'
import HomePageServices from './components/HomePageServices/HomePageServices'

function App() {

  const dispatch = useDispatch()
  const clientWidth = useSelector(state => state.clientWidth.clientWidth)

  useEffect(() => {
    document.documentElement.style.setProperty("--client-width", `${clientWidth}px`)
  }, [clientWidth])

  const windowResizeHandler = () => {
    dispatch(setClientWidth(document.documentElement.clientWidth))
  }
  
  window.addEventListener('resize', windowResizeHandler)
  window.addEventListener('load', windowResizeHandler)


  return (
    <div className='app'>
      <Header />
      <HomePageServices />
    </div>
  )
}

export default App