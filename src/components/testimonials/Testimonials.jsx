import React from "react";
import "./Testimonials.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";
import test4 from "../../assets/test4.png";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      company: "ABC Tech Solutions",
      img: test1,
      feedback:
        "We found the perfect Software Engineers for our project through this platform. Highly recommended!",
      author: "John Doe",
      designation: "CTO",
    },
    {
      id: 2,
      company: "XYZ Industries",
      img: test2,
      feedback:
        "Cutshort made our hiring process seamless and efficient. Great platform!",
      author: "Jane Smith",
      designation: "HR Manager",
    },
    {
      id: 3,
      company: "Tech Innovators",
      img: test3,
      feedback:
        "We found the best Product Managers for our team through this platform. Highly recommended!",
      author: "David Johnson",
      designation: "VP of Product",
    },
    {
      id: 4,
      company: "WebTech Solutions",
      img: test4,
      feedback:
        "HireGenius helped us find skilled Software Engineers quickly. Fantastic service!",
      author: "Sarah Williams",
      designation: "Tech Lead",
    },
    {
      id: 5,
      company: "Creative Designs",
      img: test2,
      feedback:
        "Cutshort's candidate screening process saved us valuable time during recruitment. Impressive!",
      author: "Michael Adams",
      designation: "Creative Director",
    },
  ];

  // Carousel settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <h2>Our users love their successes</h2>
      <div className="testimonial-list">
        <div>
          <Slider {...settings}>
            {testimonialsData.map((testimonial) => {
              return (
                <div key={testimonial.id} className="testimonial-item">
                  <div className="testimonial-author">
                    <div className="image">
                      <img src={testimonial.img} alt="" />
                    </div>
                    <div className="details">
                      <strong>{testimonial.author}</strong>
                      <span>
                        {testimonial.designation}, {testimonial.company}
                      </span>
                    </div>
                  </div>
                  <p>{testimonial.feedback}</p>
                </div>
              );
            })}
          </Slider>
          ;
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
