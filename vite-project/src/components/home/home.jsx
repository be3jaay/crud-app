import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { doSignOut } from '../../firebase/auth'
const Home = () => {
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        
        <div className="sidebar h-screen w-80 ">
            <ul className='flex flex-col justify-center align-center py-3 px-3 text-white text-xl'>
                <li>Dashboard</li>
                <li>Generate Report</li>
                <li>About</li>
                {
                    userLoggedIn
                    ?
                   
                    <>
                    <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                </>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                        
                    </>
                }
                
            </ul>
        </div>
        
    )
}

export default Home