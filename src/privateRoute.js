import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const PrivateRouteAdmin = ({ children }) => {
    const {isAuthAdmin} = useSelector((state) => state.users)
    // const isAuthAdmin = true;

    if (!isAuthAdmin) {
        return <Navigate to='/sign-in' />
    }

    return children
}

const PrivateRouteUser = ({ children }) => {
    const {isAuthUser} = useSelector((state) => state.users)
    // const isAuthUser = false;

    if (!isAuthUser) {
        return <Navigate to='/sign-in' />
    }

    return children
}


export {PrivateRouteAdmin, PrivateRouteUser}