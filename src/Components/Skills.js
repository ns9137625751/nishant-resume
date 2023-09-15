import React from 'react'
import './style.css'
import htmllogo from '../logos/html5.png'
import csslogo from '../logos/css3.png'
import jslogo from '../logos/javascript.png'
import pythonlogo from '../logos/python.png'
import nodejslogo from '../logos/nodejs.png'
import reactlogo from '../logos/reactjs.png'
import clogo from '../logos/c.png'
import c__logo from '../logos/c++.png'
import dsalogo from '../logos/dsa.png'
import gitlogo from '../logos/git.png'
import mongoDblogo from '../logos/mongoDb.jpg'
import mysqllogo from '../logos/mysql.png'
import expressJslogo from '../logos/expressJs.png'
import dbmslogo from '../logos/dbms.png'
import oppslogo from '../logos/opps.png'
export const Skills = () => {
  return (
    <>
      <h1 className='skills-h1'>Skills</h1>
      <div className="skills-container">

        <div className="container logo">
          <li><h1 style={{ 'color': 'black', 'fontFamily': 'cursive','marginTop':'61px' }}>Languages</h1></li>
          <li className='mx-3 mt-5'><img src={htmllogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>HTML</p></li>
          <li className='mx-3 mt-5'><img src={csslogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>CSS</p></li>
          <li className='mx-3 mt-5'><img src={jslogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>JavaScript</p></li>
          <li className='mx-3 mt-5'><img src={pythonlogo} alt="Html 5" /><p className='mt-3 mx-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>Python</p></li>
          <li className='mx-3 mt-5'><img src={clogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>C</p></li>
          <li className='mx-3 mt-5'><img src={c__logo} alt="Html 5" /><p className='mt-3 mx-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>C++</p></li>
        </div>

        <div className="container  logo">
        <li><h1 style={{ 'color': 'black', 'fontFamily': 'cursive','marginTop':'30px' }}>Frameworks</h1></li>
          <li className='mx-5'><img src={reactlogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>React.Js</p></li>
          <li className='mx-5'><img src={nodejslogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>Node.Js</p></li>
          <li className='mx-5'><img src={expressJslogo} alt="Html 5" style={{"height":"130px"}}/><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>Express.Js</p></li>
        </div>

        <div className="container  logo">
        <li><h1 style={{ 'color': 'black', 'fontFamily': 'cursive','marginTop':'30px' }}>Database</h1></li>
          <li className='mx-5'><img src={mongoDblogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>MongoDB</p></li>
          <li className='mx-5'><img src={mysqllogo} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>MySql</p></li>
        </div>

        <div className="container  logo">
        <li><h1 style={{ 'color': 'black', 'fontFamily': 'cursive','marginTop':'30px' }}>Technical</h1></li>
          <li className='mx-5'><img src={dsalogo} style={{"height":"130px"}} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>React.Js</p></li>
          <li className='mx-5'><img src={gitlogo} style={{"height":"130px"}} alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>Node.Js</p></li>
          <li className='mx-5'><img src={dbmslogo}style={{"height":"130px"}}  alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>React.Js</p></li>
          <li className='mx-5'><img src={oppslogo}style={{"height":"130px"}}  alt="Html 5" /><p className='mt-3 skill-name' style={{ 'color': "black", 'fontFamily': 'cursive' }}>Node.Js</p></li>
        </div>

      </div>
    </>
  )
}
