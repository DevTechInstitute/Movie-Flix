import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <Navbar/>
            </nav>

            <main className='main_container'>
                { children }
            </main>

            <footer>

            </footer>
        
        </>

    )
}
