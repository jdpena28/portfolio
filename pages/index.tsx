import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Sections/Home'

const App: React.FC = () => {
  return (
    <div className = "font-primary text-gray-200 bg-gray-900">
        <Navbar/>
        <Home/>
    </div>
  )

}

export default App
