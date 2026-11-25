import React from 'react';
import ReactSlider from 'react-slick';
import Logo1 from "../assets/logo1.jpeg";
import Logo2 from "../assets/logo2.jpeg";
import Logo3 from "../assets/logo3.jpeg";
import Logo4 from "../assets/logo4.jpeg";
import Logo5 from "../assets/logo5.jpeg";
import Logo6 from "../assets/logo6.jpeg";
import Logo7 from "../assets/logo7.jpeg";
import Logo8 from "../assets/logo8.jpeg";
import Logo9 from "../assets/logo9.jpeg";
import Logo10 from "../assets/logo10.jpeg";
import Logo11 from "../assets/logo12.jpeg";
import Logo12 from "../assets/logo13.jpeg";
import Logo13 from "../assets/logo14.jpeg";





// CSS Imports
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ES Module / Vite Compatibility Fix
const Slider = ReactSlider.default || ReactSlider;

const partners = [
  {
    name: "MOVENS Solutions",
    logo: Logo1,
  },
  {
    name: "Movers",
    logo: Logo2,
  },
  {
    name: "Skillplex",
    logo: Logo3,
  },
  {
    name: "Trekker",
    logo: Logo4,
  },
  {
    name: "Wellness Wave",
    logo: Logo5,
  },
  {
    name: "Trendy Threads",
    logo: Logo6,
  },
  {
    name: "MOVENS Solutions",
    logo: Logo7,
  },
  {
    name: "Trendy Threads",
    logo: Logo8,
  },
  {
    name: "Trekker",
    logo: Logo9,
  },
  {
    name: "Wellness Wave",
    logo: Logo10,
  },
  {
    name: "Trendy Threads",
    logo: Logo11,
  },
  {
    name: "MOVENS Solutions",
    logo: Logo12,
  },
  {
    name: "Trendy Threads",
    logo: Logo13,
  },
];



// service_p1ahc0i
// 

export default function PartnersSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    swipeToSlide: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="w-full bg-[#fefefe] pt-10  overflow-hidden">
      <div className="">
        <Slider {...settings}>
          {partners.map((partner, idx) => (
            <div key={idx} className=" ">
              <div className="flex items-center justify-center  h-20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto object-contain  transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}