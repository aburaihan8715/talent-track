import React, { useState } from "react";
import Banner from "./Banner/Banner";
import JobCategory from "./JobCategory/JobCategory";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobsData = useLoaderData();

  const [jobs, setJobs]=useState(jobsData)
  return (
    <main>
      <Banner />
      <JobCategory />
      <FeaturedJobs jobs={jobs}/>
    </main>
  );
};

export default Home;
