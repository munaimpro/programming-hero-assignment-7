import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/Root/Root.jsx';
import Timeline from './components/Timeline/Timeline.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import StatisticsPage from './components/StatisticsPage/StatisticsPage.jsx';
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';

const route = createBrowserRouter([
  {
      path: '/',
      Component: Root,
      children: [
        {
          'index': true,
          'Component': HomePage
        },
        {
          'path': '/friends/:friendId',
          'Component': DetailsPage
        },
        {
          'path': 'timeline',
          'Component': Timeline
        },
        {
          'path': 'stats',
          'Component': StatisticsPage
        },
        {
          'path': '*',
          'Component': NotFoundPage
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
