import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
