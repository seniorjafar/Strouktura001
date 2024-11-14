import React from 'react'
import { Header } from '../../Layout/header'
import { Footer } from '../../Layout/footer'
import { Outlet } from 'react-router-dom'
   export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}


