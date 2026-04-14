import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Timeline from './components/Timeline/Timeline.jsx';
import Stats from './components/Stats/Stats.jsx';
import Notfound from './components/NotFound/NotFound.jsx';

const route = createBrowserRouter([
  {
      path: '/',
      Component: Root,
      children: [
        {
          'index': true,
          'Component': Home
        },
        {
          'path': 'timeline',
          'Component': Timeline
        },
        {
          'path': 'stats',
          'Component': Stats
        },
        {
          'path': '*',
          'Component': Notfound
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
