import React from "react";
import "./About.css";
import about from '../../assets/about.png'

const About = () => {
  return (
    <div className="about">
      <div className="image-container">
        <img
          src={about}
          alt=""
          className="student-image"
        />
      </div>
      <div className="content-container">
        <h1>About Us</h1>
        <p>
        TechnoLytics is a startup in the online education field. TechnoLytics is a platform where you will meet passionate 
        learners and faculties who can help you to enhance your knowledge in computer related courses. TechnoLytics provides 
        services like Online Teaching,Platform to conduct online courses, E content development etc. We are committed to 
        provide quality in all our services and we continuously obtain feedback from users on satisfaction levels of current 
        services.
        </p>
        <p>
        In a short period of time we have conducted various National level webinarsWe have also conducted online 
        certificate courses on Excel, Google Products etc. for more than 1000 students.
        </p>
      </div>
    </div>
  );
};

export default About;
