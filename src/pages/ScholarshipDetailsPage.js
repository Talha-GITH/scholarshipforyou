import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ScholarshipDetails = () => {
  const { id } = useParams();
  const [scholarshipdetails, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/123/scholarship/${id}`);
        if (mounted) {
          setDetails(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{scholarshipdetails.name}</h2>
      {/* Render other details as needed */}
    </div>
  );
};

export default ScholarshipDetails;
