import { RouterProvider } from 'react-router'
import { Approuter } from './app.router'

export const TesloShopApp = () => {
    return (
        <RouterProvider router={Approuter} />
    )
}