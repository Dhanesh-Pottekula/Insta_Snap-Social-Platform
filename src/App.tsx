import React from 'react'
import { Routes,Route } from 'react-router-dom'
import "./globals.css"


function App() {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/*public routes*/}
            <Route path='/Sign-in' element={<SignInForm/>}/>
            <Route path='/Login' element={<Login/>}/>

            {/* private routes */}
            <Route path='/Home' element={<Home/>}/>
        </Routes>
    </main>
  )
}

export default App