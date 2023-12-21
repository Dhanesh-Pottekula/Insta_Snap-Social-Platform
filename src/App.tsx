import React from 'react'
import { Routes,Route } from 'react-router-dom'
import "./globals.css"
import SIgnINForm from './_auth/forms/SIgnINForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import SIgnupForm from './_auth/forms/SIgnupForm'
import RootLayout from './_root/RootLayout'


function App() {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/*public routes*/}
            <Route element={<AuthLayout/>}>
              <Route path='/Sign-in' element={<SIgnINForm/>}/>
              <Route path='/Sign-up' element={<SIgnupForm/>}/>
            </Route>
            

            {/* private routes */}
            <Route element={<RootLayout/>}>
                <Route index element={<Home/>}/>

            </Route>
        </Routes>
    </main>
  )
}

export default App