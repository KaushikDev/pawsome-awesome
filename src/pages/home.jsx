import React, { Fragment } from "react";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="max-h-full">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
