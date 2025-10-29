import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselWrapper = styled.div`
  /* --- STYLES ADDED FOR 1:1 ASPECT RATIO --- */
  position: relative;
  width: 100%;
  &::before {
    content: "";
    display: block;
    padding-top: 100%; /* 1:1 Aspect Ratio */
  }

  .carousel.carousel-slider,
  .carousel-root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* --- END OF ADDED STYLES --- */

  .carousel .slide {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Ensure slide fills the carousel height */
  }

  .carousel .slide img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* --- CHANGED FROM 'cover' TO 'contain' --- */
  }

  .carousel .control-dots .dot {
    background: #ccc;
    box-shadow: none;
    width: 10px;
    height: 10px;
  }

  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    background: #1a1a1a;
  }

  .carousel .control-arrow {
    opacity: 0.8 !important;
    background-color: rgba(255, 255, 255, 0.7) !important;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    top: 50% !important;
    transform: translateY(-50%) !important;
    margin: 0 10px;

    &:before {
      border: none !important;
      font-size: 2.5rem;
      color: #1a1a1a;
      line-height: 40px;
      font-weight: 300;
    }
  }

  .carousel .control-prev.control-arrow:before {
    content: "‹" !important;
  }

  .carousel .control-next.control-arrow:before {
    content: "›" !important;
  }

  .carousel .control-arrow:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }

  .carousel .control-prev.control-arrow {
    left: 15px !important;
  }

  .carousel .control-next.control-arrow {
    right: 15px !important;
  }

  .carousel .slide .legend {
    display: none;
  }
`;

const ProductCarousel = ({ imageUrl, altText }) => {
  const images = [imageUrl, imageUrl, imageUrl];

  return (
    <CarouselWrapper>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`${altText} - view ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default ProductCarousel;