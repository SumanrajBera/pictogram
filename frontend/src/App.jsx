import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './app.routes'
import { AuthProvider } from './feature/auth/auth.context'
import "./feature/shared/global.scss"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  )
}

export default App