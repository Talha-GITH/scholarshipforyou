import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaPhone, FaGraduationCap } from 'react-icons/fa';

import './Footer.css'; // Import your CSS file

function Contact() {
  const [contactInfo, setContactInfo] = useState('');

  const handleWhatsappClick = () => {
    // Replace this URL with the WhatsApp URL for your business
    window.location.href = 'https://wa.me/1234567890';
  };

  const handleInstagramClick = () => {
    // Replace this URL with the Instagram URL for your business
    window.location.href = 'https://www.instagram.com/example';
  };

  const handlePhoneClick = () => {
    // Replace this URL with the phone number URL scheme for your business
    window.location.href = 'tel:+1234567890';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:example@example.com'; // Replace this with your email address
  };

  return (
    <div className="footer-container">
      <footer>
        {/* ScholarshipForYou section */}
        <div className="scholarship-for-you-container">
          <FaGraduationCap className="scholarship-icon" />
          <span className="scholarship-text">ScholarshipForYou</span>
        </div>

        {/* Footer content */}
        <div className="footer-content">
          <div>
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">All Scholarships</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Need Help</h3>
            <ul>
              <li><a href="#">To Get Scholarship</a></li>
              <li><a href="#">Form Filling</a></li>
              <li><a href="#" onClick={handleWhatsappClick}>Chat on WhatsApp</a></li>
              <li><a href="#" onClick={handlePhoneClick}>Call Us</a></li>
              <li><a href="#" onClick={handleEmailClick}>Email Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        {/* Get in touch section */}
        <div className="get-in-touch">
          <p>Get in touch:</p>
          {/* WhatsApp */}
          <FaWhatsapp onClick={handleWhatsappClick} className="me-3" />

          {/* Instagram */}
          <FaInstagram onClick={handleInstagramClick} className="me-3" />

          {/* Phone */}
          <FaPhone onClick={handlePhoneClick} />
        </div>

        {/* Render contact info */}
        <p className="footer-text">{contactInfo}</p>
        <p className="footer-text">Copyright© 2024 ScholarshipForYou . All Rights Reserved by TM Pvt. Ltd.</p>
      </footer>
    </div>
  );
}

export default Contact;
