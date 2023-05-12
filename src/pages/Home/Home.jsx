import React from "react";
import Banner from "./Banner/Banner";
import JobCategory from "./JobCategory/JobCategory";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <main>
      <Banner />
      <JobCategory />
      <FeaturedJobs />
    </main>
  );
};

export default Home;
