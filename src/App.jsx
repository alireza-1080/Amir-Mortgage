import './App.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setScrollBarWidth } from './redux/scrollBarWidthSlicer'
import Header from './components/Header/Header'

function App() {

  const dispatch = useDispatch()
  const scrollBarWidth = useSelector(state => state.scrollBarWidth.scrollBarWidth)

  useEffect(() => {
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollBarWidth}px`)
  }, [scrollBarWidth])

  const windowResizeHandler = () => {
    dispatch(setScrollBarWidth(window.innerWidth - document.documentElement.clientWidth))
  }
  
  window.addEventListener('resize', windowResizeHandler)
  window.addEventListener('load', windowResizeHandler)


  return (
    <div className='app'>
      <Header />
    </div>
  )
}

export default App