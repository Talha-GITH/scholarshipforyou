import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header';
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';
import Contact from './Contact';
import ScholarshipPage from './ScholarshipPage';
import ScholarshipList from './ScholarshipList';
import ScholarshipDetails from './ScholarshipDetails';
import Thanks from './Thanks';
import ScholarshipDetailsPage from './ScholarshipDetailsPage';
import './HomeScreen.css';

function HomeScreen() {
  const [showSubscribeModal, setShowSubscribeModal] = useState(true);

  const handleSubscribeClose = () => {
    setShowSubscribeModal(false);
  };

  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} />
        <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
          {/* Adjust paddingTop and paddingBottom to match the height of your header and footer */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Thanks' element={<Thanks />} />
            <Route path='/Contact' element={<Contact />} /> {/* Corrected path */}
            <Route exact path="/ScholarshipList" element={<ScholarshipList/>} />
            <Route path="/ScholarshipPage" element={<ScholarshipPage />} /> {/* Corrected path */}
            <Route path="/ScholarshipDetails" element={<ScholarshipDetails />} /> {/* Corrected path */}
            <Route path="/" element={<ScholarshipPage />} />
            <Route path="/" element={<ScholarshipList />} />
            <Route path="/description/:scholarshipId" element={<ScholarshipDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        
        <footer style={{ width: '100%', backgroundColor: '#f0f0f0', zIndex: 1 }}>
          <Contact />
        </footer>

        {/* Subscribe Modal */}
        {showSubscribeModal && (
          <div className="modal-overlay" onClick={handleSubscribeClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="close" onClick={handleSubscribeClose}>&times;</div>
              <div className="modal-content">
                <h2>Subscribe</h2>
                <input type="email" placeholder="Enter your email" />
                <button className="button">Subscribe</button>
                <button className="button" onClick={handleSubscribeClose}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default HomeScreen;
