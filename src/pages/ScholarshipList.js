import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ScholarshipList.css';

const ScholarshipList = () => {
  // State variables to manage scholarships, selected image, and loading status
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.2:5000/123/scholarship');
      setPosts(response.data);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle click on an image, setting selectedPostId
  const handleImageClick = (postId) => {
    setSelectedPostId(postId);
  };

  // Render loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render list of scholarships
  return (
    <div>
      <h2>All Scholarships</h2>
      <ul className="scholarship-list">
        {posts.map(post => (
          <li key={post._id} className="scholarship-item">
            <Link to={`/description/${post._id}`} className="scholarship-link">
              <div className="scholarship-details">
                <h2>{post.name}</h2>
                <img 
                  src={post.imageUrl1} 
                  alt={post.name} 
                  style={{ width: '100%', marginBottom: '10px' }} 
                  onClick={() => handleImageClick(post._id)} 
                />
                <p>{post.region}<span role="img" aria-label="Funding Currency">🌐🌐🌐</span></p>
                <p>{post.deadline} </p>
                <p>{post.fundingType} <span role="img" aria-label="Funding Currency">💵 💵 💵 </span></p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* Render selected link below the list */}
      {selectedPostId && (
        <Link to={`/description/${selectedPostId}`}>Scholarship Details</Link>
      )}
    </div>
  );
};

export default ScholarshipList;
