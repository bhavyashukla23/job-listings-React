# Job Listings Application

## Overview

This project is a job listings application built with React. It allows users to filter job listings based on role, minimum experience, remote availability, minimum salary, location, and company name. The application fetches job data from an API and displays it in a user-friendly manner.

## Features

- Fetches job listings from an API
- Filters job listings based on user-selected criteria
- Displays job details including company information, job role, location, salary, and experience
- Provides "View Job" links to view more details about each job
- Includes buttons for easy application and unlocking referral asks

## Getting Started

These instructions will help you set up and run the application on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/bhavyashukla23/job-listings.git
   
2. Install the dependencies:

   ```sh
   npm install

### Dependencies
The following dependencies are required for this project:

- react: ^18.3.1
- react-bootstrap: ^2.10.2
- react-scripts: ^5.0.1
- react-select: ^5.8.0

  

### Running the Application

1. Start the development server:
   ```sh
   npm start
   
2. Open your browser and navigate to  **http://localhost:3000 ** to see the application running.



### Directory Structure

- src/
- assets/ - Contains image assets used in the application
- components/ - Contains React components
- Filters.js - Component for filter options
- Jobs.js - Component for displaying job listings
- App.js - Main application component
- index.js - Entry point for the React application
- filters.css - CSS for filter components
- job-listings.css - CSS for job listings components
  


### Important Files
  
- src/components/Filters.js - Contains the filter component logic and rendering
- src/components/Jobs.js - Contains the job listings component logic and rendering
- src/filters.css - CSS styles specific to the filter component
- src/job-listings.css - CSS styles specific to the job listings component


### Additional Information

- The job data is fetched from https://api.weekday.technology/adhoc/getSampleJdJSON using a POST request.
- The Filters component uses react-select for dropdowns and react-bootstrap for the search input.
- The Jobs component displays job cards with company logo, job role, location, salary, and buttons for easy application and unlocking referrals.


### Contributing
- Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

### License
- This project is licensed under the MIT License - see the LICENSE file for details.

### Contact
- For any questions or feedback, please contact Bhavya Shukla at [bhavyashukla23@gmail.com](mailto:bhavyashukla23@gmail.com).







