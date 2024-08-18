import '../src/content.css'

export default function Header() {
    return (
        <header id="header" className='point'>
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