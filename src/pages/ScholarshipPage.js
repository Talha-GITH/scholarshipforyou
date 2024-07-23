import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import './ScholarshipPage.css';

const ScholarshipPage = () => {
    // State variables for filtering
    const [regionCountryFilter, setRegionCountryFilter] = useState("Any Country");
    const [degreeTypeFilter, setDegreeTypeFilter] = useState("Any Degree Type");
    const [fundingTypeFilter, setFundingTypeFilter] = useState("Any Funding Type");

    // State variable for storing scholarship data
    const [scholarships, setScholarships] = useState([]);
    // State variable for storing filtered scholarships
    const [filteredScholarships, setFilteredScholarships] = useState([]);

    // Function to fetch scholarship data
    const fetchScholarships = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5000/123/scholarship`);
            const data = await response.json();
            setScholarships(data);
            setFilteredScholarships(data); // Initially set filtered scholarships to all scholarships
        } catch (error) {
            console.error('Error fetching scholarship data:', error);
        }
    }, []);

    // Effect hook to fetch scholarships on component mount
    useEffect(() => {
        fetchScholarships();
    }, [fetchScholarships]);

    // Function to handle region/country filter change
    const handleRegionCountryFilterChange = (event) => {
        setRegionCountryFilter(event.target.value);
    };

    // Function to handle degree type filter change
    const handleDegreeTypeFilterChange = (event) => {
        setDegreeTypeFilter(event.target.value);
    };

    // Function to handle funding type filter change
    const handleFundingTypeFilterChange = (event) => {
        setFundingTypeFilter(event.target.value);
    };

    // Function to handle search button click
    const handleSearch = () => {
        // Filter scholarships based on selected filters
        const updatedFilteredScholarships = scholarships.filter(scholarship => {
            return (
                (regionCountryFilter === "Any Country" || scholarship.region === regionCountryFilter) &&
                (degreeTypeFilter === "Any Degree Type" || scholarship.degreeType === degreeTypeFilter) &&
                (fundingTypeFilter === "Any Funding Type" || scholarship.fundingType === fundingTypeFilter)
            );
        });
        setFilteredScholarships(updatedFilteredScholarships);
    };

    return (
        <div className="container">
            <h1>Opportunities</h1>
            <Filters
                regionCountryFilter={regionCountryFilter}
                degreeTypeFilter={degreeTypeFilter}
                fundingTypeFilter={fundingTypeFilter}
                onRegionCountryFilterChange={handleRegionCountryFilterChange}
                onDegreeTypeFilterChange={handleDegreeTypeFilterChange}
                onFundingTypeFilterChange={handleFundingTypeFilterChange}
                onSearch={handleSearch}
            />
            <ScholarshipList scholarships={filteredScholarships} />
        </div>
    );
};

const Filters = ({
    regionCountryFilter,
    degreeTypeFilter,
    fundingTypeFilter,
    onRegionCountryFilterChange,
    onDegreeTypeFilterChange,
    onFundingTypeFilterChange,
    onSearch,
}) => {
    return (
        <div className="filters-container">
            <label htmlFor="regionCountryFilter">Region/Country:</label>
            <select id="regionCountryFilter" value={regionCountryFilter} onChange={onRegionCountryFilterChange}>
                <option value="Any Country">Any Country</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="Australia">Australia</option>
                <option value="Italy">Italy</option>
                {/* Add more options for region/country */}
            </select>
            
            <label htmlFor="degreeTypeFilter">Degree Type:</label>
            <select id="degreeTypeFilter" value={degreeTypeFilter} onChange={onDegreeTypeFilterChange}>
                <option value="Any Degree Type">Any Degree Type</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Phd">Phd</option>
                {/* Add more options for degree types */}
            </select>
            <label htmlFor="fundingTypeFilter">Funding Type:</label>
            <select id="fundingTypeFilter" value={fundingTypeFilter} onChange={onFundingTypeFilterChange}>
                <option value="Any Funding Type">Any Funding Type</option>
                <option value="Full Funded">Full Funded</option>
                <option value="Partial Funded">Partial Funded</option>
                {/* Add more options for funding types */}
            </select>
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

const ScholarshipList = ({ scholarships }) => {
    return (
        <div className="scholarship-list">
            {scholarships.map(scholarship => (
                <div className="scholarship-item" key={scholarship.id}>
                    <h2 className="scholarship-name">{scholarship.name}</h2>
                    <div className="image-container">
                        {/* Use Link component to navigate to ImagePage */}
                        <Link to={`/image/${scholarship.id}`}>
                            <img src={scholarship.imageUrl1} alt={scholarship.name} />
                        </Link>
                    </div>
                    <div className="details">
                        <p>Region/Country: {scholarship.region}</p>
                        <p>Funding Type: {scholarship.fundingType}</p>
                        <p>Degree Type: {scholarship.degreeType}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScholarshipPage;
