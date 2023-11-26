import React from "react";
import HomeNavbar from "./components/home-navbar/HomeNavbar";

const Home = () => {
  return (
    <>
      <div className="home m-10 grid gap-5">
        <div className="text-customGray font-medium text-4xl">Home</div>
        <HomeNavbar />
      </div>
    </>
  );
};

export default Home;
