import * as React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import "../styles/menu.css"
import Footer from './footer'

const Layout = ({ children }) => {

    return (
        <div className="m-auto mx-auto font-san mb-12" id="outer-container">
            <Menu right>
                <ul className="flex list-none pl-0">
                    <li className="pr-2 font-pacifico text-4xl mb-8"><Link to="/">Home</Link></li>
                    <li className="pr-2 font-pacifico text-4xl mb-8"><Link to="/about">Aktuelle Anlässe</Link></li>
                    <li className="pr-2 font-pacifico text-4xl mb-8"><Link to="/about">Reservation</Link></li>
                    <li className="pr-2 font-pacifico text-4xl mb-8"><Link to="/about">Kontakt</Link></li>
                    <li className="pr-2 font-pacifico text-4xl mb-8"><Link to="/about">Speisekarten</Link></li>
                    <li className="pr-2 font-pacifico text-4xl mb-8 "><Link to="/about">Über uns</Link></li>
                </ul>
            </Menu>
            <main className="max-w-2xl mx-auto mb-12">
                <h1 className="pt-6 text-6xl text-yellow-500 font-pacifico">
                    Gasthof Rosegg
                </h1>
                <div className="mt-12">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout

