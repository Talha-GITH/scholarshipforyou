import React from 'react';
import { useParams } from 'react-router-dom';

const ScholarshipDetails = ({ scholarships }) => {
  const { id } = useParams();
  const scholarship = scholarships.find(scholarship => scholarship.id === parseInt(id));

  const handleImageClick = () => {
    // Toggle between imageUrl1 and imageUrl2
    scholarship.imageUrl = scholarship.imageUrl === scholarship.imageUrl1 ? scholarship.imageUrl2 : scholarship.imageUrl1;
  };

  return (
    <div>
      <h2>Scholarship Details</h2>
      {scholarship ? (
        <div>
          <h3>{scholarship.name}</h3>
          <img 
            src={scholarship.imageUrl} 
            alt={scholarship.name} 
            style={{ width: '100%', marginBottom: '10px' }} 
            onClick={handleImageClick} 
          />
          <p>Description: {scholarship.details}</p>
        </div>
      ) : (
        <div>Scholarship not found</div>
      )}
    </div>
  );
};

export default ScholarshipDetails;
