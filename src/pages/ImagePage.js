import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ImagePage = () => {
    const { id } = useParams(); // Extract the scholarship id from the URL parameter

    // Log the extracted ID to debug
    console.log('Extracted ID:', id);

    // State variables for loading state and error handling
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // State variable for storing the scholarship data
    const [scholarship, setScholarship] = useState(null);

    // Function to fetch the scholarship data corresponding to the id
    const fetchScholarshipById = async () => {
        if (!id ) {
            setLoading(false);
            setError('Scholarship ID is missing');
            return;
        }
    
        try {
            console.log('Fetching scholarship data for ID:', id);
            const response = await fetch(`http://localhost:5000/scholarship/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch scholarship data');
            }
            const data = await response.json();
            console.log('Scholarship data:', data);
            setScholarship(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching scholarship data:', error);
            setError(error.message);
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchScholarshipById();
    }, [id, fetchScholarshipById]); // Include fetchScholarshipById in the dependency array
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="image-page">
            {scholarship && (
                <div className="image-container">
                    <img src={scholarship.imageUrl2} alt={scholarship.name} />
                </div>
            )}
        </div>
    );
};

export default ImagePage;
