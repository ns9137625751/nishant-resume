import React from 'react'
import pic from './output (3).png'
import resume from './Nishant resume.pdf'
import './style.css'
import { Slider } from './Slider'
export const Home = () => {
  return (
    <>
    <Slider/>
      <h1 className="top-center my-5">Web Developer</h1>
      <div className="container" >
        <img src={pic} className="img-fluid nishant-img" alt='nishant' />
      </div>
      <h5 className="top-center my-5"><a href={resume} download>Click to Download Resume</a></h5>
    </>
  )
}