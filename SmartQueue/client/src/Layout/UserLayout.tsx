import React from 'react'
import Navbar from '../components/Navbar'
import type {UserLayout} from '../types/UserLayoutType'


const MainLayout: React.FC<UserLayout> = ({ children }) => {
  return (
    <div>
        <Navbar/>
      {children}
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        &copy; 2026 SmartQueue. All rights reserved. Author : Md Soyab
      </footer>

    </div>
  )
}

export default MainLayout
