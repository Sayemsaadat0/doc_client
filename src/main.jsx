import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes.jsx'
import 'react-day-picker/dist/style.css';
import AuthProvider from './AuthContext/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
