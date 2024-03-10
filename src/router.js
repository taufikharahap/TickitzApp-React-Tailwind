import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import MovieList from './pages/movie-list'
import MovieDetail from './pages/movie-detail';
import PageNotFound from './pages/page-not-found';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

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
        path: '*',
        element: <PageNotFound />
    }
])