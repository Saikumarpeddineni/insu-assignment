import './styles.css'
import {Component} from "react"
import { BsTelephoneFill} from "react-icons/bs";
import {BsTelephone} from "react-icons/bs"
import CardCarousel from '../CardCarousel';
import KeyExpertise from '../KeyExpertise';
import Testimonials from '../Testimonials';
import Industries from '../Industries';
import Statistics from '../Statistics';
import FeaturedOn from '../FeaturedOn';
import About from '../About';
import Footer from '../Footer';

class Webingo extends Component{
    render(){
        return(
            <div>
                <header class="fixed-header">
                    <div class="logo">
                        <img src="https://c.smartrecruiters.com/sr-company-logo-prod-aws-dc5/60585756d9957204418c9b27/huge?r=s3-eu-central-1&_1616402780064" alt="logo-img"/>
                    </div>
                    <nav class="navigation">
                        <ul>
                            <li><a href="#home">IT SOLUTIONS+</a></li>
                            <li><a href="#products">STARTUP BOX+</a></li>
                            <li><a href="#contact">COMPANY+</a></li>
                            <li><a href="#contact">PURCHASE+</a></li>
                            <li><a href="#contact">PORTFOLIO</a></li>
                            <li><a href="#contact">CAREER</a></li>
                            <li><a href="#contact">REACH US+</a></li>
                            <li><a href="#contact"><BsTelephoneFill/></a></li>
                        </ul>
                    </nav>
                </header>
                <div className='top-section'>
                    <div className="website-title-section">
                        <h1>WEBSITE</h1>
                        <h1>GRAPHICS</h1>
                        <h1>MARKETING</h1>
                        <h1>APPLICATION</h1>
                        <p>Digital IT Solutions for transforming and innovating Businesses.</p>
                        <button type='button'>View Portfolio &gt;</button>
                    </div>
                    <CardCarousel/>
                </div>
                <div className='website-description-section'>
                    <div className='website-description'>
                        <h1>Why to take your business Online?</h1>
                        <p> Internet may be a deep-sea expecting to be explored. You can get all you want if you dive in. If you're taking your business online, it has certain benefits. It improves your brand image, your business is often available to consumers 24/7, the start-up cost is extremely less, it reduces operation cost, you'll work from anywhere around the world, but most significantly, the web was made for Business.</p>
                        <h3>In todays market, is it required-</h3>
                        <ul>
                            <li>To beat the Competetion.</li>
                            <li>To Gain Leverage in the Market.</li>
                            <li>To get exposure and expansion.</li>
                        </ul>
                        <button type='button'>Request A Quote</button>
                    </div>
                    <div className='laptop-img'>
                        <img src="https://previews.123rf.com/images/onston/onston1804/onston180400002/98971824-responsive-web-site-design-with-laptop-screen.jpg" alt="laptop" />
                    </div>
                </div>
                <div className='company-description'>
                    <h4 className='color-transition'>WE ARE INNOVATIVE SOLUTION PROVIDERS</h4>
                    <h1>Top rated IT- Solutions Company</h1>
                    <p>WEBINGO® is a renowned end-to-end IT company in India that provides ultimate IT solutions and has provided consultancy to numerous start-ups across India, making a name as one of the best IT consulting companies in Kolkata. WEBINGO provides Innovative IT Solutions at minimal Investments at the best price and excellent Customer Service.</p>
                    <div className='services-cards'>
                        <div className="service-card-1">
                            <h3>Integrated Services</h3>
                            <p>We have worked over the years to Integrate all the services in one place so that you don’t have to go door-to-door for the best quality of service.</p>
                        </div>
                        <div class="service-card">
                            <img src="https://webingo.in/images/image2/logo.png" alt="web" />
                            <h3>Web Development</h3>
                            <p>PHP | HTML5 | REACT | WORDPRESS</p>
                        </div>
                        <div class="service-card">
                            <img src="https://webingo.in/images/image2/Hybrid-app.png" alt="app"/>
                            <h3>App Development</h3>
                            <p>PWA | REACT NATIVE | KOTLIN</p>
                        </div>
                        <div class="service-card">
                            <img src="https://webingo.in/images/image2/graphic_bred-1.png" alt="graphic" />
                            <h3>Graphic Designing</h3>
                            <p>BRAND | LOGO | BANNER | VC</p>
                        </div>
                        <div class="service-card">
                            <img src="https://www.webingo.in/images/thumb/dm.png" alt="digital" />
                            <h3>Digital Marketing</h3>
                            <p>PPC | SSM | AD CREATE | B2B LEAD</p>
                        </div>
                        <div class="service-card">
                            <img src="https://webingo.in/images/image3/seo/seo-bred.png" alt="seo" />
                            <h3>SEO</h3>
                            <p>ONPAGE | BACKLINK | ANALYTICS</p>
                        </div>
                    </div>
                </div>
                <div className='why-webingo-section'>
                    <h4 className='color-transition'>WE DELIVER OUR BEST</h4>
                    <h1>Why Choose WEBINGO?</h1>
                    <p>We are the best at what we do.</p>
                    <div className='features-cards'>
                        <div className='features-card'>
                            <img src="https://webingo.in/images/image3/why-trust/trust-bred.png" alt="trust"/>
                            <div>
                                <h4>Trustworthy Service</h4>
                                <p>We work to serve you so that you can make your business stronger.</p>
                            </div>
                        </div>
                        <div className='features-card'>
                            <img src="https://webingo.in/images/image2/business_planning-1.png" alt="team"/>
                            <div>
                                <h4>Dedicated Manager and Team</h4>
                                <p>We assign a manager and a team to your project for better and perfect results.</p>
                            </div>
                        </div>
                        <div className='features-card'>
                            <img src="https://webingo.in/images/image2/Softwar-testing.png" alt="technical"/>
                            <div>
                                <h4>Technical proficiency</h4>
                                <p>Our Team is highly proficient in the technology they use. They believe in understanding technology to a deeper level.</p>
                            </div>
                        </div>
                        <div className='features-card'>
                            <img src="https://webingo.in/images/about-bredcrumb.png" alt="customer-friendly"/>
                            <div>
                                <h4>Customer Friendly</h4>
                                <p>We listen to your problems with the utmost professionalism and friendly nature.</p>
                            </div>
                        </div>
                        <div className='features-card'>
                            <img src="https://www.clipartmax.com/png/small/173-1730499_we-provide-your-business-timely-reminders-on-the-reports-fire-clock-logo.png" alt="customer-friendly"/>
                            <div>
                                <h4>Timely Reports</h4>
                                <p>We give you knowledge about your project progress timely and communicate regarding the same.</p>
                            </div>
                        </div>
                        <div className='features-card'>
                            <img src="https://www.risely.me/wp-content/uploads/2023/05/Punctuality-at-work-1024x576.webp" alt="customer-friendly"/>
                            <div>
                                <h4>Punctuality</h4>
                                <p>The best delivered in time is our prime focus to increase satisfaction and trust. For us, time is the key!</p>
                            </div>
                        </div>
                    </div>
                    <div class="start-a-project">
                    <h2 className='normal'>Want to <span class="bold">start a</span> new project?</h2>
                    <button>Enquire Now &gt;</button>
                    </div>
                </div>
                <KeyExpertise/>
                <Testimonials/>
                <Industries/>
                <Statistics/>
                <FeaturedOn/>
                <div class="build-something-section">
                    <h3 class="blue-red">LET’S BUILD SOMETHING TOGETHER</h3>
                    <h1>Our Pleasure is to listen to your requirements</h1>
                    <button className="estimate-btn">Estimate Project &gt;</button>
                    <div className="call-us-now">
                        <p>Or call us now </p>
                        <button className="blue-red">
                            <BsTelephone/>
                            8001-81-1234
                        </button>
                    </div>
                </div>
                <div class="stay-with-us-section">
                    <div>
                        <h1>Stay Tuned with us:</h1>
                        <p>Get WebInGo news and announcements delivered right to your inbox.</p>
                    </div>
                    <div class='email-input-btn'>
                        <input class='email-input' placeholder='Email Your Address'/>
                        <button>Subscribe &gt;</button>
                    </div>
                </div>
                <About/>
                <Footer/>
            </div>
        )
    }
}

export default Webingo