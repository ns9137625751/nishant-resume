import React from 'react'

export const Portfolio = () => {
  return (
    <>
      <div className="container card-container" style={{'fontFamily':'cursive'}}>
        <div class="card text-center card-main">
          <div class="card-header" style={{'color':'green'}}>
            Projects
          </div>
          <div class="card-body">
            <h5 class="card-title">Service Provider</h5>
            <p class="card-text"> Designed and developed a full-stack service provider website, utilizing the MERN (MongoDB, Express.js, React, Node.js) stack to
              create a seamless booking experience</p>
            <p className="card-text">Incorporated essential features such as user registration and authentication, technician profiles.</p>
            <p className="card-text">Ensured a responsive and mobile-friendly design to guarantee a consistent and enjoyable user experience across various devices and
              screen sizes.</p>
            <p className="card-text">Built a reliable backend using Node.js and Express.js, managing data storage and retrieval with MongoDB, and implementing
              RESTful API endpoints for seamless communication.</p>
            <p className="card-text">Conducted rigorous testing, including unit tests and user acceptance testing, to identify and rectify bugs, ensuring a stable and error free platform</p>
            <p className="card-text">Developed expertise in MERN stack technologies and project management design through the creation of Service Provider.</p>
            <a href="https://github.com/ns9137625751/Home-Services" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>


        <div class="card text-center card-main card-inotebook">
          <div class="card-header" style={{'color':'green'}}>
            Projects
          </div>
          <div class="card-body">
            <h5 class="card-title">inotebook</h5>
            <p class="card-text">Designed and implemented 'iNotebook,' a full-stack web application that allows users to create, edit, delete and securely store
              private notes using the MERN stack.</p>
            <p className="card-text">Implemented robust security measures to protect user data and notes, including encryption of sensitive information and secure user
              authentication</p>
            <p className="card-text">Developed a robust backend using Node.js and Express.js, with a MongoDB database, to support user authentication, note storage,
              and retrieval.</p>
            <p className="card-text">Utilized MongoDB to store user-generated notes securely and developed RESTful API endpoints for seamless data interaction.</p>

            <a href="https://github.com/ns9137625751/inotebook" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      </div>
    </>
  )
}
