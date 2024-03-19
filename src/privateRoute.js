import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const {isAuth} = useSelector((state) => state.users)
    // const isAuth = true;

    if (!isAuth) {
        return <Navigate to='/sign-in' />
    }

    return children
}


export default PrivateRoute