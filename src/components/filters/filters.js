import React from 'react';
import Select from 'react-select';
import { Form, InputGroup } from 'react-bootstrap';
import './filters.css';


const Filters = () => {

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

    return (
        <div className="filters">

            <Select
                options={options.role}
                className='filter'
                placeholder='Role'
            />

            <Select
                options={options.experience}
                className='filter'
                placeholder='Minimum Experience'
            />

            <Select
                options={options.remote}
                className='filter'
                placeholder='Remote'
            />

            <Select
                options={options.salary}
                className='filter'
                placeholder='Minimum Salary'
            />

            <Select
                options={options.location}
                className='filter'
                placeholder='Location'
            />

            <Form>
                <InputGroup>
                    <Form.Control placeholder='Search Company Name' />
                </InputGroup>
            </Form>

        </div>
    );
};

export default Filters;