import '../Components/css/header.css'

export default function Header() {
    return (
        <header id="header">
            <nav>
                <a className="modelxyzlogo" href="/">model<span>x</span><span>y</span><span>z</span></a>
                <ul className="navbar">
                    <li className="navbar-item"><a href="/">Upload a model</a></li>
                    <li className="navbar-item"><a href="/">Gallery</a></li>
                </ul>
            </nav>            
        </header>
    );
}