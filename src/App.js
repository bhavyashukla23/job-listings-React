import React, { useState, useCallback } from 'react';
import Filters from './components/filters/filters';
import Jobs from './components/job_listings/job-listings';

const App = () => {
    const [filters, setFilters] = useState({ jobRole: '' });

    const handleUpdateFilters = useCallback((updatedFilters) => {
        setFilters(updatedFilters);
    }, []);

    return (
        <div>
            <Filters onUpdateFilters={handleUpdateFilters} />
            <Jobs filters={filters} />
        </div>
    );
};

export default App;

