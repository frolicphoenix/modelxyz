import './header.css';

import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header id="header" className='show'>
            <nav>
                <a className="modelxyzlogo" href="/">Model<span>x</span><span>y</span><span>z</span></a>
                <ul className="navbar">
                    <li className="navbar-item">
                        <NavLink to="/viewer">Upload a model</NavLink>
                    </li>
                    <li className="navbar-item">
                        <a href="/">Gallery</a>
                    </li>
                </ul>
            </nav>            
        </header>
    );
}