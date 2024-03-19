import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/user-layout';
import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';
import ContactPage from '../pages/contact-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
]);

const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default AppRouterProvider;
