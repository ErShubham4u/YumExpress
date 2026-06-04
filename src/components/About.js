import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1> About </h1>
      <User name = {"Shubham Kumar ( Functional Component )"}/>
      <User name = {"Abhi Raj ( Functional Component )"}/>
      <UserClass/>
    </div>
  );
};

export default About;
