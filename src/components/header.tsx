import React from 'react'

const Header = () => {
  return (
    <div>
          <h1>Hello Jaseel</h1>
          <h2>{import.meta.env.VITE_API_URL}</h2>
    </div>
  )
}

export default Header
