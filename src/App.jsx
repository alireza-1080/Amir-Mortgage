import './App.css'
import React, { useEffect } from 'react'
import routes from './routes'
import { useNavigate, useRoutes } from 'react-router-dom'

function App() {

  let projectRoutes = useRoutes(routes);
  let navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <div className='app'>
      {projectRoutes}
    </div>
  )
}

export default App