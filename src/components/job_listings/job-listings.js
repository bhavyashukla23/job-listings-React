import React, { useState, useEffect } from "react";
import Lightningicon from '../../assets/lightning-icon.png';
import Person1 from '../../assets/images.jpg';
import Person2 from '../../assets/pexels-pixabay.jpg';
import CheckBox from '../../assets/check-box.png';
import './job-listings.css';
import {data} from '../../constants/data.js';

const Jobs = ({ filters }) => {
    const [jobs, setjobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    // Fetching data from API when component mounts
    useState(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({}),
                    }
                );
                const data = await res.json({});
                setjobs(data.jdList);
            } catch (error) {
                console.error("Error in fetching data", error);
                setjobs(data.jdList);
            }
        };
        fetchJobs();
    }, []);

    //To apply filters whenever filters or jobs change
    useEffect(() => {
        const applyFilters = () => {
            const filtered = jobs.filter(job => {
                const matchesRole = filters.role ? job.jobRole.toLowerCase().includes(filters.role.value.toLowerCase()) : true;
                const matchesExp = filters.minExp ? job.minExp >= parseInt(filters.minExp.value, 10) : true;
                const matchesRemote = filters.remote && filters.remote.value === true ? job.location.toLowerCase().includes('remote') : true;
                const matchesSalary = filters.minSal ? job.minJdSalary >= parseInt(filters.minSal.value, 10) : true;
                const matchesLocation = filters.location ? job.location.toLowerCase().includes(filters.location.value.toLowerCase()) : true;
                const matchesCompany = filters.companyName ? job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) : true;

                return matchesRole && matchesExp && matchesRemote && matchesSalary && matchesLocation && matchesCompany;
            });

            setFilteredJobs(filtered);
        };

        applyFilters();
    }, [filters, jobs]);


    return (
        <div className="jobs">
            {filteredJobs.map((job, index) => (
                <div className="job-card" key={index}>
                    <div className="company-info">
                        {/* To display company logo */}
                        <img src={job.logoUrl} alt="Company Logo" className='logo' />
                        <div>
                            {/* To display job details */}
                            <h3 className="job-details">{job.jobRole}</h3>
                            <h2 className="job-details">{job.companyName}</h2>
                            <p className="job-details">{job.location}</p>
                        </div>
                    </div>

                    {/* To display estimated salary range */}
                    <div className="salary">
                        <p className="salary-range">
                            Estimated Salary: {job.minJdSalary !== null ? `${job.minJdSalary} -` : 'Upto'} {job.maxJdSalary} {job.salaryCurrencyCode}
                            <img src={CheckBox} alt='checkbox' className='checkbox' />
                        </p>
                    </div>

                    <div className="about-company">
                        {/* To display job description */}
                        <h3>About Company:</h3>
                        <p>{job.jobDetailsFromCompany}</p>
                        {/* Link to view full job description */}
                        <div className="view-more-container">
                            <a href={job.jdLink} target="_blank" rel="noopener noreferrer" className="view-more">
                                View Job
                            </a>
                        </div>
                    </div>

                    <div className="exp-apply-container">
                        {/* To display minimum experience required */}
                        <p className="experience">Minimum Experience Required</p>
                        <p className="experience">{job.minExp != null ? job.minExp : '0'} years</p>

                        {/* Easy Apply button */}
                        <button className="buttons" style={{ backgroundColor: '#00ffee' }}>
                            <img src={Lightningicon} alt='lightning-icon' className='icon' />
                            Easy Apply
                        </button>

                        {/* Unlock Referral Asks button */}
                        <button className='buttons' style={{ backgroundColor: '#007bff', color: '#fff' }}>
                            <img src={Person1} alt='person1' className='people' />
                            <img src={Person2} alt='person2' className='people' />
                            Unlock Referral Asks
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Jobs;