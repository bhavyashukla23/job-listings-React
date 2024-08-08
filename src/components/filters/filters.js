import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { Form, InputGroup } from 'react-bootstrap';
import './filters.css';


const Filters = ({ onUpdateFilters }) => {
    // Defined filter options for various fields
    const options = {
        role: [
            { value: "ios", label: "iOS" },
            { value: "android", label: "Android" },
            { value: "backend", label: "Backend" },
        ],
        experience: [
            { value: "0", label: "0" },
            { value: "3", label: "3" },
            { value: "6", label: "6" },
        ],
        remote: [
            { value: true, label: "Yes" },
        ],
        salary: [
            { value: "15", label: "15" },
            { value: "26", label: "26" },
            { value: "100", label: "100" },
        ],
        location: [
            { value: "Delhi NCR", label: "Delhi NCR" },
            { value: "Bangalore", label: "Bangalore" },
            { value: "Chennai", label: "Chennai" },
        ],
    };

    // Initialized state for filters with default values
    const [filters, setFilters] = useState({
        role: null,
        minExp: null,
        remote: null,
        minSal: null,
        location: null,
        companyName: ''
    });

    // To update filters when the filters state changes
    useEffect(() => {
        onUpdateFilters(filters);
    }, [filters, onUpdateFilters]);

    // Handling change in filter fields
    const handleChange = (field, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [field]: value
        }));
    };

    return (
        <div className="filters">
            {/* Dropdown for selecting from different filter options */}
            <Select
                options={options.role}
                className='filter'
                placeholder='Role'
                value={filters.role}
                onChange={value => handleChange('role', value)}
            />

            <Select
                options={options.experience}
                className='filter'
                placeholder='Minimum Experience'
                value={filters.minExp}
                onChange={value => handleChange('minExp', value)}
            />

            <Select
                options={options.remote}
                className='filter'
                placeholder='Remote'
                value={filters.remote}
                onChange={value => handleChange('remote', value)}
            />

            <Select
                options={options.salary}
                className='filter'
                placeholder='Minimum Salary'
                value={filters.minSal}
                onChange={value => handleChange('minSal', value)}
            />

            <Select
                options={options.location}
                className='filter'
                placeholder='Location'
                value={filters.location}
                onChange={value => handleChange('location', value)}
            />

            {/* Input field for searching by company name */}
            <Form>
                <InputGroup>
                    <Form.Control placeholder='Search Company Name'
                        value={filters.companyName}
                        onChange={e => handleChange('companyName', e.target.value)}
                    />
                </InputGroup>
            </Form>

        </div>
    );
};

export default Filters;