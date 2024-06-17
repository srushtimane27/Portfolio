import React from "react";
import "./../Css/projects.css";

const Projects = () => {
  return (
    <div id="screen">
      <div id="container">

        <div id="first">
          <div className="img">
            <img className="w-h-100" src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" alt="" />
            <h2>E-commerce Website</h2>
            <p>Developed a fully functional e-commerce platform using React for the frontend and Node.js/Express.js for the backend. Implemented secure user authentication, product management, and payment processing using MongoDB as the database.</p>
          </div>
          <div className="info"></div>
        </div>

        <div id="second">
        <div className="img">
          <img className="w-h-100" src="https://media.istockphoto.com/id/1179661128/vector/user-experience-pop-up-windows-and-notifications-of-different-programs-and-applications.jpg?s=612x612&w=0&k=20&c=acB5IxRuLWxTJ89IzBAiU1iUlyJFkB2yjp-_vXgdL8U=" alt="" />
          <h2>Portfolio Website</h2>
          <p>Built and deployed my personal portfolio website to showcase my projects, skills, and experiences. Utilized React for the frontend and Node.js for the backend, with MongoDB to manage the data.</p>
        </div>
        <div className="info"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
