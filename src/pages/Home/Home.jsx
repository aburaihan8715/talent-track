import React from 'react';
import Banner from './Banner/Banner';
import JobCategory from './JobCategory/JobCategory';
import FeaturedJob from './FeaturedJob/FeaturedJob';

const Home = () => {
  return (
    <main>
      <Banner/>
      <JobCategory/>
      <FeaturedJob/>
    </main>
  );
}

export default Home;
