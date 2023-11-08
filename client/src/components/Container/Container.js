import './Container.css'
import './../../tailwindcss.css';

import React from 'react'

const Container = ({children}) => {
  return (
    <div className="container mx-auto">
        {children}
    </div>
  )
}

export default Container