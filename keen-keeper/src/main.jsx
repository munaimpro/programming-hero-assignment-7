import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { route } from './Router/Router'
import { RouterProvider } from 'react-router'
import TimelineProvider from './context/TimelineProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={route}></RouterProvider>
    </TimelineProvider>
  </StrictMode>,
)
