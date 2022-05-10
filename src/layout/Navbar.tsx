export function Navbar() {
    return (
        <nav className="navbar">
            <img src="../../assets/logo.svg" alt="" className="logo"></img>
        
            <div className="desktop-nav">

                <ul className="navbar-list">
                    <li className="navbar-list-item">Product</li>
                    <li className="navbar-list-item">Company</li>
                    <li className="navbar-list-item">Connect</li>
                </ul>
            
                <div className="button-wrapper">
                    <button className="login">Login</button>
                    <button className="sign-up">Sign Up</button>
                </div>

            </div>
        
        
            <div className="hamburger-menu">
                <div className="hamburger-menu"></div>
            </div>
        
        </nav>
    )
}