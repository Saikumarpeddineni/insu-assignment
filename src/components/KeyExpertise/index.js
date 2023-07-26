import './styles.css'
import '../Webingo/styles.css'

const KeyExpertise=()=>{
    return(
        <div className='key-expertise-areas-container'>
            <h4 className='blue-red'>OUR EXCELLENCE</h4>
            <h1>Our Key Expertise Areas</h1>
            <div className='key-expertise-cards'>
                <div className='expertise-card exp-1'>
                    <div>
                        <p>DESIGN</p>
                        <h3>Graphic Designing and Branding</h3>
                    </div>
                    <img src="https://webingo.in/images/graphics-png.png" alt="branding"/>
                </div>
                <div className='expertise-card exp-2'>
                    <div>
                        <p>APPLICATION</p>
                        <h3>Application Based Software</h3>
                    </div>
                    <img src="https://webingo.in/images/image3/acheivement/technology-bred.png" alt="branding"/>
                </div>
                <div className='expertise-card exp-3'>
                    <div>
                        <p>SEO</p>
                        <h3>Search Engine Optimization</h3>
                    </div>
                    <img src="https://www.webingo.in/images/thumb/seo.png" alt="branding"/>
                </div>
                <div className='expertise-card exp-4'>
                    <div>
                        <p>SEO</p>
                        <h3>Search Engine Optimization</h3>
                    </div>
                    <img src="https://webingo.in/images/image2/cms-web-development.png" alt="branding"/>
                </div>
            </div>
            <div class="start-a-project">
            <h3 className='normal'>Get Your Free <span class="bold">Customized Quotation</span></h3>
            <button>Today &gt;</button>
            </div>
        </div>
    )
}

export default KeyExpertise