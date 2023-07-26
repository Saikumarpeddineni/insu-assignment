import './styles.css'
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {TiLocation} from "react-icons/ti"

const About=()=>{
    const style = { color: "white", fontSize: "7em" }
    const style1 = { color: "white", fontSize: "2em" }

    return(
        <div className="about-section">
            <div className='payments-section'>
                <h2>About Webingo Infotech Solutions LLP</h2>
                <p>End-to-End IT Solutions and business consultation provider.</p>
                <button>Pay us online &gt;</button>
                <p>We Accept:</p>
                <div className='payment-methods'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png" alt="pay" />
                    <img src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png" alt="visa"/>
                    <img src="https://e7.pngegg.com/pngimages/971/712/png-clipart-visa-electron-debit-card-credit-card-mastercard-mastercard-blue-text.png" alt="visa"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="visa"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" alt="visa"/>
                    <img src="https://nuvei.com/wp-content/uploads/2021/06/phonepe.png" alt="visa"/>
                    <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg" alt="visa"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="visa"/>
                </div>
            </div>
            <div className='contact-us'>
                <h2>Contact Us</h2>
                <div className='individual'>
                    <MdEmail style={style1}/>
                    <div className='details more'>
                        <h3>Email</h3>
                        <p>info@webingo.in</p>
                    </div>
                </div>
                <div className='individual more1'>
                    <BsFillTelephoneFill style={style1}/>
                    <div className='details'>
                        <h3>Phone</h3>
                        <p>(+91) 8001-81-1234</p>
                    </div>
                </div>
                <div className='individual more-1'>
                    <TiLocation style = { style }/>
                    <div className='details'>
                        <h3>Address</h3>
                        <p>7th Floor, Monibhandar Building Webel Bhavan Premises, Sector V, Ring Rd, Bidhannagar, West Bengal 700091</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Quick Link</h2>
                <ul>
                    <li>Seo</li>
                    <li>Logo Design</li>
                    <li>Graphic Design</li>
                    <li>App Development</li>
                    <li>Bulk Sms</li>
                    <li>Content Writing</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <h2>Company</h2>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Our Achievemnts</li>
                    <li>Payment Policy</li>
                    <li>Privacy Policy</li>
                    <li>terms and Conditions</li>
                    <li>License & Copyright </li>
                    <li>Refund Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default About