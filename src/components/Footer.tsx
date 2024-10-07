import "./Footer.css";
import SampleLogoWhite from "../assets/white_logo.svg";
import LinkedIn from "../assets/linkedin.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="upper_footer_container">
                <div>
                    <img src={SampleLogoWhite} alt="logo" className="logo_image" />
                </div>
                <div className="options_container">
                    <div className='flex_col_container'>
                        <h4>Mobile app</h4>
                        <a href="/Features">Features</a>
                        <a href="/liveShare">Live share</a>
                        <a href="/videoRecord">Video record</a>
                    </div>
                    <div className='flex_col_container'>
                        <h4>Community</h4>
                        <a href="/featuredArtists">Featured artists</a>
                        <a href="/thePortal">The Portal</a>
                        <a href="/liveEvents">Live events</a>
                    </div>
                    <div className='flex_col_container'>
                        <h4>Company</h4>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/history">History</a>
                    </div>
                </div>
                <div>
                    <div className="footer_btn_container">
                        <button className='login_btn'>Login</button>
                        <button className='register'>Register</button>
                    </div>
                </div>
            </div>
            <div className="thin_divider"></div>
            <div className="lower_footer_container">
                <div>
                    <p>© Photo, Inc. 2019. We love our users!</p>
                </div>
                <div className="follow_container">
                    <p>Follow us:</p>
                    <div className="follow_container">
                        <a href="/facebook">
                            <img src={Facebook} alt="facebook" />
                        </a>
                        <a href="/twitter">
                            <img src={Twitter} alt="twitter" />
                        </a>
                        <a href="/linkedin">
                            <img src={LinkedIn} alt="linkedin" />
                        </a>
                        <a href="/instagram">
                            <img src={Instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
