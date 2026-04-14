import { createBrowserRouter } from "react-router";
import DetailsPage from "../components/DetailsPage/DetailsPage";
import HomePage from "../components/HomePage/HomePage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Root from "../components/Root/Root";
import StatisticsPage from "../components/StatisticsPage/StatisticsPage";
import Timeline from "../components/Timeline/Timeline";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                'index': true,
                'Component': HomePage
            },
            {
                path: '/friends/:friendId',
                element: <DetailsPage />,
                loader: async () => {
                    const res = await fetch('/friends.json');
                    return res.json();
                }
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

