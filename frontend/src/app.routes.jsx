import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './feature/auth/pages/Login'
import Register from './feature/auth/pages/Register'
import Protected from './feature/auth/components/Protected'
import Layout from './layouts/Layout'
import Settings from './feature/settingsfeature/pages/Settings'
import Profile from './feature/profile/pages/Profile'
import Feed from './feature/feed/pages/Feed'
import { FeedProvider } from './feature/feed/feed.context'

export const router = createBrowserRouter([
    {
        element: <Protected />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <FeedProvider>
                            <Feed />
                        </FeedProvider>
                    },
                    {
                        path: "/profile",
                        element: <Profile />
                    },
                    {
                        path: "/settings",
                        element: <Settings />
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])