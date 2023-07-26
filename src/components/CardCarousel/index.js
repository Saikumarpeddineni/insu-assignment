import React, { useEffect, useRef } from 'react';
import './styles.css'; 

const cards = [{id:1,imageUrl:"https://webingo.in/images/image2/web-designing-1.png",title:"Website Development"},
{id:2,imageUrl:"https://webingo.in/images/image2/Web-app.png",title:"App Development"},
{id:3,imageUrl:"https://webingo.in/images/image2/Custom%20Software-Development.png",title:"Software Development"},
{id:4,imageUrl:"https://webingo.in/images/image2/smm.png",title:"Digital Marketing"},
{id:5,imageUrl:"https://webingo.in/images/image2/web-designing-1.png",title:"Graphical Designing"},
{id:6,imageUrl:"https://webingo.in/images/image2/web-designing-1.png",title:"SEO Services"},
]

const CardCarousel = () => {
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

  return (
    <div className="carousel-outer-container">
      <div className="carousel-container" ref={carouselRef}>
        <div className="card-carousel">
        {cards.map((eachCard) => (
  <div className="card card-1">
    <img src={eachCard.imageUrl} alt={eachCard.title} />
    <h2>{eachCard.title}</h2>
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;