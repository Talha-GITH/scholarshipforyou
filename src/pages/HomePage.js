import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css'; // Import the CSS file for additional styles
import ScholarshipPage from './ScholarshipPage';
import download1Image from './download1.png'; // Import the image
import downImage from './down.png'; // Import the image

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // Adjust the speed as needed
  };

  return (
    <div className="homepage-slider">
<p style={styles.paragraph}>Scholarship For International Students From Top Countries</p>

      <Slider {...settings}>
        <div>
          <img src={download1Image} alt="Image 1" />
                 </div>
                 <div>
          <img src={downImage} alt="Image 1" />
                 </div>
      
        {/* Add more images here */}
      </Slider>
      <ScholarshipPage/>
    </div>
  );
}


export default HomePage;
const styles = {
  paragraph: {
    fontWeight: 'bold',
    marginTop: '-10px', // Default margin for all screen sizes
  }
};
