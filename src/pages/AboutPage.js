import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const AboutPage = () => {
  return (
    <BasicLayout>
      <div>
        <Link to={"/"}>MainPage이동</Link>
      </div>
    </BasicLayout>
  );
};

export default AboutPage;
