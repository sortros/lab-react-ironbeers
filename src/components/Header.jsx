import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to='/'>
                <span>
                   <i style={{color: "white"}}></i>
                </span>
            </Link>
        </header>
    )
}

export default Header