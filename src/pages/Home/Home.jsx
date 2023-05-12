import React from 'react';
import Banner from './Banner/Banner';
import JobCategory from './JobCategory/JobCategory';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';


const Home = () => {
  return (
    <main>
      <Banner/>
      <JobCategory/>
      <FeaturedJobs/>
    </main>
  );
}

export default Home;
