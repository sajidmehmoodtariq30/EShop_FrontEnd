import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import ProfilePage from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<UserLayout />}>
         <Route index element={ <Home />} />
         <Route path='/login' element= { <LoginPage /> } />
         <Route path='/register' element= { <Register /> } />
         <Route path='/profile' element= { <ProfilePage /> } />
        </Route>
        <Route> {/* Admin route */} </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App