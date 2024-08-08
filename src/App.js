import React, { useState, useCallback } from 'react';
import Filters from './components/filters/filters';
import Jobs from './components/job_listings/job-listings';

const App = () => {
  // Initialized a state for filters with a default value
  const [filters, setFilters] = useState({ jobRole: '' });

  // Defined a callback function to update filters state
  const handleUpdateFilters = useCallback((updatedFilters) => {
    setFilters(updatedFilters);
  }, []);

  return (
    <div>
      {/* Rendering the Filters component, passing the handleUpdateFilters function */}
      <Filters onUpdateFilters={handleUpdateFilters} />

      {/* Rendering the Jobs component, passing the current filters state */}
      <Jobs filters={filters} />
    </div>
  );
};

export default App;

