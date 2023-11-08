import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="bg-gray-800 text-white py-4 px-8 flex justify-end items-center fixed top-0 w-[100%] z-10">
            <Link to='/studentDashboard' className="text-white hover:text-gray-300 mr-4">Dashboard</Link>
            <Link to='/' className="text-white hover:text-gray-300">Course List</Link>
        </div>

    )
}

export default NavBar
