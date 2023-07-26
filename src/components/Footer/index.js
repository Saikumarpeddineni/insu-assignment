import './styles.css'
import {BsFacebook} from "react-icons/bs"
import {RxTwitterLogo} from "react-icons/rx"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const Footer=()=>{
    const style={fontSize:"2em",marginRight:"50px"}

    return(
        <div className='footer-section'>
            <div>
                <BsFacebook style={style}/>
                <RxTwitterLogo style={style}/>
                <BsInstagram style={style}/>
                <AiOutlineLinkedin style={style}/>
                <BsYoutube style={style}/>
                <BsWhatsapp style={style}/>
                <AiOutlineMail style={style}/>
            </div>
            <p>Copyright © 2017-23 Webingo. All rights reserved.</p>
            <div>
                <img src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-03.png?ID=61ad5d2a-94aa-438c-a6bc-3dcd044a7cda" alt="secured" />
            </div>
        </div>
    )
}

export default Footer