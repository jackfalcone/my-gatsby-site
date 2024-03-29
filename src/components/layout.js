import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="m-auto max-w-lg font-sans">
            <nav className="mt-2">
                <ul className="flex list-none pl-0">
                    <li className="pr-2"><Link to="/">Home</Link></li>
                    <li className="pr-2"><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main className="mt-2">
                <h1 className="text-3xl font-bold text-violet-500">{pageTitle}</h1>
                <div className="mt-3">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout