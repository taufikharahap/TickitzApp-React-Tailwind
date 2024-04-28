import { createBrowserRouter } from 'react-router-dom'
import {PrivateRouteUser, PrivateRouteAdmin} from "./privateRoute"
import Home from './pages/home'
import MovieList from './pages/movie-list'
import MovieDetail from './pages/movie-detail';
import PageNotFound from './pages/page-not-found';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import AdminDashboard from './pages/admin-dashboard';
import AdminMovie from './pages/admin-movie';
import Profile from './pages/profile';
import EditMovie from './pages/edit-movie';
import AddMovie from './pages/add-movie';

export default createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movies',
        element: <MovieList />
    },
    {
        path: '/movie/:id',
        element: <MovieDetail />
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/profile',
        element: (
            <PrivateRouteUser>
                <Profile />
            </PrivateRouteUser>
        )
    }, 
    {
        path: '/admin/dashboard',
        element: (
            <PrivateRouteAdmin>
                <AdminDashboard />
            </PrivateRouteAdmin>
        )
    },
    {
        path: '/admin/movie',
        element: (
            <PrivateRouteAdmin>
                <AdminMovie />
            </PrivateRouteAdmin>
        ) 
    },
    {
        path: '/admin/movie/edit/:id',
        element : (
            <PrivateRouteAdmin>
                <EditMovie/>
            </PrivateRouteAdmin>
        ) 
    },
    {
        path: '/admin/movie/add',
        element : (
            <PrivateRouteAdmin>
                <AddMovie/>
            </PrivateRouteAdmin>
        )

    },
    {
        path: '*',
        element: <PageNotFound />
    }
])