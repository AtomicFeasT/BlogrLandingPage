export function Footer() {
    return (
        <footer className="footer">
        <img src="/logo.svg" alt="" className="footer-logo"></img>
            <ul className="footer-list">
                <p className="list-title">Product</p>
                <li className="list-item"><a href="#overview" className="list-link">Overview</a></li>
                <li className="list-item"><a href="#pricing" className="list-link">Pricing</a></li>
                <li className="list-item"><a href="#marketplace" className="list-link">Marketplace</a></li>
                <li className="list-item"><a href="#features" className="list-link">Features</a></li>
                <li className="list-item"><a href="#integrations" className="list-link">Integrations</a></li>
            </ul>
            <ul className="footer-list">
                <p className="list-title">Company</p>
                <li className="list-item"><a href="#about" className="list-link">About</a></li>
                <li className="list-item"><a href="#team" className="list-link">Team</a></li>
                <li className="list-item"><a href="#blog" className="list-link">Blog</a></li>
                <li className="list-item"><a href="#careers" className="list-link">Careers</a></li>
            </ul>
            <ul className="footer-list">
                <p className="list-title">Connect</p>
                <li className="list-item"><a href="#contact" className="list-link">Contact</a></li>
                <li className="list-item"><a href="#newsletter" className="list-link">Newsletter</a></li>
                <li className="list-item"><a href="#linkedin" className="list-link">Linkedin</a></li>
            </ul> 
    </footer>
    )
}