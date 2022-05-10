import { Navbar } from './Navbar'

export function Header() {
    return (
            <header className="header">
        
                <div className="header-wrapper">
                    <Navbar />
                    <div className="title-paragraph">
                        <h1 className="header-title">A modern publishing platform</h1>
                        <p className="header-paragraph">Grow your audience and build your online brand</p>
                    </div>
            
                    <div className="call-to-action">
                        <button className="start-for-free">Start for free</button>
                        <button className="learn-more">Learn more</button>
                    </div>
        
                </div>

            </header>
        )
        
    }