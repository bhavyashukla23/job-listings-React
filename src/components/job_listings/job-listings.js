import React, { useState } from "react";
import Lightningicon from '../../assets/lightning-icon.png';
import Person1 from '../../assets/images.jpg';
import Person2 from '../../assets/pexels-pixabay.jpg';
import CheckBox from '../../assets/check-box.png';
import './job-listings.css';

const Jobs = () => {
    const [jobs, setjobs] = useState([]);

    //toh fetch data from API
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
            }
        };
        fetchJobs();
    }, []);


    return (
        <div className="jobs">
            {jobs.map((job, index) => (
                <div className="job-card" key={index}>
                    <div className="company-info">
                    <img src={job.logoUrl} alt="Company Logo" className='logo' />
                        <div>
                            <h3 className="job-details">{job.jobRole}</h3>
                            <h2 className="job-details">{job.companyName}</h2>
                            <p className="job-details">{job.location}</p>
                        </div>
                    </div>

                    <div className="salary">
                    <p className="salary-range">
                            Estimated Salary: {job.minJdSalary !== null ? `${job.minJdSalary} -` : 'Upto'} {job.maxJdSalary} {job.salaryCurrencyCode}
                            <img src={CheckBox} alt='checkbox' className='checkbox' />
                        </p>
                    </div>

                    <div className="about-company">
                        <h3>About Company:</h3>
                        <p>{job.jobDetailsFromCompany}</p>
                        <div className="view-more-container">
                            <a href={job.jdLink} target="_blank" rel="noopener noreferrer" className="view-more">
                                View Job
                            </a>
                        </div>
                    </div>

                    <div className="exp-apply-container">
                        <p className="experience">Minimum Experience Required</p>
                        <p className="experience">{job.minExp != null  ? job.minExp : '0'} years</p>

                        <button className="buttons" style={{ backgroundColor: '#00ffee' }}>
                            <img src={Lightningicon} alt='lightning-icon' className='icon' />
                            Easy Apply
                        </button>

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