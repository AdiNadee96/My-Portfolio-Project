import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    
//     useEffect(() => void {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])

  return (
    <>
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>Exceptionally driven and creative computer science graduate with a solid academic background and a passion for using technology to solve tough challenges. </p>
            <p>A quick learner with practical knowledge of software development, algorithm design along with strong communication skills who is prepared to offer new perspectives and adjust to the changing difficulties of the tech sector. </p>
            <p>Dedicated to lifelong learning and development, I'm seeking opportunities to use my abilities to develop innovative and scalable solutions</p>
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faFigma} color='#000'/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                </div>
            </div>
        </div>
    </div>

    <Loader active type='pacman'/>
    </>
  )
}

export default About