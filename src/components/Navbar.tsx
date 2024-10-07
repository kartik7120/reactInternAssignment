import "./navbar.css"
import SampleLogo from "../assets/sample_logo.svg"

export default function Navbar() {
    return (
        <div className='nav_container'>
            <div>
                <img src={SampleLogo} alt="logo" className="logo_image" />
            </div>
            <div className='nav_options'>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/community">Community</a>
                <a href="/support">Support</a>
            </div>
            <div className="nav_btn_container">
                <button className='login_btn'>Login</button>
                <button className='register'>Register</button>
            </div>
        </div>
    )
}
