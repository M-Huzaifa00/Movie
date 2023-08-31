import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Page/Layout'
import { HomePage } from '../Page/HomePage'
import { DetailPage } from '../Page/DetailPage'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'details/:id', element: <DetailPage /> }
        ]
    }

])