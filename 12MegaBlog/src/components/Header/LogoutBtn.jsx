import React from 'react'
import { useDispatch } from 'react-redux'
import AuthService from '../../appwrite/Config'
import { logout } from '../../Store/AuthSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        AuthService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default LogoutBtn