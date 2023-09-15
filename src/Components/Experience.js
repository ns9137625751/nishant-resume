import React from 'react'
import './style.css'
export const Experience = () => {
  return (
    <>
      <div className="container card-container" style={{'color':'green', 'fontFamily':'cursive'}}>
        <div class="card text-center">
          <div class="card-header" style={{'color':'green'}}>
            Full Stack Developer Intern
          </div>
          <div class="card-body">
            <h5 class="card-title">Full Stack Developer at ABSIDE Solutions.</h5>
            <p class="card-text">Motivated and results-driven intern with hands-on experience in the MERN (MongoDB, Express.js, React,
              Node.js) stack. Developed a full-stack project during the internship, showcasing proficiency in web
              development.</p>
            <p className="card-text">Designed and implemented a full-stack web application using the MERN stack, demonstrating end-to-end
              development skills from database design with MongoDB to frontend development with React.</p>
            <p className="card-text">Gained proficiency in JavaScript, React, Node.js, Express.js, MongoDB, and RESTful API development.</p>
            <p className="card-text">Demonstrated a strong commitment to learning and professional growth, continually expanding skills in web
              development and staying updated with industry best practices.</p>
            <a href="http://absidesolutions.com/" class="btn btn-primary">ABSIDE Solutions</a>
          </div>
          
        </div>
      </div>
    </>
  )
}
