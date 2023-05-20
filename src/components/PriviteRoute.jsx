import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

function PriviteRoute() {

const { loggedIn, checkingStatus } = useAuthStatus()

if (checkingStatus) {
    return <Spinner />
}
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PriviteRoute
