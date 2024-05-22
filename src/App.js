import React from 'react';
import Filters from './components/filters/filters';
import Jobs from './components/job_listings/job-listings'

const App = () => {
  return (
    <div>
      <Filters/>
      <Jobs/>
    </div>
  );
}

export default App;
