import React from 'react'
import './style.css'
import htmllogo from '../logos/html5.png'
import csslogo from '../logos/css3.png'
import jslogo from '../logos/javascript.png'
import pythonlogo from '../logos/python.png'
import nodejslogo from '../logos/nodejs.png'
import reactlogo from '../logos/reactjs.png'
export const Skills = () => {
  return (
    <>
      <h1 className='skills-h1'>Skills</h1>
      <div className="container logo">
        <li className='mx-5'><img src={pythonlogo} alt="Html 5"/></li>
        <li className='mx-5'><img src={reactlogo} alt="Html 5"/></li>
        <li className='mx-5'><img src={nodejslogo} alt="Html 5"/></li>
      </div>
      <div className="container  logo">
        <li className='mx-5 mt-5'><img src={htmllogo} alt="Html 5"/></li>
        <li className='mx-5 mt-5'><img src={csslogo} alt="Html 5"/></li>
        <li className='mx-5 mt-5'><img src={jslogo} alt="Html 5"/></li>
      </div>
    </>
  )
}
