import React, { useEffect, useRef } from 'react';
import './styles.css'
import '../Webingo/styles.css'
import '../CardCarousel/styles.css'

const testimonials = [{
    companyImgUrl:"https://mir-s3-cdn-cf.behance.net/projects/404/7ba0d552745785.Y3JvcCwzMDA3LDIzNTMsMCwyNTI.png",
    testimony:"Best and reasonable and I'm very much impressed by the top notch work, done by Webingo and I wish your team to prosper in business and I'll always prefer you company if any further requirements",
    customerName:"Prasanth Singh",
    role:"Senior Manager",
    company:"Autonext",
},{
    companyImgUrl:"https://graphicem.com/wp-content/uploads/2020/08/coral-logo.jpg",
    testimony:"Best and reasonable and I'm very much impressed by the top notch work, done by Webingo and I wish your team to prosper in business and I'll always prefer you company if any further requirements",
    customerName:"Abhishek Chattarjee",
    role:"Director",
    company:"Coral Mart",
},{
    companyImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4QA5cEfw90MXkcPsPTZxEWKBDrj0Rx93KhMi6hTLaHo6uHQfD0_7TFjoiWR6XGED-hg&usqp=CAU",
    testimony:"Best and reasonable and I'm very much impressed by the top notch work, done by Webingo and I wish your team to prosper in business and I'll always prefer you company if any further requirements",
    customerName:"Akash Bansal",
    role:"Director",
    company:"Bansal Polymers",
},{
    companyImgUrl:"https://startagist.com/wp-content/uploads/2020/11/Legal-Salah-logo.png",
    testimony:"Best and reasonable and I'm very much impressed by the top notch work, done by Webingo and I wish your team to prosper in business and I'll always prefer you company if any further requirements",
    customerName:"Sujit Jha",
    role:"Director",
    company:"Legalsalah",
},{
    companyImgUrl:"https://mir-s3-cdn-cf.behance.net/projects/404/7ba0d552745785.Y3JvcCwzMDA3LDIzNTMsMCwyNTI.png",
    testimony:"Best and reasonable and I'm very much impressed by the top notch work, done by Webingo and I wish your team to prosper in business and I'll always prefer you company if any further requirements",
    customerName:"Prasanth Singh",
    role:"Senior Manager",
    company:"Autonext",
},{
    companyImgUrl:"https://mir-s3-cdn-cf.behance.net/projects/404/7ba0d552745785.Y3JvcCwzMDA3LDIzNTMsMCwyNTI.png",
    testimony:"Best and reasonable and I'm very much impressed by the top notch work, done by Webingo and I wish your team to prosper in business and I'll always prefer you company if any further requirements",
    customerName:"Prasanth Singh",
    role:"Senior Manager",
    company:"Autonext",
}]

const Testimonials=()=>{
    const carouselRef = useRef(null);
    const cardWidth = 100;
    const totalCards=6;
    const cardsToShow=3;

    useEffect(() => {
        const carouselContainer = carouselRef.current;
        let scrollInterval;
    
        const startScroll = () => {
          scrollInterval = setInterval(() => {
            const nextScrollLeft = carouselContainer.scrollLeft + cardWidth;
            if (nextScrollLeft >= cardWidth * (totalCards + cardsToShow)) {
              carouselContainer.scrollLeft = cardWidth;
            } else {
              carouselContainer.scrollLeft = nextScrollLeft;
            }
          }, 3000);
        };
    
        const stopScroll = () => {
          clearInterval(scrollInterval);
        };
    
        carouselContainer.addEventListener('mouseenter', stopScroll);
        carouselContainer.addEventListener('mouseleave', startScroll);
        
    
        startScroll();
    
        return () => {
          carouselContainer.removeEventListener('mouseenter', stopScroll);
          carouselContainer.removeEventListener('mouseleave', startScroll);
          clearInterval(scrollInterval);
        };
      }, []);
  

    return(
        <div className='testimonials-container'>
            <h4 className='color-transition'>SERVICE TESTIMONIALS</h4>
            <h1>Client Testimonials</h1>
            <p>Check out what our happy customers say.</p>
            <div className="testimonials-outer-container">
            <div className="carousel-container" ref={carouselRef}>
                <div className="card-carousel">
                {testimonials.map((eachCard) => (
                    <div className="testimony-card">
                    <div className='logo-quote'>
                        <img src="https://www.nicepng.com/png/detail/465-4657888_testimonial-quotes-icon-png.png" alt='quote' />
                        <img src={eachCard.companyImgUrl} alt={eachCard.company} />
                    </div>
                    <p>{eachCard.testimony}</p>
                    <div className='customer-details'>
                        <h3>{eachCard.customerName}</h3>
                        <p>{eachCard.role}, {eachCard.company}</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuKpjyzsuAsI_1CZvJi3Wd0VDYsH81oZGfYC32AxeqXL5UADRG7q9M6p6Y95EMD4Xr4w&usqp=CAU" alt="rating"/>
                    </div>
                </div>
        ))}
                </div>
      </div>
    </div>
        </div>
    )
}

export default Testimonials