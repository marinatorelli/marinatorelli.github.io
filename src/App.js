
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Pdf from './Documents/MarinaTorelliCV.pdf';



function App() {
  return (

    <div className='container'>
      <div className='title text' >Hi, I'm Marina Torelli</div>
      <div className='subtitle text'>I’m a recent Computer Science and Engineering university graduate</div>
      <div className='desc text'>I have a passion for all things tech and design</div>
      <div className='resume'><a className='resume-a' href={Pdf} target="_blank" rel="noreferrer">resume</a></div>
      <div className='icons'>
        <a className='icon' href="https://www.linkedin.com/in/marina-torelli/" > <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a className='icon' href="https://github.com/marinatorelli" > <FontAwesomeIcon icon={faGithub} size="2x" /></a>
        <a className='icon' href="mailto:marinatorellipostigo@gmail.com" > <FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
      </div>
    </div >

  );
}

export default App;
