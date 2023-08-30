import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Page/Layout'
import { HomePage } from '../Page/HomePage'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
        ]
    }

])